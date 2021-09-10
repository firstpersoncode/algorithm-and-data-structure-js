class Queue {
  #__collection = []

  enqueue(value, priority = 0) {
    const newItem = { value, priority }

    if (!this.size()) {
      this.#__collection.push(newItem)
      return
    }

    let added = false

    for (let i = 0; i < this.size(); i++) {
      const collection = this.val()
      const item = collection[i]
      if (priority < item.priority) {
        this.#__collection.splice(i, 0, newItem)
        added = true
        break;
      }
    }

    if (!added) {
      this.#__collection.push(newItem)
    }
  }

  dequeue() {
    this.#__collection.shift()
  }

  front() {
    return this.#__collection[0]
  }

  val() {
    return this.#__collection
  }

  size() {
    return this.#__collection.length
  }
}

const queue = new Queue()
queue.enqueue(1, 5)
queue.enqueue(2)
queue.enqueue(3, 1)
queue.enqueue(4, 6)
queue.enqueue(5, 2)
queue.enqueue(6, 2)
queue.enqueue(7, 3)
console.log(queue.val())
queue.dequeue()
console.log(queue.val())
