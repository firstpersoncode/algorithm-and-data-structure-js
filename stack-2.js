class Stack {
  #__count = 0
  #__collection = {}

  // add item to stack
  push(value) {
    this.#__collection[this.#__count] = value
    this.#__count += 1
  }

  // remove and return last item in stack
  pop() {
    if (!this.#__count) {
      return undefined
    }

    const tmp = this.#__collection[this.#__count - 1]
    delete this.#__collection[this.#__count - 1]
    this.#__count -= 1
    return tmp
  }

  // get stack size
  size() {
    return this.#__count
  }

  // get last item in stack
  last() {
    return this.#__collection[this.#__count - 1]
  }

  val() {
    return Object.values(this.#__collection)
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log("count", stack.size())
console.log("last", stack.last())
console.log(stack.val())
const popped = stack.pop()
console.log("popped", popped)
console.log("count", stack.size())
console.log("last", stack.last())
console.log(stack.val())
