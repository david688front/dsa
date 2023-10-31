
const selectionSort = (nums) => {
    for(let i = 0; i < nums.length; i++){
        let currMin = i
        
        for(let j = i +1; j < nums.length; j++){
            if(nums[j] < nums[currMin] ){
                currMin = j
            }
        }

        if(currMin !== i){
            let temp = nums[i]
            nums[i] = nums[currMin]
            nums[currMin] = temp
        }
    }

    return nums
}

module.exports = selectionSort;