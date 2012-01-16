#lang racket/base
(require "extract-docstring.rkt")
#;(require (for-label racket/base))


#;(display (doc-sexp->string
            (extract-doc-sexp/id #'make-hasheqv-placeholder)))


(define names (namespace-mapped-symbols (module->namespace 'racket/base)))


(for ([n names])

  (displayln n)
  (displayln "-----------")
  (with-handlers ([exn:fail? (lambda (exn)
                               (displayln "Cannot find documentation")
                               (read-line))])
  (display (doc-sexp->string (extract-doc-sexp/id (list 'racket/base n))))))

;; Current bugs
;; procedure-closure-contents-eq?
;; module-compiled-exports
;; port-display-handler
;; port-write-handler
;; new-apply-proc