#lang scribble/base
@(require scribble/basic)
@(require "scribble-helper.rkt")
@(require "wescheme.rkt")

@inject-css{fullpage.css}
@inject-embedding-libraries[]

@title{Beginning with WeScheme}


@section{Introduction}

In human languages, there's an idea that we can break down the things
we say into categories, such as @emph{nouns} like ``apple'' or
``car'', and @emph{verbs} like ``eat'' or ``drive''.

When we're programming computers, we as programmers have analogous
concepts.  The kinds of things that we deal with are @emph{values},
like:

@itemize[

@item{numbers, like
@example[42],
@example[22/7], or
@example[3259235679253689012346]
}


@item{strings, like
@example["hello world"],
@example["solid"]}


@item{pictures, like
@example[(rectangle 20 30 "solid" "green")]
or
@example[(circle 20 "solid" "blue")]
}

]

Once we have a few values in hand, we may want to manipulate them.  To
do this, we have @emph{operators} that can create new values out of
other ones.  For example, to @emph{overlay} one picture atop another,



@section{Playing with images}



@section{Other data types}