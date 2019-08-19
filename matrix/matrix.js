export class Matrix {
  constructor(string) {
    this.matrix = string.split("\n").map(line => line.split(" ").map(Number));
    this.transposedMatrix = this.transpose(this.matrix);
  }

  get rows() {
    return this.matrix.map(row => row.slice());
  }

  get columns() {
    return this.transposedMatrix.map(row => row.slice());
  }

  transpose(original) {
    let transposedMatrix = [];

    for (let col = 0; col < original[0].length; col++) {
      transposedMatrix[col] = [];
      for (let row = 0; row < original.length; row++) {
        transposedMatrix[col].push(original[row][col]);
      }
    }

    return transposedMatrix;
  }
}
