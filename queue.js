/**
 * Queue is a LIFO data structure. Much like the real-world queues, the first
 * bird gets the first worm. Doubly linked lists is used to build a queue that
 * can enqueue and dequeue from both ends in a dynamic memory space. ( right now array; will use LL soon )
 */

class Queue {
  constructor(elements = []) {
    this.list = elements;
    console.log("Queue Data: ", this.list);
  }

  enqueue(ele) {
    this.list.push(ele);
    console.log("Adding to the last: ", this.list);
  }

  dequeue() {
    this.list.splice(0, 1);
    console.log("First one out: ", this.list);
  }
}

const queue = new Queue([1, 4, 2, 3, 7, 7, 6, 9]);

queue.dequeue();
queue.enqueue(181);
queue.dequeue();
queue.dequeue();
