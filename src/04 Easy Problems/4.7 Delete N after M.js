/**
 * Given a linked list, delete N nodes after skipping M nodes of a linked list until the last of the linked list.
 */

function linkdelete(head, M, N) {
  let currentNode = head;

  while (currentNode) {
    let skipCount = M - 1;
    let deleteCount = N;

    // Find the last node to be skipped
    while (skipCount > 0 && currentNode) {
      currentNode = currentNode.next;
      skipCount--;
    }

    // If we reach the end of the list after skipping M nodes, break the loop
    if (!currentNode) {
      break;
    }

    // Store the last skipped node
    let lastSkippedNode = currentNode;

    // Move to the first node to be deleted
    currentNode = currentNode.next;

    // Delete N nodes
    while (deleteCount > 0 && currentNode) {
      let nodeToDelete = currentNode;
      currentNode = currentNode.next;
      nodeToDelete.next = null;
      deleteCount--;
    }

    // Update the last skipped node's next pointer to skip the deleted nodes
    lastSkippedNode.next = currentNode;
  }

  return head;
}

// This implementation starts the pointer at the head and moves it by M - 1 nodes (since we count the head as the first node). Then, it deletes the N nodes that come after the Mth node. The time complexity is O(N), and the space complexity is O(1).

// Imagine you have a line of toy blocks. Each block has a number on it, and the blocks are connected with strings. You are asked to remove some of these blocks, following these rules:

// You can skip a certain number of blocks (M blocks) before starting to remove any.
// After skipping M blocks, you can remove the next few blocks (N blocks).
// Here's how the code works step by step:

// 1. Start at the first block in the line (the head of the linked list).
// 2. Move M - 1 blocks ahead in the line (skip M - 1 blocks).
// 3. If you reach the end of the line while skipping, stop the process.
// 4. Remember the last block you skipped. You'll need to connect it to another block later.
// 5. Move to the next block. This is the first block you'll remove.
// 6. Remove the next N blocks:
//  a. For each block to be removed, detach it from the line and move to the next one.
// 7. Connect the last skipped block to the block after the removed ones.
// 8. Repeat steps 2-7 until you reach the end of the line.

// The code follows these steps to modify the linked list as required. It has a time complexity of O(N), where N is the number of blocks (or nodes) in the line (or linked list). It has a space complexity of O(1) because it doesn't need extra space for new blocks, just a few variables to keep track of the current position and connections.
