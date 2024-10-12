import { Ship } from "./game/ship.js";
import { Gameboard } from "./game/gameboard.js";
import { Player } from "./game/player.js";

const cpuCells = document.querySelectorAll(".cpu-cell");

export function setupEventListeners() {
  cpuCells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      e.target.style.backgroundColor = "red";
      console.log("clicked");
    });
  });
}
