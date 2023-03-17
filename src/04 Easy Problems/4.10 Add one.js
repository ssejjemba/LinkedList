/**
 * A number N is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.
 */

function reverseLinkedList(head) {
  let prevNode = null;
  let currentNode = head;

  while (currentNode) {
    let nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;
}

function addOne(head) {
  head = reverseLinkedList(head);

  let currentNode = head;
  let carry = 1;

  while (currentNode) {
    let sum = currentNode.data + carry;
    currentNode.data = sum % 10;
    carry = Math.floor(sum / 10);

    if (!currentNode.next && carry) {
      currentNode.next = new Node(carry);
      carry = 0;
    }

    currentNode = currentNode.next;
  }

  return reverseLinkedList(head);
}

// Given a linked list where each digit corresponds to a node in the linked list, we need to add 1 to the number it represents.

// 1. First, we reverse the linked list. This is done so that we can start adding 1 from the least significant digit (the rightmost digit) and move towards the most significant digit (the leftmost digit). Reversing the linked list makes it easier to handle any carry that might occur while adding 1.

// 2. We initialize a carry variable to 1 since we need to add 1 to the number.

// 3. Now, we iterate through the reversed linked list (starting from the least significant digit) and add the value of the carry variable to the current digit. We update the current digit with the remainder of the sum divided by 10 and update the carry variable to be the integer part of the sum divided by 10.

// 4. If we reach the end of the list and there's still a carry, we need to create a new node for the carry and add it to the list. This handles cases where adding 1 to the number results in an additional digit (e.g., 999 + 1 = 1000).

// 5. After iterating through the reversed linked list and adding 1, we reverse the linked list again to restore the original order of the digits. This gives us the final result.

// The addOne function follows these steps to add 1 to the number represented by the linked list. The function has a time complexity of O(N), where N is the number of nodes in the linked list, as it iterates through the list twice (once for each reversal). The space complexity is O(1) since it uses a constant amount of extra space for the currentNode and carry variables.
