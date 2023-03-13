/* -------------------------------------------------------------------------- */
/*   Given a Singly linked list. Print all the elements of the linked list.   */
/* -------------------------------------------------------------------------- */

const SinglyLinkedList = require("../02 Representation/2.1 singly_linked_list");

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
