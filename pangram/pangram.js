//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alpha = "abcdefghijklmnopqrstuvwxyz".split("");

export const isPangram = (myString) => {
  let finalComparison = []

  if (myString === "") {
    return false
  }

  myString = myString.toLowerCase().split("");

  for (let i = 0; i < alpha.length; i++) {
    if (myString.indexOf(alpha[i]) > -1) {
      finalComparison.push(alpha[i])
    }    
  }

  if (finalComparison.length == alpha.length) {
    return true
  } else {
    return false
  }
};
