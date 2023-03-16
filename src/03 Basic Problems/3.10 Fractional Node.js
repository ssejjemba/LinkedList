/**
 * Given a singly linked list and a number k.
 * Write a function to find the (N/k)th element, where N is the number of elements in the list.
 * We need to consider ceil value in case of decimals.
 */

function fractional_node(head, k) {
  if (k <= 0) {
    return -1;
  }

  let count = 0;
  let current = head;

  while (current) {
    count++;
    current = current.next;
  }

  const index = Math.ceil(count / k);

  current = head;
  for (let i = 1; i < index; i++) {
    current = current.next;
  }

  return current ? current.data : -1;
}

// In this implementation, we first check if the value of k is non-negative. If it is negative or zero, we immediately return -1, as there is no fractional node in such cases.

// We then use a while loop to traverse the linked list and count the number of nodes. We store the count in the count variable.

// We then calculate the index of the fractional node using the formula Math.ceil(count / k).

// Finally, we use a for loop to traverse the linked list again and find the node at the calculated index. We return the data of that node, if it exists, or -1 otherwise.

// This implementation has a time complexity of O(N), where N is the length of the linked list, because we need to traverse the entire linked list twice. The space complexity is O(1), since we only use a constant amount of extra space to store the count and current variables.
