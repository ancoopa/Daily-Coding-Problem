/*
  MEDIUM
  This problem was asked by Jane Street.

  cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair.
  For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

  Given this implementation of cons:

  def cons(a, b):
      def pair(f):
          return f(a, b)
      return pair
  Implement car and cdr.
*/

const assert = require('assert');

function cons(a, b) {
  function pair(cb) {
    return cb(a, b);
  }
  return pair;
}

function car(pairFn) {
  function returnFirstArg(a, b) {
    return a;
  }
  return pairFn(returnFirstArg)
}

function cdr(pairFn) {
  function returnSecondArg(a, b) {
    return b;
  }
  return pairFn(returnSecondArg)
}

// Tests
assert.equal(
  car(cons(3, 4)),
  3
);

assert.equal(
  cdr(cons(3, 4)),
  4
);

console.log('Ok');
