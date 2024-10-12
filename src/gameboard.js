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
          targeted: false,
          occupied: false,
        };
      }
    }
  }

  placeShip(ship, horizontal, x, y) {
    horizontal = Boolean(horizontal);

    if (!this.checkValidity(x) || !this.checkValidity(y)) {
      throw new Error("Invalid placement");
    }

    let cellsToPopulate = [];
    if (horizontal) {
      for (let i = 0; i < ship.length; i++) {
        cellsToPopulate.push([y, x + i]);
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
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
      this.cells[pair[0]][pair[1]].ship = ship;
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
    if (!this.checkValidity(x) || !this.checkValidity(y)) {
      throw new Error("Invalid target");
    }

    if (this.cells[x][y].targeted === true) {
      throw new Error("Cell already targeted");
    }
    this.cells[x][y].targeted = true;

    if (this.cells[x][y].ship) {
      this.cells[x][y].ship.hits++;
      this.cells[x][y].ship.isSunk();
    }
  }

  // receiveAttack function that takes a pair of coordinates,
}
