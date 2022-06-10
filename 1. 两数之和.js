/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function(nums, target) {
      let numMap = new Map() 
    // 将，能和nums[i]相加等于target的值为key，以及自身的索引为value
    for (let i = 0; i < nums.length; i++) {
      // 获取 能和nums[i]相加等于target的值
        let find = target-nums[i]
        // 在map里寻找，是否有以nums[i]为key的
        // 如果有就输出[numMap.get[nums[i]],i]
        // 此时 numMap.get[nums[i]] 是nums[i]的正确索引 , i为find的正确索引
            if (numMap.has(nums[i])) return [numMap.get(nums[i]),i]
        // 如果没有保存 find , 以及nums[i] 的索引
            numMap.set(find,i)
    } 
};

let nums = [2,7,11,15], target = 9
console.log(twoSum(nums,target));
