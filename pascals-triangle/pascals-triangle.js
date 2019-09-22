//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(noOfRows) {
    this._rows = [[1]]
    for (let i = 1; i < noOfRows; i++) {
      let row = [];
      // copy first element
      row.push(this._rows[i-1][0])
      // TODO: middle of the row
      // copy last element
      row.push(this._rows[i-1][i-1])

      this._rows.push(row)
    }
  }

  get lastRow() {
    throw new Error("Remove this statement and implement this function");
  }

  get rows() {
    return this._rows;
  }
}
