#lang racket/base

(provide replace-pen-references)
(require racket/match)


;; replace-pen-references: sexp -> sexp
;; This is meant to remove the references to "pens" in the documentation
;; as WeScheme does not currently support them.
(define (replace-pen-references an-sexp)
  (remove-ellipse-second-signature
   (remove-pen-examples
    (remove-scale-pen-sizes-note
     (remove-outline-pen-note
      (remove-shape-bounding-note
       (remove-or-c-pen-color-contract 
        (remove-pen-or-color-references 
         (sexp-normalize an-sexp)))))))))


(define (remove-pen-or-color-references an-sexp)
  (match an-sexp
    [(list tag (list '@ attrs ...) children ...)
     (list* tag (list* '@ attrs) (map remove-pen-or-color-references children))]
    [(list tag children ...)
     (list* tag (map replace-pen-references children))]
    [(? string?)
     (cond
      [(string=? an-sexp "pen-or-color")
       "color"]
      [else
       an-sexp])]
    [else
     an-sexp]))


;; deep-walk-child-elts: ((listof sexp) -> (listof sexp)) sexp -> sexp
;; Helper to recursively walk through the children elements and
;; do substitutions.
(define (deep-walk-child-elts walk an-sexp)
  (let loop ([an-sexp an-sexp])
    (match an-sexp
      [(list tag (list '@ attrs ...) children ...)
       (list* tag (list* '@ attrs) 
              (walk (map loop children)))]
      [(list tag children ...)
       (list* tag (walk (map loop children)))]
      [(? string?)
       an-sexp]
      [else
       an-sexp])))


;; remove-or-c-pen-color-contract an-sexp: sexp -> sexp
;; Remove references to the (or/c pen? image-color?)
(define (remove-or-c-pen-color-contract an-sexp)
  (define (walk elts)
    (match elts
      [(list (list 'span _ "(")
             (list 'span _ (list 'a _ "or/c"))
             _
             (list 'span _ (list 'a _ "pen?"))
             _
             (and X (list 'span _ (list 'a _ "image-color?")))
             (list 'span _ ")")
             rest ...)
       (list* X (walk rest))]
      [(list f r ...)
       (cons f (walk r))]
      [(list)
       '()]))
  (deep-walk-child-elts walk an-sexp))


;; weak-string-match: string -> (sexp -> boolean)
;; Returns a function that reports when x and y are the same, modulo
;; whitespace.
(define weak-string-match 
  (let ([ht (make-hash)])
    (lambda (x)
      (unless (hash-has-key? ht x)
        (hash-set! ht x 
                  (lambda (y)
                    (string=? (regexp-replace* #px"\\s+" x " ")
                              (regexp-replace* #px"\\s+" (sexp->string y) " ")))))
      (hash-ref ht x))))



(define (sexp->string an-sexp)
  (apply string-append
         (reverse
          (let loop ([an-sexp an-sexp]
                     [acc '()])
            (match an-sexp
              [(list tag (list '@ attrs ...) children ...)
               (foldl loop acc children)]
              [(list tag children ...)
               (foldl loop acc children)]
              [(? string?)
               (cons an-sexp acc)]
              [else
               acc])))))


;; sexp-normalize: sexp -> sexp
;; Normalize adjacent strings so they're joined together.
;; Meant to make the processing a little more robust.
(define (sexp-normalize an-sexp)
  (define (walk elts)
    (match elts
      [(list (and X (? string?))
             (and Y (? string?))
             rest ...)
       (walk (cons (string-append X Y) rest))]
      [(list f r ...)
       (cons f (walk r))]
      [(list)
       '()]))
  (let loop ([an-sexp an-sexp])
    (match an-sexp
      [(list tag (list '@ attrs ...) children ...)
       (list* tag (list* '@ attrs) (walk (map loop children)))]
      [(list tag children ...)
       (list* tag  (walk (map loop children)))]
      [(? string?)
       an-sexp]
      [else
       an-sexp])))





(define (remove-shape-bounding-note an-sexp)
  (define (walk elts)
    (match elts
      [(list "Note that when the "
             (list 'span _ "mode")
             " is "
             _
             (list 'span _ "outline")
             " or " 
             (list 'span _ "\"outline\"")
             (? (weak-string-match ", the shape may draw outside of its bounding box and thus parts of the image may disappear when it is cropped. See "))
             (list 'a _ ...)
             " (in the "
             _
             (? (weak-string-match ") for a more careful explanation of the ramifications of this fact."))
             rest ...)
       (walk rest)]
      [(list  (? (weak-string-match "Some shapes (notably those with "))
              _
              (list 'span _ "outline")
              " or " 
              (list 'span _ "\"outline\"")
              (? (weak-string-match " as the "))
              _
              (? (weak-string-match " argument) draw outside of their bounding boxes and thus cropping them may remove part of them (often the lower-left and lower-right edges). See "))
              (list 'a _ ...)
              " (in the "
              _
              (? (weak-string-match ") for a more careful discussion of this issue."))
              rest ...)
       (walk rest)]

      [(list f r ...)
       (cons f (walk r))]
      [(list)
       '()]))

  (deep-walk-child-elts walk an-sexp))



(define (remove-outline-pen-note an-sexp)
  (define (walk elts)
    (match elts
      [(list "If the "
             _
             " argument is "
             _
             (list 'span _ "outline")
             " or " 
             (list 'span _ "\"outline\"")
             (? (weak-string-match ", then the last argument can be a "))
             _
             (? (weak-string-match " struct or an "))
             _
             (? (weak-string-match ", but if the "))
             _
             (? (weak-string-match " is "))
             _
             (list 'span _ "solid")
             " or " 
             (list 'span _ "\"solid\"")
             (? (weak-string-match ", then the last argument must be an "))
             _
             "."
             rest ...)
       (walk rest)]
      [(list f r ...)
       (cons f (walk r))]
      [(list)
       '()]))

  (deep-walk-child-elts walk an-sexp))





(define (remove-scale-pen-sizes-note an-sexp)
  (define (walk elts)
    (match elts
      [(list (? (weak-string-match 
                 "The pen sizes are also scaled and thus draw thicker (or thinner) lines than the original image, unless the pen was size "))
             _
             _
             _
             _
             _
             (? (weak-string-match
                 " and thus it always draws a one pixel wide line; this is also the case for "))
             _
             (list 'span _ "outline")
             " and " 
             (list 'span _ "\"outline\"")
             (? (weak-string-match " shapes that are drawn with an "))
             _
             (? (weak-string-match " instead of a "))
             _
             "."
             rest ...)
       (walk rest)]
      [(list f r ...)
       (cons f (walk r))]
      [(list)
       '()]))

  (deep-walk-child-elts walk an-sexp))


(define (remove-pen-examples an-sexp)
  (define (walk elts)
    (match elts
      [(list 
        (and X 
             (list tr _ ...
                   (list td _ ...
                         (list 'table _ ...
                               (list 'tr _ ...
                                     (list 'td _ ... 
                                           (list 'span _ ...
                                                 (list 'a _ ... "make-pen" _ ...))
                                           _ ...)
                                     _ ...)
                               _ ...)
                         _ ...)
                   _ ...))
        (and Y (list 'tr _ ...))
        rest ...)
       (walk rest)]
      [(list f r ...)
       (cons f (walk r))]
      [(list)
       '()]))
  (deep-walk-child-elts walk an-sexp))




(define (remove-ellipse-second-signature an-sexp)
  (define (walk elts)
    (match elts
      [(and X 
            (list
             (list 'tr 
                   (list 'td 
                         (list 'span _ "(")
                         (list 'span _
                               (list 'span _
                                     (list 'a _ "ellipse")))
                         _ ...))
             _ ...))
       '()]
      [(list f r ...)
       (cons f (walk r))]
      [(list)
       '()]))
  (deep-walk-child-elts walk an-sexp))
