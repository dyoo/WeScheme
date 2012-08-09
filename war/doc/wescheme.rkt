#lang racket/base

(require net/uri-codec
         racket/match
         scribble/decode
         scribble/html-properties
         scribble/core
         (only-in scribble/manual racket)
         "scribble-helper.rkt"
         (for-syntax racket/base
                     syntax/to-string))

(provide embed-wescheme
         inject-embedding-libraries
         example)




(define-syntax (example stx)
  (syntax-case stx ()
    [(_ thing options ...)
     (with-syntax ([text (syntax->string #'(thing))])
       (syntax/loc stx
         (splice (list 
                  (racket thing)
                  (embed-wescheme #:interactions-text text
                                  #:auto-run? #t
                                  #:hide-header? #t
                                  #:hide-footer? #t
                                  #:hide-definitions? #t
                                  #:with-rpc? #t
                                  #:width 500
                                  #:height 50)))))]))



(define (inject-embedding-libraries)
  (splice (list
           (inject-javascript-file "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")
           (inject-javascript-file "easyXDM.min.js")
           (inject-javascript-file "json2.min.js")
           (inject-javascript-file "wescheme-embedded.js"))))
          



;; helper functions for embedding internal instances of WeScheme.
(define (embed-wescheme #:id (id (gensym 'wescheme))

                        #:public-id (pid #f)
                        #:width (width "90%")
                        #:height (height 500)

                        #:with-rpc? (with-rpc? #f)

                        #:interactions-text (interactions-text #f)
                        #:warn-on-exit? (warn-on-exit? #f)
                        #:hide-header? (hide-header? #f)
                        #:hide-footer? (hide-footer? #t)
                        #:hide-definitions? (hide-definitions? #f)
                        #:auto-run? (auto-run? #f))

  (define pid-or-interactions-alist-chunk
    (cond
     [pid
      `(publicId . ,pid)]
     [interactions-text
      `(interactionsText . ,interactions-text)]
     [else
      (error 'embed-wescheme "#:pid or #:interactions-text must be provided")]))

  (define (maybe-add-option y/n name)
    (if y/n
        `((,name . "true"))
        `((,name . "false"))))

  (define encoded-alist
    (parameterize ([current-alist-separator-mode 'amp])
      (alist->form-urlencoded
       `(,pid-or-interactions-alist-chunk
         ,@(maybe-add-option with-rpc? 'embedded)
         ,@(maybe-add-option warn-on-exit? 'warnOnExit)
         ,@(maybe-add-option hide-header? 'hideHeader)
         ,@(maybe-add-option hide-footer? 'hideFooter)
         ,@(maybe-add-option hide-definitions? 'hideDefinitions)
         ,@(maybe-add-option auto-run? 'autorun)))))

  (define url
    (string-append "http://www.wescheme.org/openEditor?" encoded-alist))

  (splice
   (list (sxml->element
          `(div
            (@ (id ,(symbol->string id))
               (class "embedded-wescheme"))
            ""))
         (inject-javascript
          (format "document.getElementById(~s).style.width=~s; document.getElementById(~s).style.height=~s;"
                  (symbol->string id)
                  (dimension->string width)
                  (symbol->string id)
                  (dimension->string height)))
         (inject-javascript
          (format (if with-rpc?
                      "WeSchemeEmbedded.withRpc(~s, ~s)"
                      "WeSchemeEmbedded.withoutRpc(~s, ~s);")
                  url
                  (symbol->string id))))))


;; dimension->string: (U number string) -> string
;; Translate a dimension into a string.
(define (dimension->string dim)
  (cond
   [(number? dim)
    (string-append (number->string dim) "px")]
   [(string? dim)
    dim]
   [else
    (error 'dimension->string "Don't know how to translate ~e to a dimension" dim)]))

;; sxml->element: sxml -> element
;; Embeds HTML content into a Scribble document.
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
  (define tag-attr (alt-tag (symbol->string tag-name)))
  (define attrs-attr (attributes (map cons attr-names attr-values)))
  (define content (map sxml->element children))
  (make-element (make-style #f (list tag-attr attrs-attr))
                content))