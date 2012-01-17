#lang scribble/manual

@(require "scribble-helper.rkt")
@(require (for-label 2htdp/image
                     "mock-bindings.rkt"
                     (only-in htdp/image
                              image=?
                              color-list->image)
                     (only-in racket/base
                              pair?)

                     (only-in lang/htdp-advanced
                              check-expect
                              * + - / < <= = =~
                              > >= abs acos add1
                              andmap angle append
                              asin atan boolean=?
                              boolean? build-list
                              caaar caadr caar cadar cadddr
                              caddr cadr car cdaar cdadr
                              cdar cddar cdddr
                              cddr cdr
                              ceiling char->integer
                              char-alphabetic?
                              char-ci<=?
                              char-ci<?
                              char-ci=?
                              char-ci>=?
                              char-ci>?
                              char-downcase
                              char-lower-case?
                              char-numeric?
                              char-upcase
                              char-upper-case?
                              char-whitespace?
                              char<=?
                              char<?
                              char=?
                              char>=?
                              char>?
                              char?
                              complex?
                              conjugate
                              cons
                              cons?
                              cos
                              cosh
                              current-seconds
                              denominator
                              e
                              eighth
                              empty
                              empty?
                              eof
                              eof-object?
                              eq?
                              equal?
                              equal~?
                              eqv?
                              error
                              even?
                              exact->inexact
                              exp
                              expt
                              false
                              false?
                              fifth
                              first
                              floor
                              foldl
                              format
                              fourth
                              gcd
                              identity
                              imag-part
                              inexact->exact
                              inexact?
                              integer->char
                              integer?
                              lcm
                              length
                              list
                              list*
                              list->string
                              list-ref
                              log
                              magnitude
                              make-posn
                              make-string
                              map
                              max
                              member
                              memq
                              memv
                              min
                              modulo
                              negative?
                              not
                              null
                              null?
                              number->string
                              number?
                              numerator
                              odd?
                              pi
                              positive?
                              posn-x
                              posn-y
                              posn?
                              quotient
                              random
                              rational?
                              real-part
                              real?
                              remainder
                              rest
                              reverse
                              round
                              second
                              seventh
                              sgn
                              sin
                              sinh
                              sixth
                              sqr
                              sqrt
                              string
                              string->list
                              string->number
                              string->symbol
                              string-append
                              string-ci<=?
                              string-ci<?
                              string-ci=?
                              string-ci>=?
                              string-ci>?
                              string-copy
                              string-length
                              string-ref
                              string<=?
                              string<?
                              string=?
                              string>=?
                              string>?
                              string?
                              struct?
                              sub1
                              substring
                              symbol->string
                              symbol=?
                              symbol?
                              tan
                              third
                              true
                              zero?)))



@inject-css{extra.css}



@title{WeScheme}

@hyperlink["http://www.wescheme.org"]{WeScheme} is an web-based
programming environment that allows us to write, run, and share
programs on the web.  Programs written in WeScheme should be available
from any computer with a capable Javascript-enabled web browser.  The
editing environment, the compiler, and the associated runtime
libraries are all hosted on WeScheme, eliminating installation
hassles.  WeScheme allows us to easily share programs by creating
share URLs; these share URLs can be used to run a program or, if the
author permits it, allow anyone to view the source to that program.

Web programs are typically interactive, so WeScheme provides special
support for World programs that can interact with timer ticks,
keyboard events, and images.


@section{Example programs}

Here are a few example programs that can give an idea of the kinds
of things you can do in WeScheme.  You can:

@itemlist[

@item{@link["http://www.wescheme.org/view?publicId=strum-plaid-tasty-label-gruff"]{... make shapes and pictures ...}}

@item{@link["http://www.wescheme.org/view?publicId=cable-wagon-entry-cadre-vibes"]{... or image macros,}}

@item{@link["http://www.wescheme.org/view?publicId=balls-snack-lobby-drawl-irate"]{... animate a ballooning circle,}}

@item{@link["http://www.wescheme.org/view?publicId=horde-koala-camel-knife-lurid"]{... or land a UFO,}}

@item{@link["http://www.wescheme.org/view?publicId=messy-humor-truck-adopt-outdo"]{... or have it chase after cows!}}
]


@section{The environment}

Let's jump in and explore WeScheme by running a few programs.

Open up a web browser to @url{http://www.wescheme.org}.  Press the
@emph{Start Coding} button.  The following editor page should be
divided into a top @emph{definitions} section, and a bottom
@emph{interactions} section.  Click onto the @emph{interactions} top
half of the window and enter in the following text, quotes and all:

@racketblock[
"hello world"
]

Next, press the @emph{Run} button at the toolbar at the top.  If all
goes well, we should see a @racket["hello world"] appear on the bottom
window.


Next, change the line so it says:

@racketblock[
(bitmap/url "http://racket-lang.org/logo.png")
]

Press the @emph{Run} button again.  We should now see an image in the
@emph{Interactions} window.

Web images are values, as are strings, numbers, booleans, and
structures.  You can even apply algebra on them.  Try:
@racketblock[
(rotate 45 (bitmap/url "http://racket-lang.org/logo.png"))
]
or
@racketblock[
(overlay (bitmap/url "http://racket-lang.org/logo.png")
         (bitmap/url "http://www.wescheme.org/css/images/BigLogo.png"))
]
for example.  Many more image functions are built-into WeScheme; you
can explore the functions in @secref["sec:world-image-api"].




@section[#:tag "sec:world-image-api"]{World programming and Images API}
@declare-exporting["mock-bindings.rkt"]


@defproc[(big-bang [w world]
                   [h big-bang-handler] ...) world]{
Start a big bang computation.  The @racket[big-bang] consumes an initial world,
as well as several handlers to configure it, described in this section:
}



@defproc*[(((on-tick [tick-f ([w world] -> world)] [delay real]) big-bang-handler)
           ((on-tick [tick-f ([w world] -> world)]) big-bang-handler))]{
Tells @racket[big-bang] to update the world during clock ticks.

By default, this will send a clock tick 28 times a second, but if
given @racket[delay], it will use that instead.
@codeblock|{
;; The world is a number
;; tick: world -> world
(define (tick world)
  (add1 world))

(big-bang 0
          (on-tick tick 2)) ;; tick every two seconds
}|
}



@defproc[(on-key [key-f ([w world] [k key] -> world)]) big-bang-handler]{
Tells @racket[big-bang] to update the world when a key is pressed.  The @racket[key-f]
function will be called with the particular key being pressed.

@codeblock|{
;; The world is a number.

;; handle-key: world key -> image
(define (handle-key w k)
  (cond [(key=? k "up")
         (add1 w)]
        [(key=? k "down")
         (sub1 w)]
        [else 
         w]))
(big-bang 0
          (on-key handle-key))
}|
}

@defproc[(key=? [a-key key] [a-string string]) boolean]{
Returns true if @racket[a-key] is equal to @racket[a-string].
}



@defproc[(to-draw [draw-f ([w world] -> image)]) big-bang-handler]{
Tells @racket[big-bang] how to update what the world looks like.  The draw
function will be called every time an event occurs.

@codeblock|{
;; The world is a number.

;; draw: world -> image
(define (draw world)
  (circle world "solid" "blue"))

(big-bang 20
          (to-draw draw))
}|

To support some legacy WeScheme applications, the name
@racket[to-redraw] is an alias for @racket[to-draw].
}




@defproc[(stop-when [stop? ([w world] ->  boolean)]) big-bang-handler]{
Tells @racket[big-bang] when to stop.
@codeblock|{
;; the world is a number

;; stop?: world -> boolean
(define (stop? world)
  (> world 10))

(big-bang 0
          (stop-when stop?)
          (on-tick add1 1))
}|
}





Here is a listing of the functions you can use to make images.

@racket-inject-docs[make-color
                    empty-scene
                    scene+line
                    place-image
                    place-image/align
                    put-pinhole
                    circle
                    star
                    radial-star
                    star-polygon
                    overlay
                    polygon
                    rectangle
                    regular-polygon
                    rhombus
                    square
                    triangle
                    right-triangle
                    isosceles-triangle
                    ellipse
                    line
                    add-line
                    overlay
                    overlay/xy
                    overlay/align
                    underlay
                    underlay/xy
                    underlay/align
                    beside
                    beside/align
                    above
                    above/align
                    rotate
                    scale
                    scale/xy
                    crop
                    frame
                    flip-horizontal
                    flip-vertical
                    text
                    text/font
                    bitmap/url
                    image?
                    image=?
                    image-width
                    image-height

                    image->color-list
                    color-list->image

                    image-baseline
                    mode?
                    image-color?
                    x-place?
                    y-place?
                    angle?
                    side-count?
                    step-count?]


@section{Basic operations}
@racket-inject-docs[check-expect]
As a convenience, the name @racket[EXAMPLE] is an alias for
@racket[check-expect].
@racketblock[
(check-expect (+ 1 2) 3)
]



@racket-inject-docs[
*
+ - / < <= = =~
                              > >= abs acos add1
                              andmap angle append
                              asin atan boolean=?
                              boolean? build-list
                              caaar caadr caar cadar cadddr
                              caddr cadr car cdaar cdadr
                              cdar cddar cdddr
                              cddr cdr
                              ceiling char->integer
                              char-alphabetic?
                              char-ci<=?
                              char-ci<?
                              char-ci=?
                              char-ci>=?
                              char-ci>?
                              char-downcase
                              char-lower-case?
                              char-numeric?
                              char-upcase
                              char-upper-case?
                              char-whitespace?
                              char<=?
                              char<?
                              char=?
                              char>=?
                              char>?
                              char?
                              complex?
                              conjugate
                              cons
                              cons?
                              cos
                              cosh
                              current-seconds
                              denominator
                              e
                              eighth
                              empty
                              empty?
                              eof
                              eof-object?
                              eq?
                              equal?
                              equal~?
                              eqv?
                              error
                              even?
                              exact->inexact
                              exp
                              expt
                              false
                              false?
                              fifth
                              first
                              floor
                              foldl
                              format
                              fourth
                              gcd
                              identity
                              imag-part
                              inexact->exact
                              inexact?
                              integer->char
                              integer?
                              lcm
                              length
                              list
                              pair?
                              list*
                              list->string
                              list-ref
                              log
                              magnitude
                              make-posn
                              make-string
                              map
                              max
                              member
                              memq
                              memv
                              min
                              modulo
                              negative?
                              not
                              null
                              null?
                              number->string
                              number?
                              numerator
                              odd?
                              pi
                              positive?
                              posn-x
                              posn-y
                              posn?
                              quotient
                              random
                              rational?
                              real-part
                              real?
                              remainder
                              rest
                              reverse
                              round
                              second
                              seventh
                              sgn
                              sin
                              sinh
                              sixth
                              sqr
                              sqrt
                              string
                              string->list
                              string->number
                              string->symbol
                              string-append
                              string-ci<=?
                              string-ci<?
                              string-ci=?
                              string-ci>=?
                              string-ci>?
                              string-copy
                              string-length
                              string-ref
                              string<=?
                              string<?
                              string=?
                              string>=?
                              string>?
                              string?
                              struct?
                              sub1
                              substring
                              symbol->string
                              symbol=?
                              symbol?
                              tan
                              third
                              true
                              zero?
]

@section{Acknowledgements}


WeScheme uses code and utilities from the following external projects:
@itemlist[
@item{jshashtable (@url{http://www.timdown.co.uk/jshashtable/})}
@item{js-numbers (@url{http://github.com/dyoo/js-numbers/})}
@item{JSON (@url{http://www.json.org/js.html})}
@item{jquery (@url{http://jquery.com/})}
@item{Google Closure Compiler (@url{http://code.google.com/p/closure-compiler/})}
@item{excanvas (@url{http://excanvas.sourceforge.net/})}
@item{canvas-text (@url{http://code.google.com/p/canvas-text/source/browse/trunk})} 
]

The following folks have helped tremendously in the implementation of
WeScheme by implementing libraries, giving guidence, reporting bugs,
and suggesting improvements.

@;;;;
@; in alphabetical order
@;;;;
@(apply itemlist
   (map item (sort (list
   "Ethan Cecchetti"   ;; runtime library work
   "Scott Newman"      ;; runtime library work 
   "Will Zimrin"       ;; CodeMirror 2 stuff
   "Brendan Hickley"   ;; AppEngine, security stuff
   "Zhe Zhang"         ;; runtime library
   "Guillaume Marceau"      ;; general help, upcoming error messages
   "Shriram Krishnamurthi"  ;; of course... :)
   "Kathi Fisler"           ;; ditto!
   "Emmanuel Schanzer"      ;; same!
   "Robby Findler"
   "Matthew Flatt"
) string<?))
)


Please send any bug reports to Danny Yoo (@tt["dyoo@hashcollision.org"]).