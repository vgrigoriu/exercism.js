export const toRna = dna => {
  return dna
  .split("")
  .reduce((rna, nucleotide) => rna + complement(nucleotide), "");
};

const complement = nucleotide => {
  if (nucleotide in mapping) {
    return mapping[nucleotide]
  }

  throw new Error("Invalid nucleotide: " + nucleotide)
}

const mapping = {
  C: "G",
  G: "C",
  T: "A",
  A: "U"
};
