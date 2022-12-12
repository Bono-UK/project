//________________factorial__________________+
const factorial = (n) => {        //         |
  if (n === 1) {                 //          |
    return 1                    //           |
  }                            //            |
  return n * factorial(n -1)  //             |
}                            //              |
const num = 5               //               |
                           //                |
console.log("factorial =",factorial(num));// |
                          //                 |
//--------fibonachi - 1,1,2,3,5,8,13,21 ------+

const fibonachi = (n) => {
  if (n === 1 || n ===2 ) {
    return 1
  }
  return fibonachi(n - 1) + fibonachi(n - 2)
} 

console.log("fibonachi",fibonachi(8));



