const x = {
  name: "bono",
  num: 11,
}
const y = {
  name: "bono",
  num :11,
}

const q = {}


const cals = (x,y) => {
  if (x.name === y.name) {
    q.push(x.num * y.num /2)
    console.log(q);
  }
}
console.log(cals(q));
console.log(x);
