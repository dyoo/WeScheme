#lang racket/base
(require racket/runtime-path
         racket/path
         racket/file
         (planet dyoo/closure-compile))


(define-runtime-path mzscheme-vm "../war/js/mzscheme-vm/collects")

(define js-files (find-files
                  (lambda (p)
                    (and (file-exists? p)
                         (regexp-match #px".js$" (path->string (file-name-from-path p)))))
                  (simplify-path mzscheme-vm)))

(for ([file js-files])
   (define text (file->string file))
   (define compressed (closure-compile text))
   (define new-path (regexp-replace #px".js$" (path->string file) "-min.js"))
   (printf "Compressing ~s to ~s\n" (path->string file) new-path)
   (call-with-output-file new-path (lambda (op) (display compressed op)) #:exists 'replace))