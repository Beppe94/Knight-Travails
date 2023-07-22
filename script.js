//Initialize queue data structure
class Queue {
    constructor() {
      this.items = [];
    }
    //push in the que new ites
    enqueue(item) {
      this.items.push(item);
    }
    //remove first element from the que
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
    //check if que is empty or not
    isEmpty() {
      return this.items.length === 0;
    }
}
  
