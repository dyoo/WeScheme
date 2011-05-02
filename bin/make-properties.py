#!/usr/bin/env python

import sys

from ConfigParser import ConfigParser


"""This program copies the content from war/wescheme.properties and makes
it a file available in JavaScript land.  This is so we can centralize
the places where we define external services.
"""


class FakeSecHead(object):
    def __init__(self, fp):
        self.fp = fp
        self.sechead = '[DEFAULT]\n'
    def readline(self):
        if self.sechead:
            try: return self.sechead
            finally: self.sechead = None
        else: return self.fp.readline()



def parse():
    cfg = ConfigParser()
    cfg.readfp(FakeSecHead(sys.stdin))
    return cfg.defaults()


if __name__ == '__main__':
    dict = parse()
    TEMPLATE = """
goog.provide("plt.wescheme.WeSchemeProperties");
    """
    print TEMPLATE
    for key in dict:
        print ("plt.wescheme.WeSchemeProperties.%s = %r;" % (key, dict[key]))
