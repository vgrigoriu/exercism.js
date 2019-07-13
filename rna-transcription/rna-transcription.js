export const toRna = dna => {
  return dna.replace(/[CGTA]/g, complement);
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
