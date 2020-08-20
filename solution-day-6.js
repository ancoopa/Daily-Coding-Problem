/*
  HARD
  This problem was asked by Google.

  An XOR linked list is a more memory efficient doubly linked list.
  Instead of each node holding next and prev fields, it holds a field named both,
  which is an XOR of the next node and the previous node.
  Implement an XOR linked list; it has an add(element) which adds the element to the end,
  and a get(index) which returns the node at index.

  If using a language that has no pointers (such as Python),
  you can assume you have access to get_pointer and
  dereference_pointer functions that converts between nodes and memory addresses.
*/

/*
  XOR list rules:
  next = prev ^ current
  prev = next ^ current
*/
const assert = require('assert');
const {
  POSSIBLE_DATA,
  getDataPointer
} = require('./solution-day-6-utils');

class ListNode {
  constructor(data) {
    this.data = data;
    this.both = getDataPointer(data);
  }
}

class XORLinkedList {
  constructor(node) {
    this.head = node;
    this.tail = node;
    this.head.both = 0
    this.tail.both = 0
  }

  add(node) {
    this.tail.both ^= getDataPointer(node.data)
    node.both = getDataPointer(this.tail.data)
    this.tail = node
  }

  get(index) {
    if (index < 0) {
      return null;
    }
    let prevNodeAddress = 0;
    let resultNode = this.head;

    for (let i=0; i<index; i++) {
      const nextNodeAddress = prevNodeAddress ^ resultNode.both
      prevNodeAddress = getDataPointer(resultNode.data);
      resultNode = pointers[nextNodeAddress];
    }

    if (!resultNode) {
      return null;
    }
    return resultNode.data
  }
}

// Tests
const a = new ListNode(POSSIBLE_DATA[0]);
const b = new ListNode(POSSIBLE_DATA[1]);
const c = new ListNode(POSSIBLE_DATA[2]);
const d = new ListNode(POSSIBLE_DATA[3]);

// pointers used as a fake memory object
const pointers = {
  [getDataPointer(POSSIBLE_DATA[0])]: a,
  [getDataPointer(POSSIBLE_DATA[1])]: b,
  [getDataPointer(POSSIBLE_DATA[2])]: c,
  [getDataPointer(POSSIBLE_DATA[3])]: d,
};

const linkedList = new XORLinkedList(c);
linkedList.add(d);
linkedList.add(b);
linkedList.add(a);

assert.equal(
  linkedList.get(0),
  POSSIBLE_DATA[2]
);
assert.equal(
  linkedList.get(1),
  POSSIBLE_DATA[3]
);
assert.equal(
  linkedList.get(2),
  POSSIBLE_DATA[1]
);
assert.equal(
  linkedList.get(3),
  POSSIBLE_DATA[0]
);
assert.equal(
  linkedList.get(-1),
  null
);
assert.equal(
  linkedList.get(4),
  null
);

console.log('Ok');
