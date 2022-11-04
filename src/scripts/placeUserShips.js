import { createPlayerBoard, createOpponentBoard } from "./DOMcreateBoards";
import { shipPlacementHelper } from "./DOMscreens";

let index = 0;

function placeUserShips(player) {
  return new Promise((resolve) => {
    document.body.appendChild(createPlayerBoard(player.name));
    document.body.appendChild(shipPlacementHelper());

    let ships = [player.carrier, player.battleship, player.destroyer, player.submarine, player.patrolBoat];
    
    showHelperText(ships[index]);

    let playerSquares = document.querySelectorAll('.playerSquare');
    playerSquares.forEach(square => {
      square.addEventListener('mouseover', () => {
        placementHover(player, ships[index], square);
      })
      square.addEventListener('mouseout', () => {
        playerSquares.forEach(box => {
          box.classList.remove('validPlacement', 'invalidPlacement');
        })
      })
      square.addEventListener('click', () => {
        if (square.classList.contains('validPlacement')) {
          placeShip(player, ships[index]);
          index++;
          playerSquares.forEach(box => {
            box.classList.remove('validPlacement');
          })
          if (index < 5) {
            showHelperText(ships[index]);
          } else {
            runGame(player);
            resolve();
          }
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
  document.body.appendChild(createOpponentBoard());
}

function placementHover(player, ship, square) {
  let shipLocations = [];
  let squareColumn = Number(square.id.slice(2, 3));
  let squareRow = Number(square.id.slice(1, 2));

  let rotateBtn = document.querySelector('.helperBtn');
  if (rotateBtn.classList.contains('horizontal')) {
    if (squareColumn + (ship.length - 1) > 9) {
      return;
    } else {
      for (let i = 0; i < ship.length; i++) {
        let shipColumn = squareColumn + i;
        let shipRow = squareRow;
        shipLocations.push(`${shipColumn}${shipRow}`);
      }
      checkValidity();
    }
  } else {
    if (squareRow + (ship.length - 1) > 9) {
      return;
    } else {
      for (let i = 0; i < ship.length; i++) {
        let shipColumn = squareColumn;
        let shipRow = squareRow + i;
        shipLocations.push(`${shipColumn}${shipRow}`);
      }
      checkValidity();
    }
  }

  function checkValidity() {
    let validPlacement = shipLocations.every(location => {
      return player.gameboard.isEmpty(location.slice(0, 1), location.slice(1, 2));
    })

    if (validPlacement === true) {
      shipLocations.forEach(location => {
        let shipID = document.querySelector(`#p${location.slice(1, 2)}${location.slice(0, 1)}`);
        shipID.classList.add('validPlacement');
      })
    }
  }
}

function placeShip(player, ship) {
  let shipLocations = document.querySelectorAll('.validPlacement');
  shipLocations.forEach(location => {
    let locationColumn = location.id.slice(2, 3);
    let locationRow = location.id.slice(1, 2);
    player.gameboard.placeShip(locationColumn, locationRow, ship);
    player.renderPlayerBoard();
  })
}

export {
  placeUserShips,
}