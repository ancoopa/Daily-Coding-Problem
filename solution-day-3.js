/*
  MEDIUM
  This problem was asked by Google.

  Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s),
  which deserializes the string back into the tree.

  For example, given the following "Node" class:
  ```
      class Node:
          def __init__(self, val, left=None, right=None):
              self.val = val
              self.left = left
              self.right = right
  ```

  The following test should pass:
  ```
      node = Node('root', Node('left', Node('left.left')), Node('right'))
      assert deserialize(serialize(node)).left.left.val == 'left.left'
  ```
*/

const assert = require('assert');

class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function serialize(root) {
  if (!root) {
    return null;
  }
  return JSON.stringify(root);
}

function deserialize(s) {
  if (!s || !isValidStringifiedObject(s)) {
    return null;
  }
  return JSON.parse(s);
}

function isValidStringifiedObject(json) {
  if (!json) {
    return false;
  }
  return /^[\],:{}\s]*$/.test(json.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
      replace(/(?:^|:|,)(?:\s*\[)+/g, ''));
}
  
// Tests
const node = new Node(
  'root',
  new Node('left', new Node('left.left')),
  new Node('right')
);
/* Created tree:
                 root
                /    \
            left      right
           /
  left.left
*/

const serializedNode = JSON.stringify(node);

assert.equal(
  serialize(),
  null
);

assert.equal(
  serialize(node),
  serializedNode
);

assert.equal(
  isValidStringifiedObject(''),
  false
)

assert.equal(
  isValidStringifiedObject(),
  false
)

assert.equal(
  isValidStringifiedObject('test'),
  false
)

assert.equal(
  isValidStringifiedObject('{test: 1}'),
  false
)

assert.equal(
  isValidStringifiedObject('{"test": 1}'),
  true
)

assert.equal(
  isValidStringifiedObject('{"test": "1"}'),
  true
)

assert.equal(
  isValidStringifiedObject(serializedNode),
  true
)

assert.equal(
  deserialize(),
  null
);

assert.equal(
  deserialize(''),
  null
);

assert.equal(
  deserialize('test'),
  null
);

assert.deepEqual(
  deserialize(serializedNode),
  node
);

assert.equal(
  deserialize(serialize(node)).left.left.val,
  'left.left'
);

console.log('Ok');
