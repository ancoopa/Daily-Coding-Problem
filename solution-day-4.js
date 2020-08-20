/*
  HARD
  This problem was asked by Stripe.

  Given an array of integers, find the first missing positive integer in linear time and constant space.
  In other words, find the lowest positive integer that does not exist in the array.
  The array can contain duplicates and negative numbers as well.

  For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

  You can modify the input array in-place.
*/

const assert = require('assert');

function run(arr, num=1) {
  if (!arr || arr.length === 0) {
    return null;
  }
  if (arr.includes(num)) {
    return run(arr, num+1);
  }
  return num;
}

// Tests
assert.equal(
  run([3, 4, -1, 1]),
  2
);

assert.equal(
  run([3, 4, -1, 1, 1]),
  2
);

assert.equal(
  run([1, 2, 0]),
  3
);

assert.equal(
  run([1]),
  2
);

assert.equal(
  run([-1]),
  1
);

assert.equal(
  run([0, 1, 1, 1, 0, 0]),
  2
);

assert.equal(
  run(),
  null
);

assert.equal(
  run([]),
  null
);

console.log('Ok');
