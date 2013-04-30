#lang scribble/base
@(require scribble/manual)
@title{WeScheme Development}


@section{Introduction}

WeScheme.org is an online development environment that tries to
provide a DrRacket-like experience on the web, without the need for
plugins.  Unlike some other non-Javascript programming environments on
the web, evaluation is handled on the client browser.  An unusual part
of the system is that compilation is done server-side, which allows us
in principle to take advantage of Racket's language extension
features.




@section{Architecture}

WeScheme consists of two major components, (1) the front-facing
AppEngine web server, and (2) the backend compilation servers.  It
provides the service for the static resources, user authentication and
program storage through Google AppEngine services.


@verbatim|{

    AppEngine   <-------> Client web browser
  program storage          ^  client-side evaluation
  static resources        /
        ^                /
        |               /
        |              /
        |             /
        V            V
 EC2 Compiler server
server-side compilation

}|

There's a simplification on this diagram with regards to the EC2
compiler server.  There are actually two separate EC2 instances to
serve both the east and west coast of the US,

    http://balanced-wescheme-compilers-1567676416.us-west-2.elb.amazonaws.com
    http://LoadBalancerEast-1672652775.us-east-1.elb.amazonaws.com

and both are EC2 load balancers that spread load across a few EC2
instances.  A separate document (ec2-auto-scaling-notes.txt) should
describe the details of the setup.


Both the AppEngine and EC2 sides are intended to scale: on heavy load,
both AppEngine and EC2 should, in principle, automatically turn on
additional servers to continue to provide service.


In the environment, whenever a use enters an expression or presses
Run, a compilation request is sent from the client directly to the EC2
compilation server.  This is to reduce the amount of network latency
between interactions.

When a program is shared publically, WeScheme on the AppEngine side
will generate a unique "publicId", and initiate a compilation of the
program between AppEngine and EC2.  We add this extra level of
indirection because we do not trust the client to produce compiled
code that can be run by other folks.


On the software end of things, we use a combination of Java servlets
to provide basic services like retrieving program source.  Most user
interactions go through event-driven JavaScript.  We use the
CodeMirror library to provide basic text editor functionality.




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




@section{Directory structure overview}





@section{The Editor}


@section{Program evaluation}


@section{The compiler server}


@section{The Console}


@section{Sharing}


@section{Known Issues}

The EC2 load balancers.

We've been hitting persistent out-of-memory issues with the
compilation servers running on EC2.





@section{Miscellaneous}

