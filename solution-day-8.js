/*
  EASY
  This problem was asked by Google.

  A unival tree (which stands for "universal value") is a tree where all nodes
  under it have the same value.

  Given the root to a binary tree, count the number of unival subtrees.

  For example, the following tree has 5 unival subtrees:

    0
   / \
  1   0
     / \
    1   0
   / \
  1   1

*/

// If no value => also unival.

const assert = require('assert');

class Node {
  constructor({ value, left=null, right=null }) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function isNodeUnival(node) {
  const { value, left, right } = node;
  if (left && right) {
    return value === left.value && value === right.value
      ? 1
      : 0;
  }
  return !left && !right
    ? 1
    : 0;
}

function run(tree) {
  if (!(tree instanceof Node)) {
    return null;
  }
  let count = 0;
  count += isNodeUnival(tree);
  if (tree.left) {
    count += run(tree.left);
  }
  if (tree.right) {
    count += run(tree.right);
  }
  return count;
}

// Tests
const testTree1 = new Node({
  value: 0,
  left: new Node({ value: 1 }),
  right: new Node({
    value: 0,
    left: new Node({
      value: 1,
      left: new Node({ value: 1 }),
      right: new Node({ value: 1 }),
    }),
    right: new Node({ value: 0 })
  })
});

const testTree2 = new Node({
  value: 1,
  left: new Node({ value: 0 }),
  right: new Node({
    value: 1,
    right: new Node({
      value: 0,
      left: new Node({ value: 0 }),
      right: new Node({ value: 0 })
    })
  })
});

const testTree3 = new Node({
  value: 1,
  left: new Node({ value: 1 }),
  right: new Node({
    value: 1,
    right: new Node({
      value: 1,
      left: new Node({ value: 1 }),
      right: new Node({ value: 1 })
    })
  })
});

assert.equal(
  run(testTree1),
  5
);

assert.equal(
  run(testTree2),
  4
);

assert.equal(
  run(testTree3),
  5
);

assert.equal(
  run(),
  null
);

assert.equal(
  run({}),
  null
);

assert.equal(
  run(1),
  null
);

console.log('Ok');
