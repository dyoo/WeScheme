#lang scribble/manual

@(require "scribble-helper.rkt")
@(require "wescheme.rkt")

@inject-css{fullpage.css}
@inject-embedding-libraries[]

@title{WeScheme Embedding Documentation}


@section{Introduction}

WeScheme can be embedded as an iframe within other web pages.  As a
few examples:

@itemize[

@item{@embed-wescheme[#:id 'example1
                      #:public-id "champ-neigh-stoop-sinew-overt"
                      #:width "70%"]}

@item{@embed-wescheme[#:id 'example2
                      #:public-id "kiosk-brook-cover-diner-smoky"
                      #:width "70%"
                      #:height 700]}

@item{@embed-wescheme[#:id 'example3
                      #:interactions-text "(+ 1 2 3)"
                      #:hide-header? #t
                      #:hide-footer? #t
                      #:hide-definitions? #t]}
]






@section{Parameters}

The openEditor supports several parameters that are applicable in
embedded mode.

@itemize[
@item{publicId: the public id of the program to be embedded.}
@item{hideHeader: hides the header.  Set to 'true' to hide.}
@item{hideFooter: hides the footer.  Set to 'true' to hide.}
@item{hideDefinitions: hides the definitions pane}
@item{autorun: runs the definitions window if set to 'true'}
@item{warnOnExit: set this to 'false' so the editor doesn't yell when
you exit the page.}
@item{interactionsText: if defined, its value will be used for the
interactions pane.}
]




@section{TODO}

Make things cooler.