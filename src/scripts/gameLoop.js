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
}

export { gameLoop };