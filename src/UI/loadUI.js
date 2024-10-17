import { Player } from "../game/player.js";
import { setupEventListeners } from "../game/gameturn.js";

export const human = new Player();

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
      } else {
        cell.classList.add("human-cell");
      }
      cell.dataset.x = rowCounter;
      cell.dataset.y = columnCounter;
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
  human.gameBoard.placeShip(human.carrier, true, 0, 0)
  cpu.gameBoard.placeShip(cpu.carrier, true, 0, 0)
  
}

export function loadUI() {
  renderBoards();
  // setupEventListeners();
}
