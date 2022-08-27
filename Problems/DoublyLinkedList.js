class Node {
  constructor(e) {
    this.data = e;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.last = null;
    this.size = 0;
  }
  addAtEnd(e) {
    var node = new Node(e);
    if (this.head === null && this.last === null) {
      this.head = node;
      this.last = node;
    } else {
      this.last.next = node;
      node.prev = this.last;
      this.last = node;
    }
    this.size++;
  }

  addAtbegining(e) {
    var node = new Node(e);
    if (this.head === null && this.last === null) {
      this.head = node;
      this.last = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  insertBetween(i, data) {
    var node = new Node(data);
    var current = this.head;
    if (i > 0 && i < this.size - 1) {
      while (--i) {
        current = current.next;
      }
      node.next = current.next;
      current.next.prev = node;
      node.prev = current;
      current.next = node;
      this.size++;
    } else if (i == 0) {
      this.addAtbegining(data);
    } else if (i == this.size - 1) {
      this.addAtEnd(data);
    } else {
      console.log("Invalid index Position");
    }
  }

  deleteAtEnd() {
    if (this.head === this.last) {
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
    if (this.head === this.last) {
      this.head = null;
      this.last = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      console.log(this.head);
    }
    this.size--;
  }

  deleteBetween(i) {
    if (i > 0 && i < this.size - 1) {
      var current = this.head;
      while (--i) {
        current = current.next;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
      this.size--;
    } else if (i == 0) {
      this.deleteAtBegining();
    } else if (i == this.size - 1) {
      this.deleteAtEnd();
    }
  }

  printList() {
    var current = this.head;
    let str = "";
    while (current != null) {
      str += current.data + " ";
      current = current.next;
    }
    console.log(str);
  }

  printReverseList() {
    var current = this.last;
    let str = "";
    while (current != null) {
      str += current.data + " ";
      current = current.prev;
    }
    console.log(str);
  }
}

let dll = new DoublyLinkedList();
dll.addAtEnd(10);
dll.addAtEnd(20);
dll.addAtEnd(30);
dll.addAtEnd(40);
dll.addAtEnd(50);
dll.addAtEnd(60);
// dll.addAtbegining(1);
dll.printList();
dll.insertBetween(2, 500);
// dll.printList();
dll.deleteBetween(4);
dll.printList();
// dll.deleteAtEnd();
// dll.printList();
// dll.deleteAtBegining();
// dll.printList();
dll.printReverseList();
