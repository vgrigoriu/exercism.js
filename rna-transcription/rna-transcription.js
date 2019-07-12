export const toRna = dna => {
  return dna
    .split("")
    .map(nucleotide => mapping[nucleotide])
    .join("");
};

const mapping = {
  C: "G",
  G: "C",
  T: "A",
  A: "U"
};
