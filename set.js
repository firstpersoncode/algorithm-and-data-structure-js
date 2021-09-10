class NSet {
  #__collection = [];

  // check item in set
  has(value) {
    return this.#__collection.indexOf(value) !== -1
  }

  // add item
  add(value) {
    if (!this.has(value)) {
      this.#__collection.push(value)
    }
  }

  // remove item
  remove(value) {
    if (this.has(value)) {
      this.#__collection = this.#__collection.filter(v => v !== value)
    }
  }

  // get size
  size() {
    return this.#__collection.length
  }

  // get union of 2 sets
  union(set) {
    const unionSet = new NSet()
    this.val().forEach((item) => {
      unionSet.add(item)
    })

    set.val().forEach((item) => {
      unionSet.add(item)
    })

    return unionSet
  }

  // get intersection of 2 sets
  intersection(set) {
    const intersectionSet = new NSet()
    this.val().forEach((item) => {
      if (set.has(item)) {
        intersectionSet.add(item)
      }
    })

    return intersectionSet
  }

  // get difference of 2 sets
  difference(set) {
    const differenceSet = new NSet()
    this.val().forEach((item) => {
      if (!set.has(item)) {
        differenceSet.add(item)
      }
    })

    set.val().forEach((item) => {
      if (!this.has(item)) {
        differenceSet.add(item)
      }
    })

    return differenceSet
  }

  subset(set) {
    return this.val().every((item) => {
      return set.has(item)
    })
  }

  val() {
    return this.#__collection
  }
}

const set1 = new NSet()
set1.add(1)
set1.add("Two")
set1.add("3")
set1.add(1)
console.log("set1", set1.val())
const set2 = new NSet()
set2.add(1)
set2.add("2")
set2.add("3")
set2.add(4)
console.log("set2", set2.val())
console.log("union set1 set2", set1.union(set2).val())
console.log("intersection set1 set2", set1.intersection(set2).val())
console.log("difference set1 set2", set1.difference(set2).val())
console.log("subset set1 set2", set1.subset(set2))
set1.remove("Two")
console.log("subset set1 set2", set1.subset(set2))
