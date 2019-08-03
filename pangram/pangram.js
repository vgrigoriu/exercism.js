//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (s) => {
  let distinctLetters = new Set(s.split(''))
  return distinctLetters.size == 26
};
