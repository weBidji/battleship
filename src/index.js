export class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    if (this.hits >= this.length) {
      this.sunk = true;
    }
  }
}

export class Gameboard {
  constructor() {
    this.columns = 10;
    this.rows = 10;
    this.cells = [];
  }

  createBoard() {
    for (let i = 0; i < this.rows; i++) {
      this.cells[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.cells[i][j] = {
          coords: [i, j],
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
    // if note, update all coords in this.cells (isOccupied = true)

    let cellsToPopulate = [];
    if (horizontal) {
      for (let i = 0; i < length; i++) {
        cellsToPopulate.push([x, y + i]);
      }
    } else {
      for (let i = 0; i < length; i++) {
        cellsToPopulate.push([x + i, y]);
      }
    }
    console.log(cellsToPopulate);
    cellsToPopulate.forEach((pair) => {
      if (!this.checkValidity(pair[0]) || !this.checkValidity(pair[1])) {
        throw new Error("Invalid placement");
      } else {
        //this.cells[2][2].occupied = true;
        this.cells[pair[0]][pair[1]].occupied = true;
      }
    });
  }

  checkValidity(coord) {
    if (coord < 0 || coord > this.length || coord > this.width) {
      return false;
    }
    return true;
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

const gb = new Gameboard();
gb.createBoard();
gb.placeShip(true, 3, 2, 2);
console.table(gb.cells);
/*
      function hitCheck (x, y) { 
        if (this.x.y === shipTile) {
            this.x.y.status = null;
            this.ship.hit();
        }
      }
      9*/
// determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship,
// or records the coordinates of the missed shot.
// keep track of missed (and made) attacks so they can display them properly
// should be able to report wether or not all of their ships have been sunk

class Player {
  // own gameboard, one player and one CPU, and eventually 2-player mode?
}
