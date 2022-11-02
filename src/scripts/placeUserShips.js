import { createPlayerBoard, createOpponentBoard } from "./DOMcreateBoards";
import { shipPlacementHelper } from "./DOMscreens";
import { playerShipPlacement } from "./shipPlacement";

let index = 0;

function placeUserShips(player) {
  return new Promise((resolve) => {
    document.body.appendChild(createPlayerBoard(player.name));
    document.body.appendChild(shipPlacementHelper());

    let ships = [player.carrier, player.battleship, player.destroyer, player.submarine,   player.patrolBoat];
    
    showHelperText(ships[index]);

    let playerSquares = document.querySelectorAll('.playerSquare');
    playerSquares.forEach(square => {
      square.addEventListener('click', () => {
        // Add ship placement code here (use a new function)
        index++;
        if (index < 5) {
          showHelperText(ships[index]);
        } else {
          runGame(player);
          resolve();
        }
      })
    })
  })
}

function showHelperText(ship) {  
  let helperText = document.querySelector('.helperText');
  helperText.textContent = `Select the location of your ${ship.name}`;
}

function runGame(player)  {
  let helper = document.querySelector('.placementHelper');
  document.body.removeChild(helper);

  // remove this once custom placement is finished
  playerShipPlacement(player);
  document.body.appendChild(createOpponentBoard());
}

export {
  placeUserShips,
}