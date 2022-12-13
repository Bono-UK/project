let array = [];
const searchNum = 15 ;
const generationRandom = () => {
  return Math.round(10 * Math.random())
}

const generationArray = () => {
  for (let i = 0; i < 100; i++) {
    array.push(generationRandom())
  }
  return array
}
console.log(generationArray(array));
//---------------quickSort------------------
let count = 0

const quickSort = (array) => {
  if (array <= 1) {
    return array
  }
  let pivotIndex = Math.floor(array.length /2);
  let pivot = array[pivotIndex]
  let less = []
  let greater = []
  for (let i = 0; i < array.length; i++) {
    count+=1
    if (i === pivotIndex) {
      continue
    }
    if (array[i] < pivot) {
      less.push(array[i])
    } else {
      greater.push(array[i])
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)]
}
quickSort(array)
//-------------------------------------------
  let end = array.length
  let start = 0

const recursiveBinarySearch = (array, item, start, end) => {
  count+=1
  let middle = Math.floor((start + end)/2);
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
console.log("searchNum :",recursiveBinarySearch(list,searchNum, 0,list.length));
console.log("count :",count);

//
