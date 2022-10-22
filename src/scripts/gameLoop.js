import { Player } from "./Player";
import {
  playerShipPlacement,
  computerShipPlacement
} from "./shipPlacement";

function gameLoop() {
  const userPlayer = new Player('player');
  playerShipPlacement(userPlayer);
  userPlayer.renderPlayerBoard();

  const computerPlayer = new Player('computer');
  computerShipPlacement(computerPlayer);
  computerPlayer.renderOpponentBoard();

  playTurn(userPlayer, computerPlayer);
}

function playTurn(userPlayer, computerPlayer) {
  let opponentSquares = document.querySelectorAll('.opponentSquare');
  opponentSquares.forEach(square => {
    square.addEventListener('click', () => {
      if (computerPlayer.gameboard.checkAllShipsSunk() === true ||
          userPlayer.gameboard.checkAllShipsSunk() === true) {
        return;
      }

      let squareColumn = square.id.slice(2, 3);
      let squareRow = square.id.slice(1, 2);
      if (computerPlayer.gameboard.notYetGuessed(squareColumn, squareRow) === false) {
        return;
      }
      userPlayer.makeAttack(squareColumn, squareRow, computerPlayer.gameboard)
      computerPlayer.renderOpponentBoard();
      if (computerPlayer.gameboard.checkAllShipsSunk() === true) {
        alert('User Player Wins!');
      }

      computerPlayer.AIMove(userPlayer);
      if (userPlayer.gameboard.checkAllShipsSunk() === true) {
        alert('Computer Wins!');
      }
    });
  })
}

export { gameLoop };