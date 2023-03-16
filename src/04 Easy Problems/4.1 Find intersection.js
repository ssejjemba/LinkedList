/**
 * Given two linked lists sorted in increasing order, create a new linked list representing the intersection of the two linked lists.
 * The new linked list should be made with its own memory the original lists should not be changed.
 * Note: The linked list elements are not necessarily distinct.
 */

function intersection(head1, head2) {
  let curr1 = head1;
  let curr2 = head2;
  let resultHead = null;
  let resultTail = null;

  while (curr1 !== null && curr2 !== null) {
    if (curr1.data === curr2.data) {
      let newNode = new Node(curr1.data);
      if (resultHead === null) {
        resultHead = newNode;
        resultTail = newNode;
      } else {
        resultTail.next = newNode;
        resultTail = newNode;
      }
      curr1 = curr1.next;
      curr2 = curr2.next;
    } else if (curr1.data < curr2.data) {
      curr1 = curr1.next;
    } else {
      curr2 = curr2.next;
    }
  }

  return resultHead;
}

// Here's how the function works:

// 1. Initialize two pointers curr1 and curr2 to the heads of the two linked lists.
// 2. Initialize resultHead and resultTail to null.
// 3. Traverse the linked lists using the two pointers curr1 and curr2. At each step, compare the data in the nodes pointed to by curr1 and curr2.
// 4. If the data is equal, create a new node with the same data and append it to the result list. Move curr1 and curr2 to their next nodes.
// 5. If the data in curr1 is less than the data in curr2, move curr1 to its next node.
// 6. If the data in curr2 is less than the data in curr1, move curr2 to its next node.
// 7. Continue until one of the pointers reaches the end of its linked list.
// 8. Return the head of the result list.

// The time complexity of the function is O(N*M), where N is the length of the first linked list and M is the length of the second linked list. This is because for each node in the first linked list, we need to iterate through all the nodes in the second linked list to check if there is an intersection.

// The space complexity of the function is O(K), where K is the number of nodes in the intersection of the two linked lists. This is because we are creating a new linked list to store the intersection nodes.
