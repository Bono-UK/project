const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; 
const searchNum = 15

//---------------binarySerch-------------------------
let countBinarySerch = 0

const binarySerch = (array, item) => {
  let start = 0
  let middle;
  let end = array.length
  let found = false
  let position = -1
  while (found === false && start <= end) {
    countBinarySerch+=1
    middle = Math.floor((start + end)/2);
    if (array[middle] === item) {
      found = true
      position = middle
      return middle
    }
    if (item < array[middle]) {
      end = middle - 1
    } else {
      start = middle + 1 
    }
  } 
  return position
}
console.log("-------------binarySerch--------------");
console.log("searchNum :",binarySerch(array,searchNum));
console.log("count :",countBinarySerch);



//----------------recursiveBinarySearch----------------
let countRecursiveBinarySearch = 0

const recursiveBinarySearch = (array, item, start, end) => {
  let middle = Math.floor((start + end)/2);
  countRecursiveBinarySearch+=1
  if (item === array[middle]) {
    return middle
  }
  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, 0, middle - 1,)
  } else {
    return recursiveBinarySearch(array,item, middle + 1, end)
  }
}

console.log("----------recursiveBinarySearch-------");
console.log("searchNum :",recursiveBinarySearch(array,searchNum, 0,array.length));
console.log("count :",countRecursiveBinarySearch);


