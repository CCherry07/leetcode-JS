const swap = (arr,idx1,idx2)=>{
    const temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp 
}
function bubbleSort(arr){
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let flag = false
    //从左到右冒泡（小到大排序）
    //处理过的数，就不用再处理所以j每一次都递减1
    //即 len-i-1
    for (let j = 0; j < len-1-i; j++) {
      if (arr[j] > arr[j+1]) {
          swap(arr,j,j+1)
          flag = true
      } 
    } 
    if (!flag) return arr
  }
}

let arr = [12,34,55,78,98,90]

console.log(bubbleSort(arr));
