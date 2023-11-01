
const sumOfTree = (root) => {

    if (root === null) return 0
    return root.val + sumOfTree(root.left) + sumOfTree(root.right)

}

module.exports = sumOfTree;