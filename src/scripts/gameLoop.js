import { Player } from "./Player";
import { placeUserShips } from "./placeUserShips";
import { alertGameStart } from "./DOMscreens";
import { placeComputerShip } from "./placeComputerShips";

async function gameLoop(userName) {
  const userPlayer = new Player(userName);
  await placeUserShips(userPlayer);
  userPlayer.renderPlayerBoard();
  userPlayer.turn = true;

  const computerPlayer = new Player('Computer');
  placeComputerShip(computerPlayer, computerPlayer.carrier);
  placeComputerShip(computerPlayer, computerPlayer.battleship);
  placeComputerShip(computerPlayer, computerPlayer.destroyer);
  placeComputerShip(computerPlayer, computerPlayer.submarine);
  placeComputerShip(computerPlayer, computerPlayer.patrolBoat);
  computerPlayer.renderOpponentBoard();

  playTurn(userPlayer, computerPlayer);
}

function playTurn(userPlayer, computerPlayer) {
  alertGameStart();
  
  let opponentSquares = document.querySelectorAll('.opponentSquare');
  opponentSquares.forEach(square => {
    square.addEventListener('click', () => {
      let squareColumn = square.id.slice(2, 3);
      let squareRow = square.id.slice(1, 2);
      if (computerPlayer.gameboard.notYetGuessed(squareColumn, squareRow) === false ||
          computerPlayer.gameboard.checkAllShipsSunk() === true ||
          userPlayer.gameboard.checkAllShipsSunk() === true ||
          userPlayer.turn === false) {
        return;
      }
      userPlayer.makeAttack(squareColumn, squareRow, computerPlayer.gameboard);
      userPlayer.turn = false;
      computerPlayer.turn = true;
      computerPlayer.renderOpponentBoard();
      if (computerPlayer.gameboard.checkAllShipsSunk() === true) {
        userPlayer.winGame();
      }

      // .5s delay before each CPU move
      setTimeout(function() {
        // No additional delay if no ships sunk on player move
        if (document.querySelector('.alertBox').classList.contains('hidden')) {
          setTimeout(function() {
            computerPlayer.AIMove(userPlayer);
            userPlayer.turn = true;
            computerPlayer.turn = false;
            if (userPlayer.gameboard.checkAllShipsSunk() === true) {
              computerPlayer.winGame();
            }
          }, 0) 
        // Additional delay if player sunk a CPU ship to allow popup alert       
        } else {
          setTimeout(function() {
            computerPlayer.AIMove(userPlayer);
            userPlayer.turn = true;
            computerPlayer.turn = false;
            if (userPlayer.gameboard.checkAllShipsSunk() === true) {
              computerPlayer.winGame();
            }
          }, 1250)
        }}, 500);   
    });
  })
}

export { gameLoop };