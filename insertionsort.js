
const insertionSort = (nums) => {
    for(let i = 1; i < nums.length; i++){
        while(nums[i - 1] > nums[i]){
            let temp = nums[i]
            nums[i] = nums[i - 1]
            nums[i - 1] = temp
            i -= 1
        }
    }
    return nums
}

module.exports = insertionSort;

console.log( insertionSort([3,2,1]) )