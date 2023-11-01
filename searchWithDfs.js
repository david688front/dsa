
const searchWithDfs = (root, target) => {
    const stack = [root]
    
    while(stack.length > 0){
        const current = stack.pop()
        if (current.val === target) return true
        if (current.right !== null) stack.push(current.right) 
        if (current.left !== null) stack.push(current.left)
    }

    return false
}

module.exports = searchWithDfs;