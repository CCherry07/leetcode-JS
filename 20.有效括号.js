var isValid = function(s){
  // 创建括号的隐私
  const mappings = new Map()
  mappings.set("(",")")
  mappings.set("[","]")
  mappings.set("{","}")
  // 创建栈
  const stack = []
   for (let i = 0; i < s.length; i++) {
    // 如果是左括号，那么对应的右括号直接入栈
    if (mappings.has(s[i])) {
      stack.push(mappings.get(s[i]))
    }else{
      // 如果是右括号，那么就要判断栈顶的元素是否是与此相等
      // 如果不相等，那么就是不匹配的
      if (stack.pop() !== s[i]) return false
    }
   }
   // 如果最后栈不为空，那么就是不匹配的
   if (stack.length !==0) return false
   return true
}
