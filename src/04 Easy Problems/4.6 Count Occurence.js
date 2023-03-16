/**
 * Given a singly linked list and a key, count the number of occurrences of given key in the linked list.
 */

function count(head, search_for) {
  let currentNode = head;
  let count = 0;

  while (currentNode) {
    if (currentNode.data === search_for) {
      count++;
    }
    currentNode = currentNode.next;
  }

  return count;
}

// The count function takes the head of the input linked list and the key (search_for) as input parameters. It iterates through the list, comparing each node's data with the given key, and increments the count variable when a match is found. The function returns the count of occurrences of the given key in the linked list.

// The time complexity of this function is O(N), where N is the number of nodes in the linked list, as it iterates through the list once. The space complexity is O(1) since it uses a constant amount of extra space for the count variable and the currentNode variable.
