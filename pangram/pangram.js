export const isPangram = sentence => {
  let distinctLetters = new Set(
    Array.from(sentence.toLowerCase().replace(/[^a-z]/g, ""))
  );
  return distinctLetters.size === 26;
};
