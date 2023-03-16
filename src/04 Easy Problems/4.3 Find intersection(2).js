/**
 * Given two linked lists, the task is to complete the function findIntersection(), that returns the intersection of two linked lists.
 * Each of the two linked list contains distinct node values.
 */

function findIntersection(head1, head2) {
  const seen = new Map(); // O(1) to create a new Map
  let intersection = null; // O(1) to create a new variable
  let tail = null; // O(1) to create a new variable

  // Traverse the second list and add each node to the hash table
  let current = head2; // O(1) to create a new variable
  while (current !== null) {
    // O(n)
    seen.set(current.data, current); // O(1) to add a new key-value pair to the Map
    current = current.next; // O(1) to move to the next node
  }

  // Traverse the first list and check if each node's data is in the hash table
  current = head1; // O(1) to create a new variable
  while (current !== null) {
    // O(m)
    if (seen.has(current.data)) {
      // O(1) to check if a key exists in the Map
      // Add the node to the intersection list
      const newNode = new Node(current.data); // O(1) to create a new node
      if (intersection === null) {
        // O(1) to check if the intersection list is empty
        intersection = newNode; // O(1) to set the head of the intersection list
        tail = newNode; // O(1) to set the tail of the intersection list
      } else {
        tail.next = newNode; // O(1) to add a new node to the intersection list
        tail = newNode; // O(1) to update the tail of the intersection list
      }
    }
    current = current.next; // O(1) to move to the next node
  }

  return intersection; // O(1) to return the head of the intersection list
}

// The time complexity of this implementation is O(n + m), where n and m are the lengths of the two input linked lists. The first while loop that traverses the second linked list takes O(n) time, where n is the length of the second linked list. The second while loop that traverses the first linked list takes O(m) time, where m is the length of the first linked list. The other operations inside the while loops all take constant time, so they don't affect the overall time complexity.
