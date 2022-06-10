/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function(nums, target) {
      let numMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        let find = target-nums[i]
            if (numMap.has(nums[i])) {
              return [i,numMap.get(nums[i])]
            }else{
              numMap.set(find,i)
            }
    } 
    console.log(numMap);
};

let nums = [2,7,11,15], target = 9
console.log(twoSum(nums,target));
