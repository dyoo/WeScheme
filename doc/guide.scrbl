#lang scribble/manual

@title{WeScheme}
@hyperlink["http://wescheme.org"]{WeScheme} is an web-based programming environment
that allows us to write, run, and share
programs on the web.  WeScheme tries to takes the web seriously: programs written
in WeScheme should be available
from any computer with a capable Javascript-enabled web browser.
The editing environment, the compiler,
and the associated runtime libraries are all hosted on WeScheme, eliminating installation hassles.
WeScheme allows us to easily share programs by creating share URLs; 
these share URLs can be used to run a program or, if the author permits it,
allow anyone to view the source to that program.

Web programs are typically interactive, so WeScheme provides special support
for World programs that can interact with timer ticks, keyboard events, and images. 
WeScheme will eventually support native web services such
as Google Maps and Twitter, as well as a generic foreign-function interface
to adapt to other web services.


@section{Starting up!}
We will jump in and explore WeScheme by running a few programs.

Open up a web browser to @url{http://wescheme.org}.  Press the @emph{Start Coding} button.
The following
editor page should be divided into a top @emph{definitions} section, and a bottom @emph{interactions}
section.
Click onto the top half of the window and enter in the following text on line 2,
quotes and all:

@schemeblock["hello world"]

Press the Run button.  If all goes well, we should see a @scheme["hello world"] appear on the bottom
window.


Next, change line 2 so it says:

@schemeblock[(open-image-url "http://racket-lang.org/logo.png")]

Press the Run button again.  We should now see an image in the @emph{Interactions} window.  Web images
are values, as are strings, numbers, booleans, and structures.

Now try changing the program to:
@schemeblock[(define (key w ke)
               (add1 w))
             
             (js-big-bang 0 (on-key key))]

and press Run.  A new window should pop with a running tally that updates whenever a key is pressed.
This is an example
of a @emph{World} program that responds to key events.
Press that window's close icon to break out of the program.





@section{Logging in with the Console}

We've been running WeScheme without logging into the system, which means that nothing that
we do is being saved on WeScheme's servers.  To take advantage of
WeScheme's services, let's log in.

Open up a web browser to @url{http://wescheme.org} and click the @emph{Log in} button.
Once there, we'll be at the Console, which provides a listing of our programs.  Since 
this is the first time we're logging in, there are no programs in the listing.  Let's fix this.
Click on the @emph{Start a new program} button, which should open up a new window with the editor.


The editor has several buttons on its toolbar:
@itemlist[@item{Run the program in the @emph{Definitions} window.}
           @item{Stop the currently running program.}
           @item{Save the program using the given Project name.}
           @item{Share the program with other people.}
           ]

Change the Project name and press Save.  The bottom of the editor should say
@emph{Program is being saved}, followed by @emph{Program has been saved}.
Revisit the Console window, which should now include the program that we've just saved.



@section{Editing programs}
What is the editor?
Indentation with tabbing
Running programs


@section{Sharing programs}
Sharing from the console.
Hovering over the share button 
    
Sharing from the editor.
Using the share link.



@section{Troubleshooting}

Known issues:
@itemlist[@item{The compiler needs access to port 8080.}
           ]


@section{API}

strings

numbers

booleans

structures

special forms

constants

functions

