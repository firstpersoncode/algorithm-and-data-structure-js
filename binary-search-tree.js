class Node {
  value;
  left;
  right;

  constructor(value) {
    this.value = value
  }
}

class BinarySearchTree {
  #__node;

  #__search(value, node) {
    if (node !== undefined) {
      if (value < node.value) {
        node = this.#__search(value, node.left)
      } else if (value > node.value) {
        node = this.#__search(value, node.right)
      }
    }

    return node
  }

  #__generate(value, node) {
    if (node === undefined) {
      return new Node(value)
    }

    if (value < node.value) {
      if (node.left === undefined) {
        node.left = new Node(value)
      } else {
        this.#__generate(value, node.left)
      }
    } else if (value > node.value) {
      if (node.right === undefined) {
        node.right = new Node(value)
      } else {
        this.#__generate(value, node.right)
      }
    }

    return node
  }

  #__replace(value, node) {
    if (node === undefined) {
      return undefined
    }

    if (value < node.value) {
      node.left = this.#__replace(value, node.left)
    } else if (value > node.value) {
      node.right = this.#__replace(value, node.right)
    } else {
      if (node.left === undefined && node.right === undefined) {
        node = undefined
      } else if (node.left === undefined && node.right !== undefined) {
        node = node.right
      } else if (node.right === undefined && node.left !== undefined) {
        node = node.left
      } else {
        let tmp = node.right
        while (tmp.left !== undefined) {
          tmp = tmp.left
        }

        node.value = tmp.value
        node.right = this.#__replace(tmp.value, node.right)
      }
    }

    return node
  }

  find(value) {
    return this.#__search(value, this.#__node)
  }

  add(value) {
    this.#__node = this.#__generate(value, this.#__node)
  }

  remove(value) {
    this.#__node = this.#__replace(value, this.#__node)
  }

  min() {
    let min = this.#__node

    if (min !== undefined) {
      while (min.left !== undefined) {
        min = min.left
      }
    }

    return min
  }

  max() {
    let max = this.#__node

    if (max !== undefined) {
      while (max.right !== undefined) {
        max = max.right
      }
    }

    return max
  }

  val() {
    return this.#__node
  }
}

const bts = new BinarySearchTree()
bts.add(50)
bts.add(17)
bts.add(18)
bts.add(3)
bts.add(72)
bts.add(12)
console.log("Max", bts.max())
console.log("Min", bts.min())
console.log(bts.val())
console.log("Find 17", bts.find(17))
bts.remove(17)
console.log(bts.val())
console.log("Find 17 after removed", bts.find(17))
bts.remove(3)
console.log("Min", bts.min())
bts.add(11)
bts.add(32)
console.log("Min", bts.min())
console.log(bts.val())
