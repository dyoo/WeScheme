#!/usr/bin/env racket
#lang racket/base
(require racket/file
         racket/runtime-path
         racket/path
         (for-syntax racket/base))


;; Assumes closure-library is under externals/closure.

(define-runtime-path closure-dir (build-path "war-src" "closure"))
(define-runtime-path closure-zip-path (build-path "externals" "closure-library-20111110-r1376.zip"))
(define-runtime-path compiler-jar-path (build-path "bin" "compiler.jar"))



(define (call-system #:pipe-input-from (pipe-input-from #f)
                     #:pipe-output-to (pipe-output-to #f)
                     cmd . args)
  (define stdin (if pipe-input-from
                    (open-input-file pipe-input-from)
                    (current-input-port)))
  (define stdout (if pipe-output-to
                     (begin
                       (unless (let-values ([(base path dir?) (split-path pipe-output-to)])
                                 (eq? base 'relative))
                         (make-directory* (path-only pipe-output-to)))
                       (open-output-file pipe-output-to #:exists 'replace))
                     (current-output-port)))
  (define resolved-cmd
    (if (file-exists? cmd)
        cmd
        (find-executable-path cmd)))

  (define-values (a-subprocess subprocess-in subprocess-out subprocess-err)
    (apply subprocess stdout stdin (current-error-port) resolved-cmd args))

  (subprocess-wait a-subprocess)

  (when pipe-input-from
    (close-input-port stdin))
  (when pipe-output-to
    (close-output-port stdout)))


(define (build src dest)
  (make-directory* (path-only (string-append "war/" dest)))
  (call-system (build-path closure-dir "bin" "calcdeps.py")
               "-i" (string-append "war-src/js/" src)
               "-p" (path->string closure-dir)
               "-p" "war-src/js"
               "-o" "script"
               #:pipe-output-to (string-append "war/js/" dest)))




(define (ensure-closure-library-installed!)
  (unless (directory-exists? closure-dir)
    (fprintf (current-error-port) "The Closure library has not been installed yet.\n")
    (fprintf (current-error-port) "Trying to unpack it into 'war-src/closure'.\n")
    (let ([zip-path (normalize-path closure-zip-path)])
      (parameterize ([current-directory (build-path closure-dir 'up)])
        (call-system "unzip" (path->string zip-path))))
    (unless (directory-exists? closure-dir)
      (fprintf (current-error-port) "The Closure library could not be installed; please check.\n")
      (exit 0))))
  


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(ensure-closure-library-installed!)


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(printf "Building properties file for JS\n")
(copy-file "wescheme.properties" "war/wescheme.properties"
           #t)
(call-system "python" "bin/make-properties.py"
             #:pipe-input-from "wescheme.properties"
             #:pipe-output-to "war-src/js/wescheme-properties.js")


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(printf "Writing dependency file for Google Closure library\n")
(parameterize ([current-directory "war-src"])
  (call-system (build-path closure-dir "bin" "calcdeps.py")
               "--dep" "closure"
               "--path" "js"
               "--output_mode" "deps"
               #:pipe-output-to "deps.js"))



;; ######################################################################
(printf "Building splash\n")
(build "splash.js" "splash-calc.js")

(printf "Building console\n")
(build "console.js" "console-calc.js")

(printf "Building view\n")
(build "view.js" "view-calc.js")

(printf "Building editor\n")
(build "openEditor/index.js" "openEditor/openEditor-calc.js")



;; ######################################################################
(printf "Compressing JavaScript libraries.  This may take a few minutes, depending if this is the first time this has been run.\n")
(call-system "racket" "bin/compress-js.rkt" "--quiet" "war")
