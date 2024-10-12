import { Ship } from "./game/ship.js";
import { Gameboard } from "./game/gameboard.js";
import { Player } from "./game/player.js";
import { loadUI } from "./UI/loadUI.js";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  loadUI();
});
/*
const jimmy = new Player();

jimmy.gameBoard.placeShip(jimmy.cruiser, true, 2, 2);
jimmy.gameBoard.placeShip(jimmy.battleship, false, 5, 5);
jimmy.gameBoard.receiveAttack(2, 3);

console.table(jimmy.gameBoard.cells);
*/
