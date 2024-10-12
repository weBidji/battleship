import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";

const gb = new Gameboard();
gb.createBoard();
gb.placeShip("destroyer", true, 3, 2, 2);
gb.placeShip("sloop", false, 4, 5, 5);
// gb.placeShip("sloo", true, 4, 0, 2);
gb.receiveAttack(2, 2);
gb.receiveAttack(2, 3);
gb.receiveAttack(2, 4);
console.table(gb.cells);

// determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship,
// or records the coordinates of the missed shot.
// keep track of missed (and made) attacks so they can display them properly
// should be able to report wether or not all of their ships have been sunk
