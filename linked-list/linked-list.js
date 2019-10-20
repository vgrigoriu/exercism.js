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
  constructor() {
    this._count = 0
  }

  push(what) {
    let node = new Node(what)
    if (this.last === undefined) {
      // the list was empty
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      node.prev = this.last
      this.last = node
    }
    this._count++
  }

  pop() {
    let node = this.last
    this.last = this.last.prev
    this._count--
    return node.payload
  }

  shift() {
    let node = this.first
    this.first = this.first.next
    this._count--
    return node.payload
  }

  unshift(payload) {
    let node = new Node(payload)
    node.next = this.first
    if (this.last === undefined) {
      this.last = node
    } else {
      this.first.prev = node
    }
    this.first = node
    this._count++
  }

  delete() {
    throw new Error("Remove this statement and implement this function");
  }

  count() {
    return this._count
  }
}
