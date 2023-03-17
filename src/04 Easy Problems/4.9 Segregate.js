/**
 * Given a linked list of N nodes where nodes can contain values 0s, 1s, and 2s only.
 * The task is to segregate 0s, 1s, and 2s linked list such that all zeros segregate to head side,
 * 2s at the end of the linked list, and 1s in the mid of 0s and 2s.
 */

function segregate(head) {
  let zeroHead = null;
  let oneHead = null;
  let twoHead = null;
  let zeroTail = null;
  let oneTail = null;
  let twoTail = null;

  let currentNode = head;

  while (currentNode) {
    let nextNode = currentNode.next;
    currentNode.next = null;

    if (currentNode.data === 0) {
      if (!zeroHead) {
        zeroHead = zeroTail = currentNode;
      } else {
        zeroTail.next = currentNode;
        zeroTail = currentNode;
      }
    } else if (currentNode.data === 1) {
      if (!oneHead) {
        oneHead = oneTail = currentNode;
      } else {
        oneTail.next = currentNode;
        oneTail = currentNode;
      }
    } else {
      if (!twoHead) {
        twoHead = twoTail = currentNode;
      } else {
        twoTail.next = currentNode;
        twoTail = currentNode;
      }
    }

    currentNode = nextNode;
  }

  if (zeroTail) {
    zeroTail.next = oneHead || twoHead;
  }

  if (oneTail) {
    oneTail.next = twoHead;
  }

  return zeroHead || oneHead || twoHead;
}

// This implementation defines a Node class for linked list nodes. The segregate function takes the head of the input linked list as an argument and segregates the nodes by maintaining separate lists for each value (0, 1, and 2). It then connects these lists in the correct order (0s, 1s, and 2s) to form the segregated linked list. The function returns the head node of the modified linked list.

// The time complexity of this function is O(N), where N is the number of nodes in the linked list, as it iterates through the list once. The space complexity is O(1) since it uses a constant amount of extra space for the currentNode, nextNode, and head/tail pointers of the three separate lists.
