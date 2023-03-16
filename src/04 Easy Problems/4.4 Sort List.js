/**
 * Given a Linked list of size N, the list is in alternating ascending and descending orders.
 * Sort the given linked list in non-decreasing order.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// splitAlternating(head): This function takes the head of the linked list as an input and splits the original list into two separate linked lists: one with ascending elements (ascending) and another with descending elements (descending). It iterates through the input linked list and alternatively adds nodes to the ascending and descending lists. It returns an object containing the head nodes of both lists.

function splitAlternating(head) {
  let ascending = new Node(-1);
  let descending = new Node(-1);
  let ascTail = ascending;
  let descTail = descending;

  while (head) {
    ascTail.next = head;
    ascTail = head;
    head = head.next;
    if (head) {
      descTail.next = head;
      descTail = head;
      head = head.next;
    }
  }
  ascTail.next = null;
  descTail.next = null;

  return { ascending: ascending.next, descending: descending.next };
}

// reverseList(head): This function takes the head of a linked list as input and reverses the order of the list. It iterates through the list and modifies the next pointers of each node to point to the previous node. It returns the head node of the reversed list.

function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}

// mergeSortedLists(list1, list2): This function takes two sorted linked lists as input (list1 and list2) and merges them into a single sorted linked list in non-decreasing order. It iterates through both lists and compares the data of the nodes. It adds the smaller node to the result list and moves to the next node in the respective list. When one list is exhausted, it appends the remaining nodes of the other list to the result list. It returns the head node of the merged list.

function mergeSortedLists(list1, list2) {
  let dummy = new Node(-1);
  let tail = dummy;
  while (list1 && list2) {
    if (list1.data < list2.data) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  if (list1) {
    tail.next = list1;
  }
  if (list2) {
    tail.next = list2;
  }

  return dummy.next;
}

// sort(head): This is the main function that takes the head of the input linked list as an argument and sorts the list in non-decreasing order. It does so by performing the following steps:
// a. Calls splitAlternating(head) to split the input list into ascending and descending lists.
// b. Calls reverseList(descending) to reverse the order of the descending list.
// c. Calls mergeSortedLists(ascending, descending) to merge both lists into a single sorted list.
// d. Returns the head node of the sorted list.

function sort(head) {
  if (!head || !head.next) {
    return head;
  }

  let { ascending, descending } = splitAlternating(head);
  descending = reverseList(descending);
  let sortedList = mergeSortedLists(ascending, descending);

  return sortedList;
}

// The sort function consists of three main steps: splitting the linked list into two separate lists, reversing one of the lists, and merging the two lists. Let's analyze the time complexity of each step and the overall complexity of the function.

// Splitting the linked list (splitAlternating function): The function iterates through the linked list once, visiting each node. The time complexity of this step is O(N), where N is the number of nodes in the input linked list.

// Reversing the descending linked list (reverseList function): The function iterates through the descending linked list once. Since the descending linked list has approximately N/2 nodes (half the size of the original list), the time complexity of this step is O(N/2), which simplifies to O(N).

// Merging the two linked lists (mergeSortedLists function): The function iterates through both linked lists and compares the nodes' data. In the worst case, it visits all the nodes in both lists, resulting in a time complexity of O(N).

// Combining these three steps, the overall time complexity of the sort function is O(N) + O(N) + O(N) = O(3N), which simplifies to O(N). This means that the sort function has a linear time complexity, as it scales linearly with the size of the input linked list.

// As for space complexity, the sort function does not require any additional data structures besides a few variables to hold the new linked lists' head nodes and iterate through the lists. Therefore, the space complexity of the function is O(1), which means it uses a constant amount of extra space.
