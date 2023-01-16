class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail - null
        this.length = 0
    }

    push(val) {
        let node = new Node(val)
        this.length === 0 ? this.head = node : this.tail.next = node
        this.tail = node
        this.length++
        return this;
    }
    pop() {
        let last = this.tail || undefined
        if (this.length <= 1) {
            this.head = null
            this.tail = null
            this.length = 0
        } else {
            let removeLast = (node) => {
                if (node === null) return this
                if (node.next === this.tail) {
                    node.next = null
                    this.tail = node
                    this.length--
                }
                return removeLast(node.next)
            }
            removeLast(this.head)

        }
        return last
    }

    shift() {
        if (!this.length) return undefined
        let oldHead = this.head
        this.head = oldHead.next;
        this.length--
        if (!this.length) {
            this.tail = null
        }
        return oldHead
    }
    unshift(val) {
        let newNode = new Node(val)
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;

        }
        this.length++
        return this
    }
    get(position) {
        // traverse the list position number of times 
        let currentNode = this.head.val
        if (position < 0 || position > this.length - 1) return null;
        for (let i = 0; i <= position; i++) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    set(position, val) {
        let node = this.get(position)
        if (!node) return false
        node.val = val
        return true

    }
    insert(position, val) {
        let newNode = new Node(val)
        if (position < 0 || position > this.length) return false
        if (position === this.length) {
            this.push(val)
        } else if (position === 0) {
            this.unshift(val)
        } else {
            let priorNode = get(position - 1)
            newNode.next = priorNode.next
            priorNode.next = newNode
            this.length++
        }
        return true
    }
    remove(position) {
        if (position < 0 || position >= this.length) return undefined
        if (position === this.length - 1) return this.pop()
        if (position === 0) return this.shift()

        let prevNode = this.get(position - 1);
        let nodeToRemove = prevNode.next
        prevNode.next = nodeToRemove.next
        this.length--
        return nodeToRemove
    }
    reverse() {
        let prev = null
        let curNode = this.head
        let next = curNode.next
        curNode.next = prev
        this.tail = curNode;
        while (next !== null) {
            prev = curNode;
            curNode = next
            next = curNode.next
            curNode.next = prev
        }
        this.head = curNode
        return list
    }
    coltReverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print() {
        var arr = [];
        var current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}


var list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
console.log(list.shift())
console.log(list)
// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

// console.log(first)