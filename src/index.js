import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";

const jimmy = new Player();
jimmy.gameBoard.createBoard();

jimmy.gameBoard.placeShip(jimmy.cruiser, true, 2, 2);
jimmy.gameBoard.placeShip(jimmy.carrier, true, 0, 2);
console.table(jimmy.gameBoard.cells);
/*
jimmy.gameBoard.placeShip("sloop", false, 5, 5);
console.table(jimmy.gameBoard.cells);
// should be able to report wether or not all of their ships have been sunk
*/
