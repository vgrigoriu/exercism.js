export const isPangram = s => {
  let distinctLetters = new Set(
    s
      .split("")
      .filter(c => c.match(/[a-z]/i))
      .map(c => c.toLowerCase())
  );
  return distinctLetters.size === 26;
};
