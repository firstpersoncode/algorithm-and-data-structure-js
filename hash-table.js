class HashTable {
  #__tableLimit = 4
  #__collection = []

  constructor(limit) {
    if (limit !== undefined && limit > 0) {
      this.#__tableLimit = limit
    }
  }

  #__hash(str) {
    let num = 0
    for (let i = 0; i < str.length; i++) {
      num += str.charCodeAt(i)
    }

    return num % this.#__tableLimit
  }

  add(key, value) {
    const index = this.#__hash(key)
    let table = this.#__collection[index]

    if (table === undefined) {
      table = [[key, value]]
    } else {
      let inserted = false
      for (let i = 0; i < table.length; i++) {
        if (table[i][0] === key) {
          table[i][1] = value
          inserted = true
        }
      }

      if (!inserted) {
        table.push([key, value])
      }
    }

    this.#__collection[index] = table
  }

  remove(key) {
    const index = this.#__hash(key)
    let table = this.#__collection[index]
    table = table.filter(item => item[0] !== key)
    this.#__collection[index] = table
  }

  find(key) {
    const index = this.#__hash(key)
    const result = this.#__collection[index].find(item => item[0] === key)

    return result && result.length && result[1]
  }

  val() {
    return this.#__collection
  }
}

const ht = new HashTable()
ht.add("country", "Indonesia")
ht.add("country2", "Singapore")
ht.add("animal", "Dog")
ht.add("animal2", "Cat")
ht.add("os", "Android")
ht.add("os2", "iOS")

ht.remove("country2")

console.log(ht.val())
console.log(ht.find("country2"))
console.log(ht.find("country"))
