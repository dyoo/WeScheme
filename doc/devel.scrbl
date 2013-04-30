#lang scribble/base
@(require scribble/manual)
@title{WeScheme Development}


@section{Architecture}







@section{Installation}

This document shows how to set up a WeScheme environment locally.


The source to WeScheme can be found at github:

   https://github.com/dyoo/WeScheme


Build dependencies:

WeScheme runs on Google AppEngine 1.4.2.  Check out the repository,
and add it as a project within Eclipse.



WeScheme uses the Google Closure library:

   http://code.google.com/closure/library/docs/gettingstarted.html

to manage the dependencies between the JavaScript modules.  The
majority of these are located in:

   war-src/js

The script "build-console-and-editor.sh" should be executed after any
changes are made to the javascript source files in war-src/js.


You may also need to change wescheme.properties if you are doing
any development on the compilation server.




@itemlist[
@item{Download WeScheme from github}
@item{Download Google Closure}
@item{Download and configure Eclipse}
]


@section{Build process}
@itemlist[
@item{Run @filepath{build-console-and-editor.sh}}
@item{Run the deployment from Eclipse, or use @filepath{build.xml}}
]





@section{The Editor}


@section{The Console}


@section{Sharing}


@section{Miscellaneous}