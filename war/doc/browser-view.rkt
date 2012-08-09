#!/usr/bin/env racket
#lang racket/base

;; Quick and dirty program to view a local file under a web serving
;; environment.

(require web-server/servlet
         web-server/servlet-env
         racket/cmdline)

(define a-file (command-line #:args (filename) filename))
(define-values (base name dir?) (split-path a-file))

(serve/servlet (lambda (req)
                 (error 'req "shouldn't ever be here"))
               #:servlet-path (string-append "/" (path->string name))
               #:servlet-regexp #px"$^"
               #:port (+ (add1 (random 8000)) 1024)
               #:command-line? #t
               #:launch-browser? #t
               #:extra-files-paths (list
                                    (cond [(eq? base #f)
                                           (error 'serve "Don't know how to serve ~e" a-file)]
                                          [(eq? base 'relative)
                                           (current-directory)]
                                          [(absolute-path? base)
                                           base]
                                          [else
                                           (build-path (current-directory)
                                                       base)])))
