export const toRna = (dna) => {
  return mapping[dna];
};

const mapping = {
  "": "",
  "C": "G"
}
