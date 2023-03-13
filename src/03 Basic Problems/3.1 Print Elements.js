/* -------------------------------------------------------------------------- */
/*   Given a Singly linked list. Print all the elements of the linked list.   */
/* -------------------------------------------------------------------------- */

const SinglyLinkedList = require("../02 Representation/2.1 singly_linked_list");

// The time complexity of the printLinkedList() function is O(n), where n is the length of the linked list. This is because the function iterates through the linked list once, visiting each node exactly once, and performs a constant-time operation for each node (printing its value).

// The space complexity of the function is O(1), as it uses a constant amount of additional space regardless of the size of the input linked list. Specifically, the function only uses a single variable (current) to keep track of the current node being visited in the linked list, and it does not create any new data structures or arrays that grow in size with the input.

function printLinkedList(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

const newList = new SinglyLinkedList();
newList.push("First");
newList.push(2);
newList.push("Third");
newList.push([1, 2, 3, 4]);

printLinkedList(newList.head);
