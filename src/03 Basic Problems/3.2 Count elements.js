/**
 * Given a singly linked list. The task is to find the length of the linked list,
 * where length is defined as the number of nodes in the linked list.
 */
const SinglyLinkedList = require("../02 Representation/2.1 singly_linked_list");

// The time complexity of the getLinkedListLength() function is O(n), where n is the length of the linked list. This is because the function iterates through the linked list once, visiting each node exactly once, and performs a constant-time operation for each node (incrementing the count variable).

// The space complexity of the function is O(1), as it uses a constant amount of additional space regardless of the size of the input linked list. Specifically, the function only uses two variables (current and count) to keep track of the current node being visited in the linked list and the number of nodes visited so far, respectively. It does not create any new data structures or arrays that grow in size with the input.

function getLinkedListLength(head) {
  let current = head;
  let count = 0;
  while (current) {
    count++;
    current = current.next;
  }
  return count;
}

const newList = new SinglyLinkedList();
newList.push("First");
newList.push(2);
newList.push("Third");
newList.push([1, 2, 3, 4]);

console.log(getLinkedListLength(newList.head));
