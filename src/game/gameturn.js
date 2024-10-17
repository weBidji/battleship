import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { human, cpu } from "../UI/loadUI.js";

export function setupEventListeners() {
  const cpuCells = document.querySelectorAll(".cpu-cell");
  cpuCells.forEach((cell) =>
    cell.addEventListener("click", (e) => {
      cpu.gameBoard.receiveAttack(e.target.dataset.x, e.target.dataset.y);
      if (hitOrMiss(cpu, [e.target.dataset.x], [e.target.dataset.y])) {
        cell.classList.add("hit");
      } else {
        cell.classList.add("miss");
      }

      console.log(
        `Player attacked cell: ${e.target.dataset.x} : ${e.target.dataset.y}`
      );
      cpuTurn();
    })
  );
}

function cpuTurn() {
  let cpuTarget = cpu.gameBoard.generateCoords();
  human.gameBoard.receiveAttack(cpuTarget.x, cpuTarget.y);
  let target;

  const humanCells = document.querySelectorAll(".human-cell");
  let found = false;
  humanCells.forEach((cell) => {
    if (cell.dataset.x === cpuTarget.x && cell.dataset.y === cpuTarget.y) {
      target = cell;
      console.log(target);
    }
  });

  // cpuTarget = null;
  /*
  if (hitOrMiss(human, [e.target.dataset.x], [e.target.dataset.y])) {
    targetCell.classList.add("hit");
  } else {
    targetCell.classList.add("miss");
  }*/
  //console.log(cpuTarget);
  //console.table(human.gameBoard.cells);
}

function hitOrMiss(player, x, y) {
  if (player.gameBoard.cells[x][y].ship) {
    return true;
  }
  return false;
}

// add game turn / clicking logic
// add cpu turn / attack
// mix UI and game functions
// link player/cpu gameboard object and DOM grid
