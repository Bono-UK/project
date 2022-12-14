const x = 101

const  isPolidrom = (x) => {
  let xStr = "";
  let reversxStr = x.toString();
  for (let i of xStr) {
    reversxStr = i + reversxStr
  }
  return reversxStr === xStr
}

console.log(isPolidrom(101));
