//1. Given an array. Write a recursive function that returns the sum of it. (Hint: arr.pop())

let sum = function(arr) {
    if (arr.length === 1) {
      return arr[0]
    }
    else {
      return arr.pop() + sum(arr)
    }
  }
  
  console.log(sum([1,2,3,4,5,6]))

  
// 2. Given a number.Write a recursive function that reverse the number.Return the new
// number.
function reverseNum(n) {
  let num
  let reversed = ''
  let result
  const recurse = (n) => {
      for (let i = 0; i < n; i++) {
          num = n % 10
          reversed += num
          result = parseInt(n / 10)
          recurse(result)
          if (result === 0) {
              break
          }
      }
      return reversed
  };
  return recurse(n)
}

  // 3. Given a string, compute recursively(no loops) a new string where all appearances of & quot; pi & quot;
// have been replaced by & quot; 3.14 & quot;.

function replaceStr(str, item, rItem) {
  let result = ''
  len = str.length
  const newStr = str.split(item).join(rItem)
  if (str.length) {
      result = newStr.split(len - 1).join()
      return result
  }

  return replaceStr(str, item, rItem)
}

// 5. Given an array of nested arrays.Write a recursive function that flattens it. (Hint create
// function that concats arrays).


function recConcat(arr, result = []) {
  let merged = arr.flat(Infinity)
  result.concat(merged)
  if (result.length) {
      result.pop()
      return recConcat(arr, result)
  }
  return merged
}


