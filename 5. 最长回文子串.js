/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  if (s.length <2) return s
  let start = 0
  let maxlen = 1
  function expandAroundCenter(l,r){
    // console.log(l,r)
    while(l>=0 && r<s.length && s[l]===s[r]){
     if (r-l+1>maxlen){
       maxlen = r-l+1
       start = l
     }
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

