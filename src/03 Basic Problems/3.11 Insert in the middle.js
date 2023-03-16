/**
 * Given a linked list of size N and a key. The task is to insert the key in the middle of the linked list.
 */

function insertInMiddle(head, x) {
  if (!head) {
    return new Node(x);
  }

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const newNode = new Node(x);
  newNode.next = slow.next;
  slow.next = newNode;

  return head;
}

// In this implementation, we first check if the head is null. If it is, we create a new node with the value x and return it.

// We then use a slow and fast pointer technique to find the middle node of the linked list. The slow pointer starts at the head of the linked list, and the fast pointer starts at the second node. The fast pointer moves two steps at a time, while the slow pointer moves one step at a time. When the fast pointer reaches the end of the linked list, the slow pointer will be pointing to the middle node.

// We then create a new node with the value x, and insert it after the middle node by setting its next pointer to the next pointer of the slow pointer, and setting the next pointer of the slow pointer to the new node.

// Finally, we return the head of the linked list.

// This implementation has a time complexity of O(N), where N is the length of the linked list, because we need to traverse the entire linked list to find the middle node. The space complexity is O(1), since we only use a constant amount of extra space to store the slow, fast, and newNode variables.
