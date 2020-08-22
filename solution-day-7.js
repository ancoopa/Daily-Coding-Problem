/*
  MEDIUM
  This problem was asked by Facebook.

  Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

  For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

  You can assume that the messages are decodable. For example, '001' is not allowed.
*/

const assert = require('assert');

function isDecodable(codeStr) {
  const positiveNumbersOnly = codeStr.match(/^[0-9]*$/gm);
  if (codeStr[0] === '0' || !positiveNumbersOnly || positiveNumbersOnly.length === 0) {
    return false;
  }
  return true;
}

function addedCombinations(char) {
  const int = parseInt(char);
  if (!int || int > 26) {
    return 0;
  };
  return 1;
}

function run(codeStr) { // '1234'   |   '234   |   '34'    |   '34'   |   '4'
  if (!isDecodable(codeStr)) {
    return null;
  }
  
  if (codeStr.length === 1) {
    return 1;
  } else if (codeStr.length === 2) {
    return 1 + addedCombinations(codeStr);
  }
  
  const withoutFirstChar = codeStr.substring(1);
  let result = run(withoutFirstChar);// 234 34
  
  const twoFirstChars = codeStr.substring(0, 2);
  if (addedCombinations(twoFirstChars)) {
    const withoutTwoFirstChars = codeStr.substring(2);
    result += run(withoutTwoFirstChars);// 34 4
  }

  return result;
}

// Tests
assert.equal(
  run('111'),
  3
);

assert.equal(
  run('1111'),
  5
);

assert.equal(
  run('1511'),
  4
);

assert.equal(
  run('91'),
  1
);

assert.equal(
  run('001'),
  null
);

console.log('Ok');
