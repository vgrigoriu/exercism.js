export class Matrix {
  constructor(string) {
    this.matrix = string
      .split("\n")
      .map(line => line.split(" ").map(n => Number(n)));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    let transposedMatrix = Array(this.matrix[0].length)
    for (let row = 0; row < this.matrix[0].length; row++) {
      transposedMatrix[row] = []
    }

    for (let row = 0; row < this.matrix.length; row++) {
      for (let col = 0; col < this.matrix[row].length; col++) {
        transposedMatrix[col].push(this.matrix[row][col])
      }
    }

    return transposedMatrix
  }
}
