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
    if (this.last === undefined) {
      this.first = undefined
    }
    this._count--
    return node.payload
  }

  shift() {
    let node = this.first
    this.first = this.first.next
    if (this.first === undefined) {
      this.last = undefined
    }
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

  delete(n) {
    for (let node = this.first; node !== undefined; node = node.next) {
      if (node.payload === n) {
        if (node.prev !== undefined) {
          node.prev.next = node.next
        } else {
          this.first = node.next
        }
        if (node.next !== undefined) {
          node.next.prev = node.prev
        } else {
          this.last = node.prev
        }
        this._count--
      }
    }
  }

  count() {
    return this._count
  }
}
