const sumOfTree = (root) => {
    const queue = [root]
    let sum = 0
    
    while(queue.length > 0){
        const current = queue.shift()
        sum += current.val

        if (current.left !== null) queue.push(current.left)
        if (current.right !== null) queue.push(current.right)
    }

    return sum

}

module.exports = sumOfTree;