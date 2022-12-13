let array = [];

const generationRandom = () => {
  return array = Math.round(10* Math.random())
}

const generationArray = () => {
  for (let i = 0; i < 100; i++) {
    array.push(generationRandom())
  }
  return array
} 
console.log(generationArray(array));

let count = 0

const quickSort = (array) => {
  if (array.length <= 1) {
    return array
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex]
  let less = [];
  let greater = [];
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

console.log(quickSort(array));




/*


//-------binarySearch-----------------------------
/*
const binarySearch = (array, item) => {
  let start = 0;
  let end = array.length;
  let middle
  let found = false
  let position = -1
  
  while (found === false && start <= end) {
    count += 1
    middle = Math.floor((start + end) / 2)   

    if (array[middle] === item) {
      found = true
      position = middle
      return position
    }

    if (item < array[middle]) {
      end = middle - 1
    }else {
      start = middle + 1
    }
  }
  return position
}
//console.log(binarySearch(array, num));

//console.log("count = ", count);
*/
//----------------------------------------------------

//------------recursiveBinarySearch-------------------

/*
 const array = [1,2,3,4,5,6,7,8,9,10]
let count = 0 

let start = 0
let end = array.length
let item = 1
const recursiveBinarySearch = (arry, item, start, end) => {
 let middle = Math.floor((start + end)/2);
  count += 1
  if (item === arry[middle]) {
    return middle
  }
  if (item < arry[middle]) {
    return recursiveBinarySearch(arry, item, 0, middle, -1)
  }else {
    return recursiveBinarySearch(arry, item, 0, middle, +1, end)
  }
}
console.log(recursiveBinarySearch(array, 0, 0, array.length ));
console.log(count);



const binarySearch = (array, item) => {
  let start = 0 
  let end = array.length 
  let middle;
  let found = false
  let position = -1
  while (found === false && start <= end) {
    count+=1
    middle = Math.floor((start + end ) / 2);
    if (array[middle] === item) {
      found = true
      position = middle
      return position
    }
    if (item < array[middle]) {
      end = middle - 1
    }else {
      start = middle + 1
    }
  }
    return position;
}

console.log(binarySearch(array, 8));

console.log("count = ",count);


  const array = [1,4,5,8,5,1,2,7,5,2,11]
let count = 0
function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
            return i;
        }
    }
    return null
}

console.log(linearSearch(array, 11)) 
console.log('count = ', count)

-----------------------------------

const opts = [1,2,3,4,5,6,7,8,9] //options
const ns = 4 // number search


const search = (arr) => {
  for (let i = 0; i < opts.length; i++) {
    const num = opts[i];
      if (num === ns) {
        break
      } 
  }
  return num
}
console.log(search.num);
*/

