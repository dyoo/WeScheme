#lang scribble/manual

@title{WeScheme}

WeScheme is an web-based programming environment.  All your programs 
are stored ``in the cloud'', so you can edit and run them from any computer with a
web browser.  You don't have to install any new tools, as the editor, compiler,
and runtime environment are hosted on WeScheme.  Furthermore, WeScheme allows you
to easily share your programs by creating share URLs; 
these share URLs can be used to run a program or, if the author permits it,
allow anyone to view the source to that program.

Web programs are typically interactive, so WeScheme provides special support
for World programs that can interact with timer ticks, keyboard, and images. 
WeScheme should also natively support web services such
as Google Maps and Twitter.  WeScheme will eventually provide libraries
to connect to these services.  [fix this as soon as we integrate with ethan and scott's work.]



@section{Starting up...}

Open up your web browser to @url{http://wescheme.org}.  Press the @emph{Start Coding} button.
The following
editor page should be divided into a top @emph{definitions} section, and a bottom @emph{interactions}
section.
Click onto the top half of the window and enter in the following text on line 2,
quotes and all:

@schemeblock["hello world"]

Press the Run button.  If all goes well, you should see a "hello world" appear on the bottom
window.


Next, change line 2 so it says:

@schemeblock[(open-image-url "http://racket-lang.org/logo.png")]



We're currently running WeScheme without logging into the system; to take advantage of
WeScheme's services, let's log into the system using your Google account: logging in will allow you to save and share
programs.  Open up your web browser to @url{http://wescheme.org} and click the @emph{Log in} button.
Once there, you'll be at the Console, which provides a listing of your programs.  


@section{The interface}

Console
What is the console?


Editor
What is the editor?
Auto-indentation.
Running programs


@section{Sharing programs}
Sharing from the console.
Hovering over the share button 
    
Sharing from the editor.
Using the share link.



@section{Troubleshooting}

[The compiler occasionally needs access to port 8080.]


@section{API}

special forms

constants

functions

