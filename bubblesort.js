const bubbleSort = (nums) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            if(nums[j] < nums[j-1]){
                let temp = nums[j]
                nums[j] = nums[j - 1]
                nums[j-1] = temp
            }
        }
    }

    return nums
}

module.exports = bubbleSort;

console.log( bubbleSort([3,2,1]) )