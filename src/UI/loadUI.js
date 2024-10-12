// import { Ship } from "./game/ship.js";
// import { Gameboard } from "./game/gameboard.js";
import { Player } from "../game/player.js";

const human = new Player();

const cpu = new Player();

// const playerBoard = document.getElementById("player-board");

function createPlayerBoard(player) {
  let boardToCreate;
  player === human
    ? (boardToCreate = document.getElementById("player-board"))
    : (boardToCreate = document.getElementById("cpu-board"));
  player.gameBoard.cells.forEach((column) => {
    const col = document.createElement("div");
    col.classList.add("column");
    boardToCreate.appendChild(col);

    column.forEach((row) => {
      const cell = document.createElement("div");
      cell.classList.add("game-cell");
      if (player === cpu) {
        cell.classList.add("cpu-cell");
      }
      col.appendChild(cell);
    });
  });
}

function renderBoards() {
  createPlayerBoard(human);
  createPlayerBoard(cpu);
}

const cpuCells = document.querySelectorAll(".cpu-cell");

function setupEventListeners() {

  console.log(cpuCells);
  cpuCells.forEach((cell) =>
    cell.addEventListener("click", (e) => {
      e.target.style.backgroundColor = "red";
      console.log("clicked");
    })
  );
}

export function loadUI() {
  renderBoards();
  setupEventListeners();
}
