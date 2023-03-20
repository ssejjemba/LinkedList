/**
 * Given an unsorted linked list of N nodes.
 * The task is to remove duplicate elements from this unsorted Linked List.
 * When a value appears in multiple nodes, the node which appeared first should be kept,
 * all others duplicates are to be removed.
 */

function removeDuplicates(head) {
  if (!head || !head.next) {
    return head;
  }

  let currentNode = head;
  let values = new Set(); // To store unique values in the linked list
  values.add(currentNode.data);

  while (currentNode.next) {
    if (values.has(currentNode.next.data)) {
      // Remove the duplicate node
      currentNode.next = currentNode.next.next;
    } else {
      values.add(currentNode.next.data);
      currentNode = currentNode.next;
    }
  }

  return head;
}
