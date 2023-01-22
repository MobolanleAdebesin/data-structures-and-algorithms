function mergeSort(array){
    function decompose(array){
      if(array.length <= 1) {
        return array
      }
      let length = array.length 
      if(length <= 1) return array; 
      let mid = Math.floor(length / 2)
      let left = array.slice(0, mid); 
      let right = array.slice(mid, length)
      let result = []; 
      left = decompose(left)
      right = decompose(right)
      while(left.length && right.length){
        if(left[0] < right[0]){
          result.push(left.splice(0,1)[0]);
        }else if (right[0] < left[0]){
          result.push(right.splice(0,1)[0]);
        }
      }
      if(!left.length){
        result = result.concat(right); 
      }
      if(!right.length){
       result = result.concat(left); 
      }
     
      return result 
  }
  return decompose(array)
}

  let array = [44, 12, 6, 87]

console.log(mergeSort(array))