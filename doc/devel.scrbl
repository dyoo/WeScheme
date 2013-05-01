#lang scribble/base
@(require scribble/manual)
@title{WeScheme Development Internals}


@section{Introduction}

@url{http://www.wescheme.org} is an online development environment
that tries to provide a DrRacket-like experience on the web, without
the need for plugins or anything other than a plain web browser.
Unlike some other non-Javascript programming environments on the web,
evaluation is handled on the client browser.  An unusual part of the
system is that compilation is done server-side.  This split allows us
to do some sophisticated work during compilation, even to take
advantage of some Racket features to do compilation for us.



@section{Architecture}

WeScheme consists of two major components, (1) the front-facing
AppEngine web server, and (2) the backend compilation servers.  It
provides the service for the static resources, user authentication and
program storage through Google AppEngine services.


@verbatim|{

    AppEngine   <-------- Client web browser
  program storage          /  client-side evaluation
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
compiler server.  There are actually two separate EC2 subsystems to
serve both the east and west coast of the US,

@itemlist[
@item{@url{http://balanced-wescheme-compilers-1567676416.us-west-2.elb.amazonaws.com}}
@item{@url{http://LoadBalancerEast-1672652775.us-east-1.elb.amazonaws.com}}
]

Both are EC2 load balancers that spread load across a few EC2
instances.  A separate document
(@link["https://github.com/dyoo/WeScheme/blob/master/doc/ec2-auto-scaling-notes.txt"]{ec2-auto-scaling-notes.txt})
describes the details of the setup.


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

The arrow from the EC2 side back to AppEngine is deliberate: sometimes
the compilation servers need to process programs that themselves
require other wescheme modules.  This means that the compiler
@link["https://github.com/bootstrapworld/wescheme-compiler2012/blob/master/wescheme-module-provider.rkt"]{needs
to ask WeScheme.org} what symbols are provided by that module.


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


To run the web server in local mode, execute @tt{ant runserver}.  This
should bring up a web server on port 8888.




@section{Directory structure overview}

Initially, when you check out the repository, @filepath{war} holds
static resources.  The build process in
@filepath{build-console-and-editor.rkt} will copy and compress
resources into @filepath{war} for deployment.

The source to the Java servlets are in @filepath{src}.  These deal
with the AppEngine side of the system, providing definitions for
Program loading and storing and sharing.

Most JavaScript files are in @filepath{war-src}, and are written with
respect to
@link["https://developers.google.com/closure/library/"]{Google Closure
Library} and a few other libraries just as JQuery.


Of special note: the files in @filepath{war/js/mzscheme-vm} contain
the heart of the client-side runtime library for evaluating programs.
The files in this directory come out of the
@link["https://github.com/bootstrapworld/wescheme-compiler2012"]{wescheme-compiler}
project.  Changes to wescheme-compiler should be coupled with an update
to the files in here.




@section{The Editor and evaluation}

The core of the editor can be found in
@filepath{war-src/js/openEditor}.  These include the definitions for
the editor itself (@filepath{war-src/js/openEditor/editor.js}), and
the evaluation engine
(@filepath{war-src/js/openEditor/interaction.js}).

These are all tied together with the static .jsp file in
@link["https://github.com/dyoo/WeScheme/blob/master/war/openEditor/index.jsp"]{@filepath{war/openEditor/index.jsp}}



It may be instructive to compare the Editor to the non-interactive Run
servlet,
@link["https://github.com/dyoo/WeScheme/blob/master/war/run.jsp"]{@filepath{war/run.jsp}},
which deliberately strips out most of the environment except for the
absolute necessary to do evaluation.  There's unfortunately a bit of
messy duplication here between the libraries used for running a Shared
program vs running during interactive development.


The editor has a instance of a WeSchemeTextContainer, an abstraction
that's intended to allow us to fit in different implementations of
source editors as needed.  In the past, we used to have one based just
on raw textareas and another on the defunct Mozilla Bespin editor.
Nowdays, our
@link["https://github.com/dyoo/WeScheme/blob/master/war-src/js/openEditor/textcontainer.js"]{main
source editor's implementation} uses CodeMirror; the link should show
both the interface and the implementation in terms of CodeMirror.


@subsection{Running a program}
When a user presses the Run button, this invokes the
@link["https://github.com/dyoo/WeScheme/blob/97fc56aae75c041607a3ddb049c7bb8f77361520/war-src/js/openEditor/editor.js#L560-L571"]{run
method} of the editor.  This grabs the content of the source editor,
and in turn delegates to the
@link["https://github.com/dyoo/WeScheme/blob/97fc56aae75c041607a3ddb049c7bb8f77361520/war-src/js/openEditor/interaction.js#L648-L677"]{runCode
method of the interactions} class to do evaluation.


The
@link["https://github.com/dyoo/WeScheme/blob/97fc56aae75c041607a3ddb049c7bb8f77361520/war-src/js/openEditor/interaction.js#L657"]{reference
to the evaluator} in @tt{runCode} is a call to the @link["https://github.com/dyoo/WeScheme/blob/97fc56aae75c041607a3ddb049c7bb8f77361520/war/js/mzscheme-vm/evaluator.js#L185"]{runtime library},
which is responsible for taking the code, compiling it, running it,
and printing out any results from the evaluation.  In order for the
editor and the evaluator to cooperate, we
@link["https://github.com/dyoo/WeScheme/blob/97fc56aae75c041607a3ddb049c7bb8f77361520/war-src/js/openEditor/interaction.js#L439-L512"]{customize
it during initialization}.  The editor customizes the evaluator in a
few places to handle things like World (which need to be shown in a
different dialog window), to support the image proxying service for
working around same-domain-policy restrictions on image manipulation,
and dynamic module loading.

Evaluations with the Interactions bottom pane go through a
similar process, as seen in
@link["https://github.com/dyoo/WeScheme/blob/97fc56aae75c041607a3ddb049c7bb8f77361520/war-src/js/openEditor/interaction.js#L207-L211"]{Prompt.onEvaluation}.


During a program's compilation or execution, an exceptional condition
may occur.  The editor traps errors and presents them in
@link["https://github.com/dyoo/WeScheme/blob/97fc56aae75c041607a3ddb049c7bb8f77361520/war-src/js/openEditor/interaction.js#L679-L682"]{interactions.handleError}.
There's some logic involved in seeing if the error is of a particular
class such as a
@link["https://github.com/dyoo/WeScheme/blob/97fc56aae75c041607a3ddb049c7bb8f77361520/war-src/js/openEditor/interaction.js#L732-L758"]{multi-colored
error message}; the wescheme-compiler in fact will turn errors caught
at compile time, such as a read error, into
@link["https://github.com/bootstrapworld/wescheme-compiler2012/blob/master/compiler-service.rkt#L290-L319"]{instances
of multi-colored errors}.  The system handles compile time and runtime
errors uniformily through this mechanism.





@section{The compiler server}

[fill me in]

@section{The Console}

[fill me in]

@section{Sharing}

[fill me in]




@section{Known issues}

The EC2 load balancers should not be treated as reliable resources.
Unfortunately, we've found that EC2 elastic load balancing fails on
high load by producing HTTP 503 errors.  We're working around this on
the client side by just having the software repeat a request that's
denied due to 503.

We've been hitting persistent out-of-memory issues with the
compilation servers running on EC2.  We're working around the issue by
having
@link["https://github.com/bootstrapworld/wescheme-compiler2012/tree/master/keep-alive-scripts"]{keep-alive
scripts} running in crontab.  I believe this is due to a bug in
Racket, and by the time a release rolls out with a
@link["http://lists.racket-lang.org/users/archive/2013-April/057450.html"]{fix
to a specific memory leak}, this problem should hopefully be subdued.





@section{Miscellaneous}

[fill me in]