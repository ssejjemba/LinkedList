/**
 * Linked lists introduction: These are explanations of the simple introductions
 * to what Linked Lists are and where and when to use them when planning your
 * data structures.
 */

/* -------------------------------------------------------------------------- */
/*                        What are Linked Linked lists                        */
/* -------------------------------------------------------------------------- */

// A Linked List is a Linear Data Structure which means that there is a continous contigence relationship between
// the members of the datastructure. A Linked List doesn't use memory allocation to enforce contigence unlike an array.
// The members of a linked list can be stored in random spaces in memory but relies on neighbour pointers to enforce contigence
// of members. The List has two special pointers (Head, Tail), which reference the begining and end of the list respectively.
// This then means the access is Linear from a Head node to the Tail Node. And the basic type of Linked List is one without any
// members. We'd represent this by the Head and Tail nodes all pointing at null. In this state the list is considered empty.

/* -------------------------------------------------------------------------- */
/*                              Why Linked Lists                              */
/* -------------------------------------------------------------------------- */

// While some operations that can be performed with linked lists can also be performed with arrays, linked lists have several advantages over arrays that make them a better choice in certain situations:

// * Dynamic size: Unlike arrays, linked lists do not have a fixed size. This means that you can add or remove elements from a linked list without having to resize the data structure.

// * Efficient insertion and deletion: Adding or removing an element from the middle of an array requires shifting all the elements after it, which can be an expensive operation. In contrast, adding or removing an element from the middle of a linked list only requires updating a few references, which is a much faster operation.

// * Ease of use: Linked lists are easier to use than arrays in situations where you need to insert or remove elements frequently. With arrays, you need to keep track of the size of the array and manually shift elements around. With linked lists, you can simply update the references to the nodes.

// * Reduced memory usage: In some cases, linked lists can use less memory than arrays. For example, if you have a large data set with many empty elements, an array will still allocate memory for all those empty elements, while a linked list only allocates memory for the elements that contain data.

// In summary, while arrays have their own advantages, linked lists are a better choice when you need to frequently add or remove elements from a data structure or when you don't know the size of the data set in advance.

/* -------------------------------------------------------------------------- */
/*                           Linked List Limitations                          */
/* -------------------------------------------------------------------------- */

// While linked lists offer several advantages over other data structures, they also have some limitations that you should be aware of:

// Random access: Unlike arrays, linked lists do not provide constant time random access to elements. To access an element in a linked list, you have to start at the beginning of the list and traverse the nodes until you find the element you're looking for. This makes linked lists less efficient than arrays for certain operations, such as searching for a specific element.

// Extra memory usage: Linked lists require extra memory to store the pointers or references to the next node. This overhead can be significant for large data sets.

// More complex code: Linked lists can be more difficult to implement and maintain than arrays. The code to manipulate linked lists can be more complex, and it can be harder to debug linked list code due to the pointers and references involved.

// Sequential access: Linked lists are designed for sequential access to data. If you need to access elements randomly or in a specific order, linked lists may not be the best choice.

// Fragile: Linked lists are more fragile than arrays. If a pointer or reference in a linked list becomes corrupted, the list may become unusable, and data may be lost.

// In summary, while linked lists have many advantages, they also have some limitations, such as the lack of random access and extra memory usage. You should consider these limitations when choosing a data structure for your application.

/* -------------------------------------------------------------------------- */
/*                           Linked List Checkpoints                          */
/* -------------------------------------------------------------------------- */

// When choosing to use a linked list data structure, you should consider the following checkpoints:

// Data Size and Complexity: Linked lists are best suited for storing large or complex data sets that require frequent insertions and deletions.

// Memory Constraints: If memory usage is a concern, linked lists may not be the best choice as they require additional memory for the pointers or references.

// Access Patterns: Linked lists are designed for sequential access to data. If random access is required, arrays or hash tables may be a better choice.

// Search Requirements: If searching or sorting of the data is required, binary search trees or arrays may be a better choice.

// Performance: The performance of linked lists can be affected by the type of operations performed on them. For example, the time complexity of searching or sorting a linked list is typically worse than that of an array or a binary search tree.

// Considering these checkpoints, a music playlist data structure could be a good use case for a linked list. Playlists are typically large, complex data sets that require frequent insertions and deletions. Sequential access to songs in the playlist is also important, making linked lists a good choice. However, if the playlist requires sorting or searching, binary search trees or arrays may be a better choice. Additionally, if memory usage is a concern, linked lists may not be the best choice as they require additional memory for the pointers or references.

/* -------------------------------------------------------------------------- */
/*                            Types of Linked Lists                           */
/* -------------------------------------------------------------------------- */

// There are several types of linked lists, each with their own characteristics and use cases:

// -> Singly Linked List: In a singly linked list, each node contains a reference to the next node, but not to the previous node. This type of linked list is the most common and is often used in applications such as music or video playlists, where each node represents a song or video, and the user can navigate through the playlist sequentially.

// -> Doubly Linked List: In a doubly linked list, each node contains references to both the next node and the previous node. This type of linked list is often used in applications such as text editors, where each node represents a character in the document, and the user can navigate forwards and backwards through the document.

// -> Circular Linked List: In a circular linked list, the last node in the list contains a reference to the first node, creating a circular structure. This type of linked list is often used in applications such as scheduling algorithms, where a list of tasks is continuously cycled through.

// -> Doubly Circular Linked List: In a doubly circular linked list, each node contains references to both the next node and the previous node, and the last node in the list contains a reference to the first node, creating a circular structure. This type of linked list is often used in applications such as data caching algorithms, where data is stored in a circular buffer for quick access.

// -> A Header Linked List is a type of linked list that includes an additional header node at the beginning of the list. The header node is typically used to store metadata about the linked list, such as the length or other useful information.
// The header node has no data value, and its next property points to the first node in the linked list. By including a header node, the linked list is easier to work with, as the metadata can be accessed quickly and efficiently without having to traverse the list.
// A practical application of a Header Linked List is in the implementation of a file system directory. The header node can be used to store information about the directory, such as its name, size, and creation date. The nodes that follow can be used to represent files and subdirectories within the directory. This allows the directory to be easily traversed and its contents accessed without having to search through the entire file system.
