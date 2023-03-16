/**
 * Given a singly linked list and a number k, you are required to complete the function modularNode()
 * which returns the modular node of the linked list.
 * A modular node is the last node of the linked list whose Index is divisible by the number k, i.e. i%k==0.
 * Note: If no such node is available, return -1. We are following 1 indexing.
 */

function modularNode(head, k) {
  if (k <= 0) {
    return -1;
  }

  let index = 1;
  let current = head;
  let result = null;

  while (current) {
    if (index % k === 0) {
      result = current;
    }
    index++;
    current = current.next;
  }

  return result ? result.data : -1;
}

// In this implementation, we first check if the value of k is non-negative. If it is negative or zero, we immediately return -1, as there is no modular node in such cases.

// We then use a while loop to traverse the linked list, keeping track of the current index and the last node seen whose index is divisible by k. We update the result variable with the current node whenever the index is divisible by k.

// Finally, we return the data of the last node seen whose index is divisible by k, if any, or -1 otherwise.

// This implementation has a time complexity of O(N), where N is the length of the linked list, because we need to traverse the entire linked list once. The space complexity is O(1), since we only use a constant amount of extra space to store the index, current, and result variables.
