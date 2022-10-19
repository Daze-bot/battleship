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

  let opponentSquares = document.querySelectorAll('.opponentSquare');
  opponentSquares.forEach(square => {
    square.addEventListener('click', () => {
      let squareColumn = square.id.slice(2, 3);
      let squareRow = square.id.slice(1, 2);
      userPlayer.makeAttack(squareColumn, squareRow, computerPlayer.gameboard)
      computerPlayer.renderOpponentBoard();
    });
  })
}

export { gameLoop };