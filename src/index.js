class Ship {
  constructor(length, hits, sunk) {
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

class Gameboard {
  constructor(width, height, cells) {
    this.width = 10;
    this.height = 10;
    this.cells = new Array();
  }

  // place ships at specific coordinates by calling the ship factory or class

  // 10*10 grid
  // receiveAttack function that takes a pair of coordinates,
}
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


