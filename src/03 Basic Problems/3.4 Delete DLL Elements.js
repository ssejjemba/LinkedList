/**
 * Given a doubly linked list and a position. The task is to delete a node from given position in a doubly linked list
 */

const DoublyLinkedList = require("../02 Representation/2.2 doubly_linked_list");

// The time complexity of the deleteNodeAtPosition() function is O(n), where n is the length of the doubly linked list. In the worst case, the function will traverse the entire list in order to find the desired position. However, in the best case, the function may find the desired position in constant time if the position is 1 or the list is empty.

// The space complexity of the function is O(1), as it uses a constant amount of additional space regardless of the size of the input doubly linked list. Specifically, the function only uses six variables (current, currentPosition, prev, next, temp, and head) to keep track of the current node being visited in the list, the current position being visited, the previous node, the next node, a temporary variable, and the head node of the list, respectively. It does not create any new data structures or arrays that grow in size with the input.

function deleteNodeAtPosition(head, position) {
  if (!head) {
    return null;
  }
  let current = head;
  let currentPosition = 1;
  while (current && currentPosition < position) {
    current = current.next;
    currentPosition++;
  }
  if (!current) {
    return null;
  }
  if (current.prev) {
    current.prev.next = current.next;
  } else {
    head = current.next;
  }
  if (current.next) {
    current.next.prev = current.prev;
  }
  return head;
}

const newList = new DoublyLinkedList();
newList.push("First");
newList.push(2);
newList.push("Third");
newList.push([1, 2, 3, 4]);

console.log(deleteNodeAtPosition(newList.head, 2));
