import { Ship } from "./ship";

export class Gameboard {
  constructor() {
    this.columns = 10;
    this.rows = 10;
    this.cells = [];
    this.shipCounter = 0;
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

    cellsToPopulate.forEach((pair) => {
      if (!this.checkValidity(pair[0]) || !this.checkValidity(pair[1])) {
        throw new Error("Invalid placement");
      }
    });

    cellsToPopulate.forEach((pair) => {
      if (this.checkIfOccupied(pair[0], pair[1])) {
        throw new Error(`Cell already occupied :${pair[0]} - ${pair[1]}`);
      }
    });

    cellsToPopulate.forEach((pair) => {
      this.markAsOccupied(pair[0],pair[1])
      this.cells[pair[0]][pair[1]].ship = ship;
    });

    this.shipCounter++;
  }

  checkValidity(coord) {
    if (coord < 0 || coord >= this.rows || coord >= this.columns) {
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
  markAsOccupied(x, y) {
    this.cells[x][y].occupied = true;
  }

  receiveAttack(x, y) {
    if (!this.checkValidity(x) || !this.checkValidity(y)) {
      throw new Error("Invalid target");
    }
    let targetCell = this.cells[y][x];

    if (targetCell.targeted === true) {
      throw new Error("Cell already targeted");
    } else {
      targetCell.targeted = true;
    }

    if (targetCell.ship) {
      targetCell.ship.hits++;
      targetCell.ship.isSunk();
      if (targetCell.ship.sunk === true) {
        this.shipCounter--;
      }

      /* if(this.checkForDefeat()) {
        

      }*/
    }
  }

  checkForDefeat() {
    if (this.shipCounter === 0) {
      return true;
    }
    return false;
  }

  generateCoords() {
    let coords = {};
    coords.x = Math.floor(Math.random() * 10);
    coords.y = Math.floor(Math.random() * 10);

    return coords;
  }
}
