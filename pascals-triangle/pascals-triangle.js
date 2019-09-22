//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(noOfRows) {
    this._rows = [[1]]
    for (let i = 1; i < noOfRows; i++) {
      let row = [];
      let prevRow = this._rows[i-1]
      // copy first element
      row.push(prevRow[0])
      // compute inner elements
      for (let j = 1; j < i; j++) {
        row.push(prevRow[j - 1] + prevRow[j])
      }
      // copy last element
      row.push(prevRow[i-1])

      this._rows.push(row)
    }
  }

  get lastRow() {
    return this._rows[this._rows.length - 1];
  }

  get rows() {
    return this._rows;
  }
}
