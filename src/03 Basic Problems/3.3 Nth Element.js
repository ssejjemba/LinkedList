/**
 * Given a singly linked list with N nodes and a number X.
 * The task is to find the node at the given index (X)(1 based index) of linked list.
 */

const SinglyLinkedList = require("../02 Representation/2.1 singly_linked_list");

// The time complexity of the getNodeAtIndex() function is O(n), where n is the length of the linked list. In the worst case, the function will traverse the entire list in order to find the desired index. However, in the best case, the function may find the desired node in constant time if the index is 1 or the list is empty.

// The space complexity of the function is O(1), as it uses a constant amount of additional space regardless of the size of the input linked list. Specifically, the function only uses three variables (current, currentIndex, and result) to keep track of the current node being visited in the linked list, the current index being visited, and the node at the desired index, respectively. It does not create any new data structures or arrays that grow in size with the input.

function getNodeAtIndex(head, index) {
  let current = head;
  let currentIndex = 1;
  while (current && currentIndex < index) {
    current = current.next;
    currentIndex++;
  }
  if (!current) {
    return null;
  }
  return current;
}

const newList = new SinglyLinkedList();
newList.push("First");
newList.push(2);
newList.push("Third");
newList.push([1, 2, 3, 4]);

console.log(getNodeAtIndex(newList.head, 2)); // Third
