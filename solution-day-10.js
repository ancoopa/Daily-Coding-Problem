/*
  MEDIUM
  This problem was asked by Apple.

  Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
*/

const run = (f, n) => setTimeout(f, n);

// Tests
const testFunction = () => console.log('Approximate end time:', Date.now());
console.log('Approximate start time:', Date.now());
run(testFunction, 2000);
