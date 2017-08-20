var LinkedList = function () {
    this.head = null;
    this.tail = null;
}

var Node = function (value) {
  this.value = value;
  this.next = null;
  //this.previous = null; //for doubly-linked
}
  
LinkedList.prototype.add = function (value) {

  var currentNode = this.head;

  // Scenario 1: Empty List
  if (!currentNode) {
      this.head = new Node (value);
      this.tail = new Node (value);
      return;
  }

  // Scenario 2: Populated List
  while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
  }

  var newNode = new Node (value);
  currentNode.next = newNode;
  //newNode.previous = currentNode // for doubly linked list
  this.tail = newNode;
}

// for singly-linked
LinkedList.prototype.delete = function (value) {
    var currentNode = this.head;
    var removedNode;

    //Scenario 1: Empty List
    if (!currentNode) {
        throw new Error ('list is empty')
    }
    //Scenario 2: Remove at Head
    if (currentNode.value === value) {
        removedNode = this.head;
        this.head = this.head.next;
        return removedNode;
    }
    //Scenario 3: Remove any other node
    while (currentNode.next.value !== value) {
        currentNode = currentNode.next;
    } 
    if (currentNode.next.value === value) {
        removedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
        if (currentNode.next === null) {
        this.tail = currentNode;
        }
        return removedNode;
    } else {
        throw new Error ('')
    }
}
  
  module.exports = {
    LinkedList: LinkedList,
    Node: Node
  }