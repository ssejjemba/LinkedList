/* -------------------------------------------------------------------------- */
/*                   Representation of Singly Linked Lists:                   */
/* -------------------------------------------------------------------------- */

// A linked list is represented by a pointer to the first node of the linked list. The first node is called the head of the linked list. If the linked list is empty, then the value of the head points to NULL.

// Each node in a list consists of at least two parts:

// A Data Item (we can store integers, strings, or any type of data).
// Pointer (Or Reference) to the next node (connects one node to another) or An address of another node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push(val): This method adds a new node to the end of the linked list. The time complexity of this operation is O(1), since we simply update the next property of the last node in the list to point to the new node. The space complexity is also O(1), as we only create a new node with the given value and update the next property of the last node in the list.

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // pop(): This method removes the last node from the end of the linked list. The time complexity of this operation is O(n), where n is the length of the linked list, as we need to traverse the list to find the second to last node. The space complexity is O(1), as we only need to update the next property of the second to last node and return the removed node.

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // shift(): This method removes the first node from the beginning of the linked list. The time complexity of this operation is O(1), as we only need to update the head property of the list to point to the second node. The space complexity is O(1), as we only need to return the removed node.

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // unshift(val): This method adds a new node to the beginning of the linked list. The time complexity of this operation is O(1), as we only need to create a new node and update the next property to point to the old head node. The space complexity is also O(1), as we only create a new node with the given value.

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // get(index): This method retrieves the node at the given index in the linked list. The time complexity of this operation is O(n), where n is the length of the linked list, as we need to traverse the list to find the node at the given index. The space complexity is O(1), as we only need to return the found node.

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // set(index, val): This method updates the value of the node at the given index in the linked list. The time complexity of this operation is O(n), where n is the length of the linked list, as we need to traverse the list to find the node at the given index. The space complexity is O(1), as we only update the value of the found node.
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // insert(index, val): This method adds a new node with the given value at the given index in the linked list. The time complexity of this operation is O(n), where n is the length of the linked list, as we need to traverse the list to find the node before the given index. The space complexity is O(1), as we only create a new node with the given value and update the next property of the previous node.

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return !!this.unshift(val);
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // remove(index): This method removes the node at the given index in the linked list. The time complexity of this operation is O(n), where n is the length of the linked list, as we need to traverse the list to find the node before the given index. The space complexity is O(1), as we only update the next property of the previous node and return the removed node.

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  // reverse(): This method reverses the order of the nodes in the linked list. The time complexity of this operation is O(n), where n is the length of the linked list, as we need to traverse the list once to update the next property of each node. The space complexity is O(1), as we only need to create a few temporary variables to update the next properties of

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
