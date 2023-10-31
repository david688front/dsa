const isPalindrome = (head) => {
    const values = []
    let curr = head
    
    while(curr) {
        values.push(curr.val)
        curr = curr.next
    }

    let l = 0
    let r = values.length - 1

    while(l <= r){
        if(values[l] !== values[r]){
            return false
        }
        l++
        r--   
    }

    return true

};

module.exports = isPalindrome;