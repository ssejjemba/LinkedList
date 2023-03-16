/**
 * Given a Singly Linked List of size N, delete all alternate nodes of the list.
 */

function deleteAlt(head) {
  if (!head) {
    return null;
  }
  let current = head;
  while (current && current.next) {
    current.next = current.next.next;
    current = current.next;
  }
  return head;
}

// In this function, we start by checking if the head of the linked list is null. If it is, we return null since there is nothing to delete.

// We then initialize a current variable to the head of the linked list, and use a while loop to traverse the list. At each step of the loop, we check if current and current.next are not null. If they are not null, we set current.next to current.next.next to delete the alternate node, and then move current to the next alternate node (which is now the current.next node that we just skipped).

// Finally, we return the head of the modified linked list.

// Note that this implementation has a time complexity of O(N), where N is the length of the linked list, since we need to traverse the entire list to delete the alternate nodes. The space complexity is O(1), since we only use a constant amount of extra space to store the current variable.
