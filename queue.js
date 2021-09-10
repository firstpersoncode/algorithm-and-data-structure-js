class Queue {
  #__collection = []

  enqueue(value) {
    this.#__collection.push(value)
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
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(queue.front())
console.log(queue.val())
queue.dequeue()
console.log(queue.front())
console.log(queue.val())
queue.dequeue()
console.log(queue.front())
console.log(queue.val())
