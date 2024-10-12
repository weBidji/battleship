import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";

const gb = new Gameboard();
gb.createBoard();


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
