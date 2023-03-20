/**
 * Given a singly linked list L0 -> L1 -> … -> Ln-1 -> Ln.
 * Rearrange the nodes in the list so that the new formed list is: L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2.
 */

function reverse(head) {
  let prev = null;
  let current = head;
  let next;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

function inPlace(head) {
  if (!head || !head.next) {
    return head;
  }

  // Find the middle of the linked list
  let slow = head;
  let fast = head;
  let prev;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // Disconnect the first half from the second half
  prev.next = null;

  // Reverse the second half of the linked list
  let secondHalf = reverse(slow);

  // Merge the first half and the reversed second half alternately
  let firstHalf = head;
  let newHead = new Node(-1); // Dummy node
  let currentNode = newHead;

  while (firstHalf || secondHalf) {
    if (firstHalf) {
      currentNode.next = firstHalf;
      firstHalf = firstHalf.next;
      currentNode = currentNode.next;
    }
    if (secondHalf) {
      currentNode.next = secondHalf;
      secondHalf = secondHalf.next;
      currentNode = currentNode.next;
    }
  }

  return newHead.next;
}

// The inPlace() function first finds the middle of the linked list using the slow and fast pointer approach. Then, it disconnects the first half from the second half and reverses the second half. Finally, it merges the first half and the reversed second half alternately.

// The time complexity of this algorithm is O(N), where N is the number of nodes in the linked list, as it iterates through the list twice (once to find the middle and once to merge the two halves). The space complexity is O(1), as it uses a constant amount of extra space for the pointers and the new dummy node.
