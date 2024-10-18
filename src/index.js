import { Ship } from "./game/ship.js";
import { Gameboard } from "./game/gameboard.js";
import { Player } from "./game/player.js";
import { prepareGame } from "./UI/loadUI.js";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  prepareGame();
});
/*
const jimmy = new Player();

jimmy.gameBoard.placeShip(jimmy.cruiser, true, 2, 2);
jimmy.gameBoard.placeShip(jimmy.battleship, false, 5, 5);
jimmy.gameBoard.receiveAttack(2, 3);

console.table(jimmy.gameBoard.cells);

// Random ship placement for cpu !important -- hilight where ships are placed in DOM
// Ship placement for player
// Game winning / losing logic

////////////////////////

// Improve AI?
// 2 Player mode?
*/
