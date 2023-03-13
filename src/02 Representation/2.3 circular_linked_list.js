/* -------------------------------------------------------------------------- */
/*                  Representation of a Circular Linked List                  */
/* -------------------------------------------------------------------------- */

class CircularLinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // The push method adds a new node with the given value to the end of the list. If the list is empty, the new node becomes both the head and tail. If the list is not empty, we update the next property of the current tail to point to the new node, update the tail to be the new node, and update the next property of the new node to point to the head. This makes the list circular. The push method has a time complexity of O(1) and a space complexity of O(1).

  push(val) {
    const newNode = new CircularLinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.length++;
    return this;
  }

  // The pop method removes the last node from the list. We iterate through the list until we find the second-to-last node (i.e., the node whose next property points to the current tail). We update the tail to be the second-to-last node, remove the reference to the previous tail by setting its next property to null, and update the next property of the new tail to point to the head. If the list contains only one node, we set both the head and tail to null. The pop method has a time complexity of O(n) in the worst case (when removing the last node), and a space complexity of O(1).

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let prev = null;
    while (current.next !== this.head) {
      prev = current;
      current = current.next;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = prev;
      this.tail.next = this.head;
    }
    this.length--;
    return current;
  }

  // The shift method removes the first node from the list. We update the head to be the current head's next node, remove the reference to the previous head by setting its next property to null, and update the next property of the new head to point to the head. If the list contains only one node, we set both the head and tail to null. The shift method has a time complexity of O(1) and a space complexity of O(1).

  shift() {
    if (!this.head) return undefined;
    const removedNode = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.tail.next = this.head;
    }
    this.length--;
    return removedNode;
  }

  // The unshift method adds a new node with the given value to the beginning of the list. If the list is empty, the new node becomes both the head and tail. If the list is not empty, we update the next property of the new node to point to the current head, update the head to be the new node, and update the next property of the tail to point to the head. This makes the list circular. The unshift method has a time complexity of O(1) and a space complexity of O(1).

  unshift(val) {
    const newNode = new CircularLinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
    this.length++;
    return this;
  }

  // The get method retrieves the node at the given index in the list by iterating through the list starting from the head node. The get method has a time complexity of O(n) in the worst case and a space complexity of O(1).

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  // The set method updates the value of the node at the given index in the list by using the get method to retrieve the node and updating its val property. The set method has a time complexity of O(n) in the worst case (when using the get method) and a space complexity of O(1).

  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  // The insert method adds a new node with the given value at the given index in the list by using the get method to retrieve the node before the given index, updating its next property to point to the new node, updating the next property of the new node to point to the previous next node, and incrementing the length of the list. The insert method has a time complexity of O(n) in the worst case (when using the get method) and a space complexity of O(1).

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const newNode = new CircularLinkedListNode(val);
    const beforeNode = this.get(index - 1);
    newNode.next = beforeNode.next;
    beforeNode.next = newNode;
    this.length++;
    return true;
  }

  // The remove method removes the node at the given index in the list by using the get method to retrieve the node before the given index, updating its next property to point to the node after the given index, removing the reference to the removed node by setting its next property to null, and decrementing the length of the list. The remove method has a time complexity of O(n) in the worst case (when using the get method) and a space complexity of O(1).

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const beforeNode = this.get(index - 1);
    const removedNode = beforeNode.next;
    beforeNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }
}

module.exports = CircularLinkedList;
