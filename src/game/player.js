import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

export class Player {
  // own gameboard, one player and one CPU, and eventually 2-player mode?
  constructor() {
    this.gameBoard = new Gameboard();
    this.gameBoard.createBoard();
    this.carrier = new Ship("carrier", 5);
    this.battleship = new Ship("battleship", 4);
    this.cruiser = new Ship("cruiser", 3);
    this.submarine = new Ship("submarine", 3);
    this.destroyer = new Ship("destroyer", 2);
    this.remainingBoats = 5;
  }
}

// win/lose logic
