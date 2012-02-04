#!/usr/bin/env racket
#lang racket/base
(require racket/path
         racket/file
         racket/cmdline
         (planet dyoo/closure-compile))

;; This program compresses all of the JavaScript files using Closure Compiler,
;; with simple optimizations.  All ".js" files (excluding the -min.js files)
;; get compressed here.

(define path (command-line #:args (p) p))

(define js-files (find-files
                  (lambda (p)
                    (and (file-exists? p)
                         (regexp-match #px".js$" (path->string (file-name-from-path p)))
                         (not (regexp-match #px"-min.js$" (path->string (file-name-from-path p))))))
                  (simplify-path path)))

;; out-of-date?: path path -> boolean
;; Returns true if the target file looks at least as new as the source file.
(define (out-of-date? source-file target-file)
  (cond
   [(not (file-exists? target-file))
    #t]
   [else
    (>= (file-or-directory-modify-seconds source-file)
        (file-or-directory-modify-seconds target-file))]))
     
(for ([file js-files])
   (define new-path (regexp-replace #px".js$" (path->string file) "-min.js"))
   (cond [(out-of-date? file new-path)
          (printf "Compressing ~s\n" (path->string file))
          (define text (file->string file))
          (define compressed (closure-compile text))
          (call-with-output-file new-path (lambda (op) (display compressed op)) #:exists 'replace)]
         [else
          (printf "Skipping ~s: up to date\n" file)]))