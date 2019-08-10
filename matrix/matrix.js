export class Matrix {

  constructor(string) {
    this.matrix = string.split('\n').map(line => line.split(' ').map(n => Number(n)))
    //console.log(lines)
  }

  get rows() {
    return this.matrix
  }

  get columns() {
    return [[1]]
  }
}
