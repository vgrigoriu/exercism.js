export const toRna = dna => {
  return dna.replace(/./g, complement);
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
