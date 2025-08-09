function getSecondLargest(nums) {
    // Complete the function
    nums.sort((a, b) => a-b)
    let biggestNum = nums[nums.length - 1]
    while (nums[nums.length - 1] === biggestNum) {
        nums.pop()
    }
    return nums[nums.length - 1]
}
