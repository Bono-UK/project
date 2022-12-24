const s1 = ["(",")","[","]"]
const s2 = ["{","(","}",")"]
const s3 = ["(","(",")",")"]
const s4 = ["(","(",")","("]

const isValid = (s) => {
  let stack = []
  let brackets = {
    ")":"(",
    "}":"{",
    "]":"["
  };

  for (let i = 0; i < s.length; i++) { 
    const current = s[i];

    if (isClosedBrackets(current)) {
      if (brackets[current] !== stack.pop()) {
        return false
      }
    } else {
      stack.push(current)
    }
  }
  return stack.length === 0
}
function isClosedBrackets(ch) {
  return [")","}","]"].indexOf(ch) > -1;
}

console.log(s1, isValid(s1));
console.log(s2, isValid(s2));
console.log(s3, isValid(s3));
console.log(s4, isValid(s4));




