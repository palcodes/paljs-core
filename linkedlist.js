// just thinking
{
  ["mach", 1];
}

/**
 * A Node in a LinkedList stores the data and the next pointer.
 * @constructor
 */
class LLNode {
  constructor(data, random = null) {
    this.data = data;
    this.next = null;
    this.random = random;
  }
}

/**
 * LinkedList: A data structure that allows you to store collections of
 * data in an endless memory space by connecting each element in the structure
 * to the next by using a pointer to the next' location.
 *
 * @class LinkedList
 * @typedef {Object} LLNode
 * @property {*} data - The value stored in the node.
 * @property {LLNode|null} next - The reference to the next node.
 * @property {LLNode|null} random - The random pointer reference to another node.
 *
 * @property {LLNode|null} head - The head node of the linked list.
 * @property {number} size - The size of the linked list.
 */
class LinkedList {
  constructor() {
    /** @type {LLNode|null} */
    this.head = null;
    /** @type {number} */
    this.size = 0;
  }

  append(data) {
    const newNode = new LLNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  prepend(data) {
    const newNode = new LLNode(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  delete(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }

  clone() {
    if (!this.head) return null;

    const nodeMap = new Map();
    let current = this.head;

    // Create a copy of each node and store in the Map
    while (current.next) {
      nodeMap.set(current, new LLNode(current.data));
      current = current.next;
    }

    // Assign `next` and `random` pointers for the copied nodes
    // The deep part.
    current = this.head;
    while (current) {
      const clonedNode = nodeMap.get(current);
      clonedNode.next = current.next ? nodeMap.get(current.next) : null;
      clonedNode.random = current.random ? nodeMap.get(current.random) : null;
      current = current.next;
    }

    return nodeMap.get(this.head);
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

// Setting random pointers
list.head.random = list.head.next.next; // Node 1 -> Node 3
list.head.next.random = list.head; // Node 2 -> Node 1

console.log("Original List:");
list.print();

const clonedList = new LinkedList();
clonedList.head = list.clone();

console.log("\nCloned List:");
clonedList.print();
