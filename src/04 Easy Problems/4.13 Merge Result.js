/**
 * Given two linked lists of size N and M, which are sorted in non-decreasing order.
 * The task is to merge them in such a way that the resulting list is in decreasing order.
 */

function mergeResult(node1, node2) {
  // Check if node1 and node2 are defined
  if (!node1) return node2;
  if (!node2) return node1;

  // Initialize an empty pointer to the merged list
  let mergedList = null;

  // Initialize pointer1 and pointer2 to point at the heads of the lists
  let pointer1 = node1;
  let pointer2 = node2;

  // Compare the pointers while creating a merged list
  while (pointer1 && pointer2) {
    let node;

    if (pointer1.data <= pointer2.data) {
      node = pointer1;
      pointer1 = pointer1.next;
    } else {
      node = pointer2;
      pointer2 = pointer2.next;
    }

    // Add the node with the smaller data value to the top of the merged list
    node.next = mergedList;
    mergedList = node;
  }

  // Add the rest of the items from the defined pointer to the merged list
  while (pointer1) {
    let node = pointer1;
    pointer1 = pointer1.next;
    node.next = mergedList;
    mergedList = node;
  }

  while (pointer2) {
    let node = pointer2;
    pointer2 = pointer2.next;
    node.next = mergedList;
    mergedList = node;
  }

  // Return the head of the merged list
  return mergedList;
}

// The time complexity of this function is O(N+M), where N and M are the lengths of the two input linked lists, as it iterates through both lists once. The space complexity is O(1), as it uses a constant amount of extra space for the mergedList and temporary variables and reuses the nodes from the input lists.
