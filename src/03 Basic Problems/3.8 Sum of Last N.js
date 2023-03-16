/**
 * Given a single linked list of size M, your task is to complete the function sumOfLastN_Nodes(),
 * which should return the sum of last N nodes of the linked list.
 */

function sumOfLastN_Nodes(head, n) {
  let current = head;
  let count = 0;
  while (current) {
    count++;
    current = current.next;
  }

  current = head;
  let sum = 0;
  for (let i = 0; i < count - n; i++) {
    current = current.next;
  }
  while (current) {
    sum += current.data;
    current = current.next;
  }
  return sum;
}

// We first use a while loop to count the number of nodes in the linked list, and store the result in the count variable. We then reset the current pointer to the head of the linked list, and use a for loop to move the current pointer to the (count - n)-th node of the linked list. Finally, we use another while loop to traverse the rest of the linked list, starting from the (count - n)-th node, and add up the data values of the nodes to compute the sum of the last n nodes.

// This implementation has a time complexity of O(M), where M is the length of the linked list, because we need to traverse the entire linked list twice. The space complexity is O(1), since we only use a constant amount of extra space to store the current, count, and sum variables.
