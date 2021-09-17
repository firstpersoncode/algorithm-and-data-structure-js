class Node {
  value;
  left;
  right;

  constructor(value) {
    this.value = value
  }
}

class BinarySearchTree {
  #__root;

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

  #__addNode(value, node) {
    if (node === undefined) {
      return new Node(value)
    }

    if (value < node.value) {
      if (node.left === undefined) {
        node.left = new Node(value)
      } else {
        this.#__addNode(value, node.left)
      }
    } else if (value > node.value) {
      if (node.right === undefined) {
        node.right = new Node(value)
      } else {
        this.#__addNode(value, node.right)
      }
    }

    return node
  }

  #__removeNode(value, node) {
    if (node === undefined) {
      return undefined
    }

    if (value < node.value) {
      node.left = this.#__removeNode(value, node.left)
    } else if (value > node.value) {
      node.right = this.#__removeNode(value, node.right)
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
        node.right = this.#__removeNode(tmp.value, node.right)
      }
    }

    return node
  }

  find(value) {
    return this.#__search(value, this.#__root)
  }

  add(value) {
    this.#__root = this.#__addNode(value, this.#__root)
  }

  remove(value) {
    this.#__root = this.#__removeNode(value, this.#__root)
  }

  min() {
    let min = this.#__root

    if (min !== undefined) {
      while (min.left !== undefined) {
        min = min.left
      }
    }

    return min
  }

  max() {
    let max = this.#__root

    if (max !== undefined) {
      while (max.right !== undefined) {
        max = max.right
      }
    }

    return max
  }

  val() {
    return this.#__root
  }
}

console.log("===================================== Binary Search Tree =====================================")
const bts = new BinarySearchTree()
bts.add(9)
bts.add(17)
bts.add(4)
bts.add(22)
bts.add(3)
bts.add(6)
bts.add(10)
bts.add(20)
bts.add(5)
bts.add(7)
console.log(bts.val())
console.log("Max", bts.max())
console.log("Min", bts.min())
console.log("Find 17", bts.find(17))
bts.remove(17)
console.log("Find 17 after removed 17 ", bts.find(17))
bts.remove(3)
console.log("Min after remove 3", bts.min())

module.exports = BinarySearchTree
