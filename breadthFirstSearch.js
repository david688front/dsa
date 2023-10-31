
// [1,2,3] -> [2,3]

const breadthFirstSearch = (root) => {
    const queue = [root]
    const result = []

    while (queue.length > 0){      
        const current = queue.shift()
        result.push(current.val)

        if(current.left !== null) queue.push(current.left)
        if(current.right !== null) queue.push(current.right)
    }
}

module.exports = breadthFirstSearch;