import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { cpu } from "../UI/loadUI.js";

export function setupEventListeners() {
  const cpuCells = document.querySelectorAll(".cpu-cell");
  cpuCells.forEach((cell) =>
    cell.addEventListener("click", (e) => {
      cpu.gameBoard.receiveAttack(e.target.dataset.x, e.target.dataset.y);
      console.log(
        `Player attacked cell: ${e.target.dataset.x} : ${e.target.dataset.y}`
      );
    })
  );
}

// add game turn / clicking logic
// mix UI and game functions
// link player/cpu gameboard object and DOM grid
