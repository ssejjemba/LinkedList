/* -------------------------------------------------------------------------- */
/*                   Representation of a Doubly Linked List                   */
/* -------------------------------------------------------------------------- */

class DoublyLinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push(val): This method adds a new node with the given value to the end of the list. The time complexity of this operation is O(1) because it only requires updating the next and prev pointers of the new node and the current tail node. The space complexity is also O(1) because we only create a new node with the given value.

  push(val) {
    const newNode = new DoublyLinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // pop(): This method removes the last node from the list. The time complexity of this operation is O(1) because we only need to update the next and prev pointers of the tail node and the new tail node. The space complexity is also O(1) because we only remove the reference to the removed node.

  pop() {
    if (!this.tail) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  // shift(): This method removes the first node from the list. The time complexity of this operation is O(1) because we only need to update the next and prev pointers of the head node and the new head node. The space complexity is also O(1) because we only remove the reference to the removed node.

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // unshift(val): This method adds a new node with the given value to the beginning of the list. The time complexity of this operation is O(1) because we only need to update the next and prev pointers of the new node and the current head node. The space complexity is also O(1) because we only create a new node with the given value.

  unshift(val) {
    const newNode = new DoublyLinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // get(index): This method retrieves the node at the given index in the list. The time complexity of this operation is O(n) in the worst case because we may need to traverse the entire list to find the node at the given index. The space complexity is O(1) because we only need to return the found node.

  get(index) {
    if (index < 0 || index >= this.length) return null;
    const half = Math.floor(this.length / 2);
    let current;
    if (index <= half) {
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

  // set(index, val): This method updates the value of the node at the given index in the list. The time complexity of this operation is O(n) in the worst case because we may need to traverse the entire list to find the node at the given index. The space complexity is O(1) because we only update the value of the found node.

  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  // insert(index, val): This method adds a new node with the given value at the given index in the list. The time complexity of this operation is O(n) in the worst case because we may need to traverse the entire list to find the node before the given index. The space complexity is O(1) because we only create a new node with the given value and update the next and prev pointers of the surrounding nodes.

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const newNode = new DoublyLinkedListNode(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  // remove(index): This method removes the node at the given index in the list. The time complexity of this operation is O(n) in the worst case because we may need to traverse the entire list to find the node before the given index. The space complexity is O(1) because we only update the next and prev pointers of the surrounding nodes and return the removed node.

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

  // reverse(): This method reverses the order of the nodes in the list. The time complexity of this operation is O(n) because we need to traverse the entire list once to update the next and prev pointers of each node. The space complexity is O(1) because we only need to create a few temporary variables to update the next and prev pointers of each node in place.

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      node.prev = next;
      prev = node;
      node = next;
    }
    return this;
  }
}

module.exports = DoublyLinkedList;
