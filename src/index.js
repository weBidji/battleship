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
          isOccupied: false,
        };
      }
    }
  }



  receiveAttack(x,y) {
    if((x < 0 || x > this.rows) || (y < 0 || y > this.columns)) {
      throw new Error ('Invalid coordinates')
    }
    this.cells[x][y].targeted = true;

  }

  // place ships at specific coordinates by calling the ship factory or class

  // receiveAttack function that takes a pair of coordinates,
}

const gb = new Gameboard();
gb.createBoard()
console.table(gb.cells);
console.log(gb.cells);
/*
      function hitCheck (x, y) { 
        if (this.x.y === shipTile) {
            this.x.y.status = null;
            this.ship.hit();
        }
      }
      */
// determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship,
// or records the coordinates of the missed shot.
// keep track of missed (and made) attacks so they can display them properly
// should be able to report wether or not all of their ships have been sunk

class Player {
  // own gameboard, one player and one CPU, and eventually 2-player mode?
}
