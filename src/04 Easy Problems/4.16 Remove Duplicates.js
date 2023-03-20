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

// The removeDuplicates() function takes the head of the linked list as input and returns a pointer to a linked list with no duplicate elements. It initializes a Set values to store unique values in the linked list. It iterates through the list, checking if the value of the next node is already in the Set. If it is, the duplicate node is removed; otherwise, the value is added to the Set, and the iteration continues.

// The time complexity of this algorithm is O(N), where N is the number of nodes in the linked list, as it iterates through the list once. The space complexity is O(N) because it uses the Set to store unique values from the linked list.
