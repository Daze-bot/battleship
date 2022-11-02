import { createPlayerBoard, createOpponentBoard } from "./DOMcreateBoards";
import { shipPlacementHelper } from "./DOMscreens";
import { playerShipPlacement } from "./shipPlacement";

function placeUserShips(player) {
  return new Promise((resolve) => {
    console.log(player);

    document.body.appendChild(createPlayerBoard(player.name));
    document.body.appendChild(shipPlacementHelper());

    let ships = [player.carrier, player.battleship, player.destroyer, player.submarine,   player.patrolBoat];
    let index = 0;
    showHelperText(ships[index]);

    let playerSquares = document.querySelectorAll('.playerSquare');
    playerSquares.forEach(square => {
      square.addEventListener('click', () => {
        console.log(ships[index].name);
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
  playerShipPlacement(player);
  document.body.appendChild(createOpponentBoard());
}

export {
  placeUserShips,
}