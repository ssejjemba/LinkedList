/**
 * Given two string, represented as linked lists (every character is a node->data in the linked list).
 * Write a function compare() that works similar to strcmp(), i.e., it returns 0 if both strings are same,
 * 1 if first linked list is lexicographically greater, and -1 if second is lexicographically greater.
 */

function compare(headA, headB) {
  let currentNodeA = headA;
  let currentNodeB = headB;

  while (currentNodeA && currentNodeB) {
    if (currentNodeA.data > currentNodeB.data) {
      return 1;
    } else if (currentNodeA.data < currentNodeB.data) {
      return -1;
    }

    currentNodeA = currentNodeA.next;
    currentNodeB = currentNodeB.next;
  }

  // If one of the lists has more nodes, it is lexicographically greater
  if (currentNodeA) {
    return 1;
  } else if (currentNodeB) {
    return -1;
  }

  // Both lists have the same characters and length
  return 0;
}

// This implementation defines a Node class for linked list nodes. The compare function takes the heads of two input linked lists as arguments, iterates through the lists node by node, and compares the characters at each node. It returns 1 if the first linked list is lexicographically greater, -1 if the second linked list is lexicographically greater, and 0 if both strings are the same.

// The time complexity of this function is O(N), where N is the length of the shorter linked list, as it iterates through the lists until it reaches the end of one of them. The space complexity is O(1), as it uses a constant amount of extra space for the currentNodeA and currentNodeB variables.
