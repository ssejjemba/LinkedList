/**
 * Given two linked lists, your task is to complete the function makeUnion(),
 * that returns the union of two linked lists. This union should include all the distinct elements only.
 */

// To solve this problem, we can use a hash table to keep track of the distinct elements in both linked lists. We can iterate through each linked list and add its elements to the hash table. Finally, we can create a new linked list with the elements in the hash table.

// Here is the pseudocode for the solution:

// 1. Initialize an empty hash table.
// 2. Initialize a pointer to the head of the first linked list.
// 3. Traverse the first linked list using the pointer, and for each element:
//  a. If the element is not in the hash table, add it to the hash table.
// 4. Initialize a pointer to the head of the second linked list.
// 5. Traverse the second linked list using the pointer, and for each element:
//  a. If the element is not in the hash table, add it to the hash table.
// 6. Initialize a new linked list.
// 7. Traverse the hash table and add each element to the new linked list.
// 8. Return the head of the new linked list.

// The time complexity of this solution is O(N+M), where N and M are the lengths of the two linked lists. This is because we are iterating through each linked list once, and the hash table operations take constant time on average.

// The space complexity of this solution is O(N+M), because in the worst case, all elements of the linked lists are distinct, and we need to store them all in the hash table

function makeUnion(head1, head2) {
  const set = new Set();

  // Traverse through first linked list
  let curr = head1;
  while (curr) {
    set.add(curr.data);
    curr = curr.next;
  }

  // Traverse through second linked list
  curr = head2;
  while (curr) {
    set.add(curr.data);
    curr = curr.next;
  }

  // Create new linked list from unique elements in sorted order
  const arr = Array.from(set);
  arr.sort((a, b) => a - b);
  const newHead = new Node(arr[0]);
  let prev = newHead;
  for (let i = 1; i < arr.length; i++) {
    const node = new Node(arr[i]);
    prev.next = node;
    prev = node;
  }

  return newHead;
}

// This implementation has a time complexity of O(n) because we are only traversing through each linked list once, and the set operations and sorting have a complexity of O(n) as well. The space complexity is also O(n) because we are storing all unique elements in a set and then in an array.
