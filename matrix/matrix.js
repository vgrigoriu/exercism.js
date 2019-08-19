export class Matrix {
  constructor(string) {
    this.matrix = string.split("\n").map(line => line.split(" ").map(Number));
    this.transposedMatrix = this.transpose();
  }

  get rows() {
    return this.matrix.map(row => row.slice());
  }

  get columns() {
    return this.transposedMatrix.map(row => row.slice());
  }

  transpose() {
    let transposedMatrix = [];

    for (let col = 0; col < transposedMatrix.length; col++) {
      transposedMatrix[col] = [];
      for (let row = 0; row < this.matrix.length; row++) {
        transposedMatrix[col].push(this.matrix[row][col]);
      }
    }

    return transposedMatrix;
  }
}
