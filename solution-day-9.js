/*
  HARD
  This problem was asked by Airbnb.

  Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

  For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

  Follow-up: Can you do this in O(N) time and constant space?
*/

const assert = require('assert');

function run(arr) {
  if (!arr || arr.length === 0) return null;
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1];

  let previousLargest = 0, largest = 0;
  arr.forEach(n => {
    const max = Math.max(largest, previousLargest + n);
    previousLargest = largest;
    largest = max;
  });
  return largest;
}

// Test
assert.equal(
  run(),
  null
);

assert.equal(
  run([]),
  null
);

assert.equal(
  run([1, 10]),
  10
);

assert.equal(
  run([0, 0, 0]),
  0
);

assert.equal(
  run([2, 4, 6, 2, 5]),
  13
);

assert.equal(
  run([5, 1, 1, 5]),
  10
);

console.log('Ok');
