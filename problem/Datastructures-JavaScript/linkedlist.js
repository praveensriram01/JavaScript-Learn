class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            this.next = this.head
            this.head = node
        }
        this.size++
    }

    print() {
        if(this.isEmpty()) {
            console.log("List is Empty")
        } else {
            let curr = this.head
            let listvalues = ''
            while(curr) {
                listvalues += `${curr.value}`
                curr = curr.next
            }
            console.log(listvalues)
        }
    }
}

const list = new LinkedList()
console.log(list.isEmpty())
console.log(list.getSize())
list.print()
list.prepend(10)
list.prepend(20)
list.prepend(20)
console.log(list.isEmpty())
console.log(list.getSize())
list.print()


