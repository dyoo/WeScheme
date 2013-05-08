#lang racket

(require scribble/core
         scribble/html-properties
         scriblib/render-cond
         racket/match
         "extract-docstring.rkt"
         "replace-pen-references.rkt")

(provide racket-inject-docs
         racket-inject-doc
         inject-css
         inject-javascript
         inject-javascript-file)


;; Adds JavaScript if we're rendering in HTML.
(define (inject-javascript . body)
  (cond-element 
   [latex ""]
   [html (make-element (make-style #f (list (make-script-property "text/javascript"
                                                           body)))
                       '())]
   [text ""]))

(define (inject-javascript-file path-name)
  (cond-element 
   [latex ""]
   [html (make-element (make-style #f (list (make-script-property "text/javascript"
                                                           path-name)))
                       '())]
   [text ""]))



(define (inject-css path)
  (cond-element 
   [latex ""]
   [html (make-element (make-style #f (list (make-css-addition path)))
                       '())]
   [text ""]))


(define-syntax (racket-inject-docs stx)
  (syntax-case stx ()
    [(_ binding ...)
     (syntax/loc stx
       (begin
         (racket-inject-doc binding) ...))]))

(define-syntax (racket-inject-doc stx)
  (syntax-case stx ()
    [(_ binding)
     (quasisyntax/loc stx
       (racket-inject-doc* #'binding))]))

(define (racket-inject-doc* stx)
  (define an-sxml (extract-doc-sexp/id stx))
  (define munged-sexp (replace-pen-references an-sxml))
  (sxml->element munged-sexp))


         
(define (sxml->element an-sxml)
  (match an-sxml
    [(list '& 'nbsp)
     'nbsp]
    [(list '& sym)
     sym]

    [(list tag-name (list '@ (list attr-name attr-value) ...) children ...)
     (tagged->element tag-name attr-name attr-value children)]
    
    [(list tag-name children ...)
     (tagged->element tag-name '() '() children)]

    [(? symbol?)
     an-sxml]
    
    [(? string?)
     an-sxml]

    [(? char?)
     (string an-sxml)]))


(define (tagged->element tag-name attr-names attr-values children)
  (cond [(and (eq? tag-name 'a) 
              (equal? attr-names '(href class pltdoc)))
         (define tag-attr (alt-tag (symbol->string tag-name)))
         (define attrs-attr 
           (attributes 
            (list (cons 'href (if (regexp-match #px"^#" (first attr-values))
                                  (first attr-values)
                                  (string-append "http://docs.racket-lang.org/" (first attr-values))))
                  (cons 'class (second attr-values))
                  (cons 'pltdoc (third attr-values)))))
         (define content (map sxml->element children))
         (make-element (make-style #f (list tag-attr attrs-attr))
                       content)]
        [else
         (define tag-attr (alt-tag (symbol->string tag-name)))
         (define attrs-attr (attributes (map cons attr-names attr-values)))
         (define content (map sxml->element children))
         (make-element (make-style #f (list tag-attr attrs-attr))
                       content)]))
