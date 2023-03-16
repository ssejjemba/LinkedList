/**
 * Given two Singly Linked List of N and M nodes respectively. The task is to check whether two linked lists are identical or not.
 * Two Linked Lists are identical when they have same data and with same arrangement too.
 */

function areIdentical(head1, head2) {
  let current1 = head1;
  let current2 = head2;
  while (current1 && current2) {
    if (current1.data !== current2.data) {
      return false;
    }
    current1 = current1.next;
    current2 = current2.next;
  }
  return !current1 && !current2;
}

// n this function, we initialize two variables current1 and current2 to the head nodes of the two input linked lists. We then use a while loop to traverse both linked lists at the same time. At each step of the loop, we compare the data of the nodes pointed to by current1 and current2. If the data is not equal, we return false, since the two linked lists are not identical. Otherwise, we move both current1 and current2 to their respective next nodes.

// Once the while loop is done, we check if either current1 or current2 is not null. If either one is not null, then the two linked lists have different lengths and are not identical, so we return false. Otherwise, we return true, since we have successfully traversed both linked lists and all their nodes had equal data.

// Note that this implementation has a time complexity of O(min(N, M)), where N and M are the lengths of the two input linked lists. This is because we stop traversing both linked lists as soon as we reach the end of the shorter list. The space complexity is O(1), since we only use a constant amount of extra space to store the current1 and current2 variables.
