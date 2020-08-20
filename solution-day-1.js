/*
  EASY
  This problem was recently asked by Google.

  Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

  For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

  Bonus: Can you do this in one pass?
*/

const assert = require('assert');

function run({ arr, k }) {
  const numbersThatWillWork = new Set();
  for (let i=0; i<arr.length; i++) {
    const number = arr[i];
    if (numbersThatWillWork.has(number)) {
      return true;
    }
    numbersThatWillWork.add(k - number);
  };
  return false;
}

// Tests
const testArr = [10, 15, 3, 7];

assert.equal(
  run({ arr: testArr, k: 17 }),
  true
);

assert.equal(
  run({ arr: testArr, k: 18 }),
  true
);

assert.equal(
  run({ arr: testArr, k: 13 }),
  true
);

assert.equal(
  run({ arr: testArr, k: 22 }),
  true
);

assert.equal(
  run({ arr: testArr, k: 25 }),
  true
);

assert.equal(
  run({ arr: testArr, k: 10 }),
  true
);

assert.equal(
  run({ arr: testArr, k: 0 }),
  false
);

assert.equal(
  run({ arr: testArr, k: 26 }),
  false
);

assert.equal(
  run({ arr: testArr, k: 9 }),
  false
);

assert.equal(
  run({ arr: testArr, k: 7 }),
  false
);

assert.equal(
  run({ arr: testArr, k: 50 }),
  false
);

assert.equal(
  run({ arr: testArr, k: 110 }),
  false
);

assert.equal(
  run({ arr: [], k: 110 }),
  false
);

console.log('Ok');
