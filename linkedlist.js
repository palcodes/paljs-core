// just thinking
{
  ["mach", 1];
}

/**
 * A Node in a LinkedList stores the data and the next pointer.
 */
class LLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * LinkedList: A data structure that allows you to store collections of
 * data in an endless memory space by connecting each element in the structure
 * to the next by using a pointer to the next' location.
 *
 * @property head
 * @property size
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new LLNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      const current = this.head;
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
list.prepend(0);
list.prepend(513);
list.delete(1);
list.print(); // 0, 1, 2
