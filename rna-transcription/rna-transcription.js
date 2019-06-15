export const toRna = dna => {
  return dna
    .split("")
    .map(n => mapping[n])
    .join("");
};

const mapping = {
  C: "G",
  G: "C",
  T: "A",
  A: "U"
};
