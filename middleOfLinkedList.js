
const middle = (head) => {
    let slow = head
    let fast = head

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}


class Node{
    constructor (val,next){
        this.val = val
        this.next = next
    }
}

module.exports = middle;