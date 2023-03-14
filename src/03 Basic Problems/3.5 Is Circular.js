/**
 * Given head, the head of a singly linked list, find if the linked list is circular or not.
 * A linked list is called circular if it not NULL terminated and all nodes are connected in the form of a cycle.
 * An empty linked list is considered as circular.
 * Note: The linked list does not contains any inner loop.
 */

// To determine whether a given singly linked list is circular or not, we can use the "Floyd's cycle-finding algorithm" (also known as the "tortoise and hare algorithm"). This algorithm works by using two pointers, one moving at a slower pace than the other. If the linked list is circular, then at some point the faster pointer will catch up to the slower pointer, and they will be equal. If the linked list is not circular, then the faster pointer will eventually reach the end of the list.

// This function takes the head node of the singly linked list as an argument. It first checks if the head node is null, in which case it returns true (an empty linked list is considered circular). It then initializes two variables: slow and fast. The slow variable is used to keep track of the slower-moving pointer, while the fast variable is used to keep track of the faster-moving pointer.

// The function then enters a while loop, which continues as long as the fast variable is not null and the fast.next variable is not null. Inside the loop, the function checks if the slow and fast pointers are equal. If they are, then we have detected a cycle in the linked list, and the function returns true. Otherwise, the function updates the slow pointer to be the next node in the list, and the fast pointer to be the node two positions ahead in the list.

// After the loop, if the function has not detected a cycle in the linked list, it returns false.

// The time complexity of the isCircular() function is O(n), where n is the number of nodes in the linked list. This is because in the worst case, the function will traverse the entire linked list once with both the slow and fast pointers before determining whether the linked list is circular or not.

// The space complexity of the function is O(1), as it uses a constant amount of additional space regardless of the size of the input linked list. Specifically, the function only uses three variables (slow, fast, and head) to keep track of the current nodes being visited in the list, as well as a constant number of primitive data type variables (e.g., null, true, false). It does not create any new data structures or arrays that grow in size with the input.

function isCircular(head) {
  if (!head) {
    return true;
  }
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}
