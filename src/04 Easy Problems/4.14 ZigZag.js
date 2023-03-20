/**
 * Given a Linked list, rearrange it such that converted list should be of the form a < b > c < d > e < f .. where a, b, c are consecutive data node of linked list and such that the order of linked list is sustained.
 * For example: In 11 15 20 5 10 we consider only 11 20 5 15 10 because it satisfies the above condition
 * and the order of linked list. 5 20 11 15 10 is not considered as it does not follow the order of linked list.
 * To maintain the order, keep swapping the adjacent nodes of the linked list (whenever required) to get the desired output.
 */

function zigZag(head) {
  if (!head || !head.next) {
    return head;
  }

  let currentNode = head;
  let flag = true;

  while (currentNode.next) {
    // For the '<' condition
    if (flag) {
      if (currentNode.data > currentNode.next.data) {
        // Swap the node data
        let temp = currentNode.data;
        currentNode.data = currentNode.next.data;
        currentNode.next.data = temp;
      }
    } else {
      // For the '>' condition
      if (currentNode.data < currentNode.next.data) {
        // Swap the node data
        let temp = currentNode.data;
        currentNode.data = currentNode.next.data;
        currentNode.next.data = temp;
      }
    }

    // Move to the next node
    currentNode = currentNode.next;
    // Invert the flag for the next comparison
    flag = !flag;
  }

  return head;
}

// The function zigZag() takes the head of the linked list as input and reorders the list such that it follows the a < b > c < d > e pattern. It iterates through the linked list, swapping adjacent nodes when necessary to achieve the desired output. The flag variable alternates between true and false to switch between the '<' and '>' conditions as we traverse the list.

// The time complexity of this algorithm is O(N), where N is the length of the linked list, as it iterates through the list once. The space complexity is O(1), as it uses a constant amount of extra space for the temporary variables and reuses the existing nodes of the linked list.
