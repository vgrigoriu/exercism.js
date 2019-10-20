//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(payload) {
    this.payload = payload
  }
}

export class LinkedList {
  push(what) {
    let node = new Node(what)
    node.next = this.first
    this.first = node
  }

  pop() {
    let node = this.first
    this.first = this.first.next
    return node.payload
  }

  shift() {
    throw new Error("Remove this statement and implement this function");
  }

  unshift() {
    throw new Error("Remove this statement and implement this function");
  }

  delete() {
    throw new Error("Remove this statement and implement this function");
  }

  count() {
    throw new Error("Remove this statement and implement this function");
  }
}
