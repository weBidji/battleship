import { Ship } from "./game/ship.js";
import { Gameboard } from "./game/gameboard.js";
import { Player } from "./game/player.js";

function setupEventListeners() {
  const cpuCells = document.querySelectorAll(".cpu-cell");
  // console.log(cpuCells);
  cpuCells.forEach((cell) =>
    cell.addEventListener("click", (e) => {
      // e.target.style.backgroundColor = "red";
      // console.log("clicked");
      // find x and y
      const x = cell.parentElement;
      
    })
  );
}

// add game turn / clicking logic
// mix UI and game functions
// link player/cpu gameboard object and DOM grid
