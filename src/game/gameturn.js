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
  console.log(cpuTarget);
  human.gameBoard.receiveAttack(cpuTarget.x, cpuTarget.y);

  const humanCells = document.querySelectorAll(".human-cell");
  let target = null;
  humanCells.forEach((cell) => {
    if (cell.dataset.x == cpuTarget.x && cell.dataset.y == cpuTarget.y) {
      hitOrMiss(human,cell.dataset.x,cell.dataset.y) ? cell.classList.add('hit') : cell.classList.add('miss');
      return;
    }
  });
}


function hitOrMiss(player, x, y) {
  if (player.gameBoard.cells[x][y].ship) {
    return true;
  }
  return false;
}
