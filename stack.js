class Stack {
  #__value = ""
  #__collection = []

  constructor(value) {
    this.#__value = value
    for (let i = 0; i < value.length; i++) {
      this.#__collection.push(value[i])
    }
  }

  reverse() {
    const rcollection = []

    for (let i = 0; i < this.#__value.length; i++) {
      rcollection.push(this.#__collection.pop())
    }

    this.#__collection = rcollection
  }

  val() {
    return this.#__collection
  }
}

const stack = new Stack("I am string")
console.log(stack.val())
stack.reverse()
console.log(stack.val())
