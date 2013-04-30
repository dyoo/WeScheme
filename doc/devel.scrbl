#lang scribble/base
@(require scribble/manual)
@title{WeScheme Development}


@section{Introduction}

WeScheme.org is an online development environment that tries to
provide a DrRacket-like experience on the web, without the need for
plugins or anything other than a plain web browser.  Unlike some other
non-Javascript programming environments on the web, evaluation is
handled on the client browser.  An unusual part of the system is that
compilation is done server-side.  This split allows us to do some
sophisticated work during compilation, even to take advantage of some
Racket features to do compilation for us.



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

@itemlist[
@item{@url{http://balanced-wescheme-compilers-1567676416.us-west-2.elb.amazonaws.com}}
@item{@url{http://LoadBalancerEast-1672652775.us-east-1.elb.amazonaws.com}}
]
and both are EC2 load balancers that spread load across a few EC2
instances.  A separate document (ec2-auto-scaling-notes.txt) should
describe the details of the setup.


Both the AppEngine and EC2 sides are intended to scale: on heavy load,
both AppEngine and EC2 should, in principle, automatically turn on
additional servers to continue to provide service.

Once a user visits wescheme.org, they are presented with an editing
environment, and their web browser runs an evaluator that can
interpret compiled code from the compiler servers.  Within the
environment, whenever the user enters an expression or presses Run, a
compilation request is sent from the browser client directly to the
EC2 compilation server.  This is to reduce the amount of network
latency between interactions.

When a program is shared publically, WeScheme on the AppEngine side
generates a unique "publicId", and initiates a compilation of the
program between AppEngine and EC2.  This is different from the
client-initiated compilation!  We add this extra level of indirection
because we do not trust the client to produce compiled code that can
be run by other folks.


On the software end of things, we use a combination of Java servlets
to provide basic services like retrieving program source.  Most user
interactions go through event-driven JavaScript.  We use the
CodeMirror library to provide basic text editor functionality.


@section{Installation}

This document shows how to set up a WeScheme environment that runs
locally.  As a caveat: you MUST use Java 1.6, as (at the time of this
writing) Java 1.7 is not compatible with AppEngine.


The source to WeScheme can be found at github:
@url{https://github.com/dyoo/WeScheme}


As soon as you check the project out, look at wescheme.properties.  It
defines the network endpoints of both the appengine and ec2 side of things.

@filebox["wescheme.properties"]{
@verbatim|{
WESCHEME_SERVER_BASE = http://www.wescheme.org
## Main server to depend on for server-side compilation:
COMPILATION_SERVER_URL = http://balanced-wescheme-compilers-1567676416.us-west-2.elb.amazonaws.com/servlets/standalone.ss
## Round-robin compilation servers.
COMPILATION_SERVERS = http://balanced-wescheme-compilers-1567676416.us-west-2.elb.amazonaws.com/rpc.html http://LoadBalancerEast-1672652775.us-east-1.elb.amazonaws.com/rpc.html
}|}

Usually, you do not need to touch this file unless you're making
modifications to the compilation servers and therefore need to test
your local appengine instance against it.  @tt{COMPILATION_SERVER_URL}
is the URL used by AppEngine when it contacts the EC2 servers during a
Sharing.  @tt{COMPILATION_SERVERS} are the web services that the
browser client will use during interactive development.


To build the Java side of things, execute: @tt{ant compile}

To build the JavaScript side of the software, execute:
@filepath{build-console-and-editor.sh}.  Remember to do this whenever
the JavaScript side of things change.  This invokes the Google Closure
JavaScript compiler to package and compress the JavaScript.


To run the web server in local mode, execute @tt{ant runserver}.




@section{Directory structure overview}

Initially, when you check out the repository, @filepath{war} holds
static resources.  The build process will copy over other resources
into @filepath{war} for deployment.

The source to the Java servlets are in @filepath{src}.

Most JavaScript files are in @filepath{war-src}.






@section{The Editor and evaluation}

The core of the editor can be found in
@filepath{war-src/js/openEditor}.





The run.jsp servlet is very similar to the editor, but with fewer
loaded libraries.  There's unfortunately a bit of messy duplication
here between the libraries used for running a Shared program vs
running during interactive development.




@section{The compiler server}


@section{The Console}


@section{Sharing}


@section{Known Issues}

The EC2 load balancers should not be treated as reliable resources.
Unfortunately, we've found that EC2 elastic load balancing fails on
high load by producing HTTP 503 errors.  We're working around this on
the client side by just having the software repeat a request that's
denied due to 503.

We've been hitting persistent out-of-memory issues with the
compilation servers running on EC2.





@section{Miscellaneous}

