/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  // 判断是否是回文串
  if (s.length <2) return s
  // 定义开始位置 和 结束位置
  let start = 0
  let maxlen = 1
  function expandAroundCenter(l,r){
    // console.log(l,r)
    // l 要大于等于0
    // r 要小于等于s.length-1 且大于等于l
    // 如果l和r相等，那么就是一个回文串
    while(l>=0 && r<s.length && s[l]===s[r]){
     if (r-l+1>maxlen){
       maxlen = r-l+1
       start = l
     }
     // 不管是否是回文串，都要向左右移动
      l--
      r++
    }
  }

  for (let i = 0; i < s.length; i++) {
    //奇数对的情况
    expandAroundCenter(i-1,i+1)
    // 偶数对的情况
    expandAroundCenter(i,i+1)
  }
  return s.substring(start,start+maxlen)
};

// testCase
let s = "babad"
console.log(longestPalindrome(s)) // bab
