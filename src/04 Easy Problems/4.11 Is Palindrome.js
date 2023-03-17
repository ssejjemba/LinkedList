/**
 * Given a linked list of strings having n nodes check to see whether the combined string formed is palindrome or not.
 */

function isPalindrome(head) {
  // Concatenate the strings in the linked list
  let combinedString = "";
  let currentNode = head;
  while (currentNode) {
    combinedString += currentNode.data;
    currentNode = currentNode.next;
  }

  // Check if the combined string is a palindrome
  let start = 0;
  let end = combinedString.length - 1;

  while (start < end) {
    if (combinedString[start] !== combinedString[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

// The isPalindrome function takes the head of the input linked list as an argument, concatenates the strings in the list to form a combined string, and checks if the combined string is a palindrome. The function returns true if the combined string is a palindrome, and false otherwise.

// The time complexity of this function is O(N), where N is the number of characters in the combined string, as it iterates through the list once to concatenate the strings and then iterates through the concatenated string to check if it's a palindrome. The space complexity is O(N) due to the additional storage required for the combined string.
