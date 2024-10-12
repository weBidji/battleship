import { Ship } from "./ship";

export class Gameboard {
  constructor() {
    this.columns = 10;
    this.rows = 10;
    this.cells = [];
  }

  createBoard() {
    for (let i = 0; i < this.columns; i++) {
      this.cells[i] = [];
      for (let j = 0; j < this.rows; j++) {
        this.cells[i][j] = {
          // coords: [i, j],
          targeted: false,
          occupied: false,
        };
      }
    }
  }

  placeShip(horizontal, length, x, y) {
    horizontal = Boolean(horizontal);

    const shipToPlace = new Ship(length);
    // gather all coords to update and check if out of bounds
    // if , update all coords in this.cells (occupied = true)

    if (!this.checkValidity(x) || !this.checkValidity(y)) {
      throw new Error("Invalid placement");
    }

    let cellsToPopulate = [];
    if (horizontal) {
      for (let i = 0; i < length; i++) {
        cellsToPopulate.push([y, x + i]);
      }
    } else {
      for (let i = 0; i < length; i++) {
        cellsToPopulate.push([y + i, x]);
      }
    }

    //check if coordinates are valid or if cell isn't already occupied

    cellsToPopulate.forEach((pair) => {
      if (!this.checkValidity(pair[0]) || !this.checkValidity(pair[1])) {
        throw new Error("Invalid placement");
      }
    });

    cellsToPopulate.forEach((pair) => {
      if (this.checkIfOccupied(pair[0], pair[1])) {
        throw new Error("Cell already occupied");
      }
    });

    cellsToPopulate.forEach((pair) => {
      this.cells[pair[0]][pair[1]].occupied = true;
    });
  }

  checkValidity(coord) {
    if (coord < 0 || coord > this.rows || coord > this.columns) {
      return false;
    }
    return true;
  }

  checkIfOccupied(x, y) {
    if (this.cells[x][y].occupied === true) {
      return true;
    }
    return false;
  }

  receiveAttack(x, y) {
    if (x < 0 || x > this.rows || y < 0 || y > this.columns) {
      throw new Error("Invalid coordinates");
    }
    this.cells[x][y].targeted = true;
  }

  // place ships at specific coordinates by calling the ship factory or class

  // receiveAttack function that takes a pair of coordinates,
}
