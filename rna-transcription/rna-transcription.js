export const toRna = dna => {
  return dna
  .split("")
  .reduce((rna, nucleotide) => rna + complement(nucleotide), "");
};

const complement = nucleotide => {
  if (mapping.hasOwnProperty(nucleotide)) {
    return mapping[nucleotide]
  }

  throw new Error
}

const mapping = {
  C: "G",
  G: "C",
  T: "A",
  A: "U"
};
