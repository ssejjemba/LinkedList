/**
 * Given a singly linked list of size N. The task is to swap elements in the linked list pairwise.
 * For example, if the input list is 1 2 3 4, the resulting list after swaps will be 2 1 4 3.
 * Note: You need to swap the nodes, not only the data.
 */

function pairWiseSwap(head) {
  if (!head || !head.next) {
    return head;
  }

  let newHead = head.next;
  let currentNode = head;
  let prevNode = null;

  while (currentNode && currentNode.next) {
    let nextNode = currentNode.next;
    let nextNextNode = nextNode.next;

    // Swap nodes
    currentNode.next = nextNextNode;
    nextNode.next = currentNode;

    // Connect the previous node with the new swapped pair
    if (prevNode) {
      prevNode.next = nextNode;
    }

    // Update the previous node and move the current node forward
    prevNode = currentNode;
    currentNode = nextNextNode;
  }

  return newHead;
}

// The pairWiseSwap function takes the head of the input linked list as an argument and swaps the nodes pairwise by updating their next pointers. The function returns the head node of the modified linked list.

// The time complexity of this function is O(N), where N is the number of nodes in the linked list, as it iterates through the list once. The space complexity is O(1) since it uses a constant amount of extra space for the currentNode, prevNode, nextNode, and nextNextNode variables.
