// import { Ship } from "./game/ship.js";
// import { Gameboard } from "./game/gameboard.js";
import { Player } from "../game/player.js";
import { setupEventListeners } from "../game/gameturn.js";

const human = new Player();

export const cpu = new Player();

// const playerBoard = document.getElementById("player-board");

function createPlayerBoard(player) {
  let boardToCreate;
  let columnCounter = 0;
  player === human
    ? (boardToCreate = document.getElementById("player-board"))
    : (boardToCreate = document.getElementById("cpu-board"));
  player.gameBoard.cells.forEach((column) => {
    const col = document.createElement("div");
    col.classList.add("column");
    boardToCreate.appendChild(col);

    let rowCounter = 0;
    column.forEach((row) => {
      const cell = document.createElement("div");
      cell.classList.add("game-cell");
      if (player === cpu) {
        cell.classList.add("cpu-cell");
      }
      cell.dataset.y = rowCounter;
      cell.dataset.x = columnCounter;
      col.appendChild(cell);
      rowCounter++;
    });
    columnCounter++;
  });
}

export function prepareGame() {
  createPlayerBoard(cpu);
  createPlayerBoard(human);
  setupEventListeners();
}

export function loadUI() {
  renderBoards();
  // setupEventListeners();
}
