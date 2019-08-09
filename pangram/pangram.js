export const isPangram = sentence => {
  let distinctLetters = new Set(sentence.toLowerCase().replace(/[^a-z]/g, ""));
  return distinctLetters.size === 26;
};
