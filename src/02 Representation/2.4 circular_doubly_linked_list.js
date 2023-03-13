/* -------------------------------------------------------------------------- */
/*               Representation of a Circular Doubly Linked List              */
/* -------------------------------------------------------------------------- */

class CircularDoublyLinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // The `push` method adds a new node with the given value to the end of the list. If the list is empty, the new node becomes both the `head` and `tail`. If the list is not empty, we update the `prev` property of the new node to point to the current `tail`, update the `next` property of the current `tail` to point to the new node, update the `tail` to be the new node, and update the `next` property of the new node to point to the `head`, and the `prev` property of the `head` to point to the new node. This makes the list circular and doubly linked. The `push` method has a time complexity of O(1) and a space complexity of O(1).

  push(val) {
    const newNode = new CircularDoublyLinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.tail.next = this.head;
    this.head.prev = this.tail;
    this.length++;
    return this;
  }

  // The `pop` method removes the last node from the list. We update the `tail` to be the second-to-last node, remove the reference to the previous `tail` by setting its `next` property to `null`, update the `next` property of the new `tail` to point to the `head`, and update the `prev` property of the `head` to point to the new `tail`. If the list contains only one node, we set both the `head` and `tail` to `null`. The `pop` method has a time complexity of O(1) and a space complexity of O(1).

  pop() {
    if (!this.head) return undefined;
    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = this.head;
      this.head.prev = this.tail;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  // The `shift` method removes the first node from the list. We update the `head` to be the current `head`'s `next` node, remove the reference to the previous `head` by setting its `prev` property to `null`, update the `prev` property of the new `head` to point to the `tail`, update the `next` property of the `tail` to point to the new `head`, and update the `prev` property of the `head` to point to `null`. If the list contains only one node, we set both the `head` and `tail` to `null`. The `shift` method has a time complexity of O(1) and a space complexity of O(1).

  shift() {
    if (!this.head) return undefined;
    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = this.tail;
      this.tail.next = this.head;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }

  // The `unshift` method adds a new node with the given value to the beginning of the list. If the list is empty, the new node becomes both the `head` and `tail`. If the list is not empty, we update the `prev` property of the new node to point to the `tail`, update the `next` property of the new node to point to the current `head`, update the `prev` property of the current `head` to point to the new node, and update the `next` property of the `tail` to point to the new node. This makes the list circular and doubly linked. The `unshift` method has a time complexity of O(1) and a space complexity of O(1).

  unshift(val) {
    const newNode = new CircularDoublyLinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    }
    this.length++;
    return this;
  }

  // The `get` method retrieves the node at the given index in the list by iterating through the list starting from the head or tail, depending on whether the index is closer to the beginning or end of the list. If the index is less than zero or greater than or equal to the length of the list, the method returns null. The get method has a time complexity of O(n) in the worst case (when the index is closer to the middle of the list) and a space complexity of O(1).

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current;
    if (index <= this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }
    return current;
  }

  // The set method updates the value of the node at the given index to the given value. If the node at the given index does not exist, the method returns false; otherwise, it updates the value and returns true. The set method has a time complexity of O(n) in the worst case (when the index is closer to the middle of the list) and a space complexity of O(1).

  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  // The insert method adds a new node with the given value at the given index in the list. If the index is less than zero or greater than the length of the list, the method returns false. If the index is zero, the method calls the unshift method to add the node to the beginning of the list. If the index is equal to the length of the list, the method calls the push method to add the node to the end of the list. Otherwise, it retrieves the node before the given index using the get method, updates its next property to point to the new node, updates the prev property of the new node to point to the node before the given index, updates the next property of the new node to point to the node after the given index, and updates the prev property of the node after the given index to point to the new node. The insert method has a time complexity of O(n) in the worst case (when using the get method) and a space complexity of O(1).

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const newNode = new CircularDoublyLinkedListNode(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  // The remove method removes the node at the given index from the list. If the index is less than zero or greater than or equal to the length of the list, the method returns undefined. If the index is zero, the method calls the shift method to remove the node from the beginning of the list. If the index is equal to the length of the list minus one, the method calls the pop method to remove the node from the end of the list. Otherwise, it retrieves the node at the given index using the get method, removes the reference to the removed node by setting its next and prev properties to null, updates the next property of the node before the removed node to point to the node after the removed node, and updates the prev property of the node after the removed node to point to the node before the removed node. The remove method has a time complexity of O(n) in the worst case (when using the get method) and a space complexity of O(1).

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
}

module.exports = CircularDoublyLinkedList;
