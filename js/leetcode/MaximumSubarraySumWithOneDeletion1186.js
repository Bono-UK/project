const nums1 = [-2,1,-3,4,-1,2,1,-5,4];

const MaximumSubarray53 = (nums) => {
  let minstack = [];
  let maxStack = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= nums[i++]) {
      minstack.push(nums[i])
      maxStack.push(nums[i++])
    }else {
      minstack.push(nums[i++])
      maxStack.push(nums[i])
    }
    if (nums.length === 0) {
    }
  }
  return maxStack
}

console.log(nums1,MaximumSubarray53(nums1, maxStack));
