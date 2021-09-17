const BinarySearchTree = require("./binary-search-tree")

class BTSTraversalAndHeight extends BinarySearchTree {
  #__minHeight(node) {
    if (node === undefined) {
      return -1
    }

    const left = this.#__minHeight(node.left)
    const right = this.#__minHeight(node.right)

    if (left < right) {
      return left + 1
    } else {
      return right + 1
    }
  }

  #__maxHeight(node) {
    if (node === undefined) {
      return -1
    }

    const left = this.#__maxHeight(node.left)
    const right = this.#__maxHeight(node.right)

    if (left > right) {
      return left + 1
    } else {
      return right + 1
    }
  }

  isHeightBalanced() {
    const root = this.val()
    return this.#__minHeight(root) >= this.#__maxHeight(root) - 1
  }

  inOrder() {
    const root = this.val()
    const result = []

    function traverseInOrder(node) {
      Boolean(node.left) && traverseInOrder(node.left)
      result.push(node.value)
      Boolean(node.right) && traverseInOrder(node.right)
    }

    Boolean(root) && traverseInOrder(root)
    return result
  }

  preOrder() {
    const root = this.val()
    const result = []

    function traversePreOrder(node) {
      result.push(node.value)
      Boolean(node.left) && traversePreOrder(node.left)
      Boolean(node.right) && traversePreOrder(node.right)
    }

    Boolean(root) && traversePreOrder(root)
    return result
  }

  postOrder() {
    const root = this.val()
    const result = []

    function traversePostOrder(node) {
      Boolean(node.left) && traversePostOrder(node.left)
      Boolean(node.right) && traversePostOrder(node.right)
      result.push(node.value)
    }

    Boolean(root) && traversePostOrder(root)
    return result
  }

  levelOrder() {
      const root = this.val()
      const result = []
      const queue = []

      if (root !== undefined) {
        queue.push(root)

        while (queue.length > 0) {
          const node = queue.shift()
          result.push(node.value)

          if (node.left !== undefined) {
            queue.push(node.left)
          }

          if (node.right !== undefined) {
            queue.push(node.right)
          }
        }
      }

      return result
  }
}

console.log("===================================== Binary Search Tree with Traversal and Height =====================================")
const bts = new BTSTraversalAndHeight()
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
console.log(bts.isHeightBalanced())
console.log("inOrder", bts.inOrder())
console.log("preOrder", bts.preOrder())
console.log("postOrder", bts.postOrder())
console.log("levelOrder", bts.levelOrder())
