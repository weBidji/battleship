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
    this.ships = [
      this.carrier,
      this.battleship,
      this.cruiser,
      this.submarine,
      this.destroyer,
    ];
  }

  placeShipsRandomly() {
    this.ships.forEach((ship) => {
      let position = this.generateValidPlacement(ship.length);
      console.log(position);
      this.gameBoard.placeShip(
        ship,
        position.isHorizontal,
        position.x,
        position.y
      );
    });
    console.table(this.gameBoard.cells);
  }

  generateValidPlacement(length) {
    const startingPoint = this.gameBoard.generateCoords();
    const randomBoolean = () => Math.random() >= 0.5;
    const isHorizontal = randomBoolean();

    let x = 0;
    let y = 0;
    for (let i = 0; i < length; i++) {
      x = isHorizontal ? startingPoint.x + i : startingPoint.x;
      y = isHorizontal ? startingPoint.y : startingPoint.y + i;
      if (
        !this.gameBoard.checkValidity(x) ||
        !this.gameBoard.checkValidity(y) ||
        this.gameBoard.checkIfOccupied(x, y)
      ) {
        return this.generateValidPlacement(length);
      }
    }
    return { x: startingPoint.x, y: startingPoint.y, isHorizontal };
  }
}
// generate placement:
// - generate a valid starting point
// - generate horizontal / vertical
// - check starting point + cells in x/y direction
// - return this data to place ship if all valid
// - start again if invalid

// Logic is:
// -Generate a placement the length of the ship (generateValidPlacement(ship.length))
// -Place ship at said coords

/*
  tryToPlace(ship) {
    const randomBoolean = () => Math.random() >= 0.5;
    let horizontal;
    randomBoolean ? (horizontal = true) : (horizontal = false);

    let coords = this.gameBoard.generateCoords();
    const x = coords.x;
    const y = coords.y;

    this.gameBoard.placeShip(ship, horizontal, x, y);
  }
}

generateValidPlacement(length) {
  let found = false;
  let startingPoint;
  do {
    const randomBoolean = () => Math.random() >= 0.5;
    let horizontal;
    randomBoolean ? (horizontal = true) : (horizontal = false);
    startingPoint = this.gameBoard.generateCoords();
    if (!this.gameBoard.cells[startingPoint.x][startingPoint.y].occupied)
      found = true;
  } while ((found = false));
  return startingPoint;
}
}*/
