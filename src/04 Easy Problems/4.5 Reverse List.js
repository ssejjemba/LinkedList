/**
 * Given a linked list of N nodes.
 * The task is to reverse this list.
 */

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}

// The reverseLinkedList function takes the head of the input linked list as an argument and reverses the list by modifying the next pointers of each node to point to the previous node. It returns the head node of the reversed list.

// The time complexity of this function is O(N), where N is the number of nodes in the linked list, as it iterates through the list once. The space complexity is O(1) since it uses a constant amount of extra space for the temporary variables.
