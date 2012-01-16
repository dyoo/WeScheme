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



@title{WeScheme documentation}



@section{Example programs}

Here are a few example programs that can give you an idea of the kinds
of things you can do in WeScheme.  You can:

@itemlist[

@item{@link["http://www.wescheme.org/view?publicId=strum-plaid-tasty-label-gruff"]{... make shapes and pictures ...}}

@item{@link["http://www.wescheme.org/view?publicId=cable-wagon-entry-cadre-vibes"]{... or image macros,}}

@item{@link["http://www.wescheme.org/view?publicId=balls-snack-lobby-drawl-irate"]{... animate a ballooning circle,}}

@item{@link["http://www.wescheme.org/view?publicId=horde-koala-camel-knife-lurid"]{... or land a UFO,}}

@item{@link["http://www.wescheme.org/view?publicId=messy-humor-truck-adopt-outdo"]{... or have it chase after cows!}}
]


@section{The environment}
[ fill me in... ]





@section{World programming and Images API}
@declare-exporting["mock-bindings.rkt"]


@defproc[(big-bang [w world]
                   [h big-bang-handler] ...) world]{
Start a big bang computation.  The @racket[big-bang] consumes an initial world,
as well as several handlers to configure it, described next:
}

@defproc[(stop-when [stop? ([w world] ->  boolean)]) big-bang-handler]{
Tells @racket[big-bang] when to stop.
@codeblock|{
...
(define-struct world (given expected))
...

;; stop?: world -> boolean
(define (stop? world)
  (string=? (world-given world) (world-expected world)))

(big-bang ...
          (stop-when stop?))
}|
}



@defproc*[(((on-tick [tick-f ([w world] -> world)] [delay real]) big-bang-handler)
           ((on-tick [tick-f ([w world] -> world)]) big-bang-handler))]{
Tells @racket[big-bang] to update the world during clock ticks.

By default, this will send a clock tick 28 times a second, but if
given @racket[delay], it will use that instead.
@codeblock|{
...
;; tick: world -> world
(define (tick world)
  (add1 world))

(big-bang ...
          (on-tick tick 5)) ;; tick every five seconds
}|
}




@defproc[(on-key [key-f ([w world] [k key] -> world)]) big-bang-handler]{
Tells @racket[big-bang] to update the world when a key is pressed.  The @racket[key-f]
function will be called with the particular key being pressed.

@codeblock|{
...
;; The world is a number.

;; handle-key: world key -> image
(define (handle-key w k)
  (cond [(key=? k "up")
         (add1 w)]
        [(key=? k "down")
         (sub1 w)]
        [else 
         w]))
...
(big-bang ...
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
...
;; The world is a number.

;; draw: world -> image
(define (draw world)
  (circle world "solid" "blue"))
...
(big-bang ...
          (to-draw draw))
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
@racket-inject-docs[*
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

[... fill me in]