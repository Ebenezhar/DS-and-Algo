class Node {
  constructor(e) {
    this.data = e;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.last = null;
    this.size = 0;
  }
  addAtEnd(e) {
    var node = new Node(e);
    var current;
    if (this.head == null) {
      this.head = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }
  addAtStart(e) {
    var node = new Node(e);
    var current;
    if (this.head == null) {
      this.head = node;
      this.last = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  insertBetween(i, data) {
    if (i > 0 && i < this.size - 1) {
      var node = new Node(data);
      var current = this.head;
      while (--i) {
        console.log(i);
        current = current.next;
      }
      console.log(node);
      node.next = current.next;
      console.log(node.next);
      current.next = node;
      console.log(current);
      this.size++;
    } else if (i === 0) {
      this.addAtStart(data);
    } else if (i === this.size - 1) {
      this.addAtEnd(data);
    } else {
      console.log("Invalid Position");
    }
  }

  deleteAtEnd() {
    if (this.head == this.last) {
      this.head = null;
      this.last = null;
    } else {
      var current = this.head;
      while (current.next.next != null) {
        current = current.next;
      }
      current.next = null;
      this.last = current;
    }
    this.size--;
  }

  deleteAtBegining() {
    if (this.head == this.last) {
      this.head = null;
      this.last = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
  }

  deleteBetween(i) {
    if (i > 0 && i < this.size - 1) {
      var current = this.head;
      while (--i) {
        current = current.next;
      }
      console.log(current);
      current.next = current.next.next;
      this.size--;
    } else if (i === 0) {
      this.deleteAtBegining();
    } else if (i === this.size - 1) {
      this.deleteAtEnd();
    } else {
      console.log("Invalid Position");
    }
  }

  printList() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + " ";
      current = current.next;
    }
    console.log(str);
  }
}

let ll = new LinkedList();
ll.addAtEnd(10);
ll.addAtEnd(20);
ll.addAtEnd(30);
ll.addAtEnd(40);
ll.printList();
ll.addAtStart(1);
ll.printList();
// ll.deleteAtEnd();
// ll.deleteAtBegining();
// ll.printList();
ll.insertBetween(3, 100);
ll.printList();
ll.deleteBetween(3);
ll.printList();
