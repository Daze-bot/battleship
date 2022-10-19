function playerShipPlacement(player) {
  player.gameboard.placeShip(1, 4, player.carrier);
  player.gameboard.placeShip(1, 5, player.carrier);
  player.gameboard.placeShip(1, 6, player.carrier);
  player.gameboard.placeShip(1, 7, player.carrier);
  player.gameboard.placeShip(1, 8, player.carrier);

  player.gameboard.placeShip(0, 0, player.battleship);
  player.gameboard.placeShip(1, 0, player.battleship);
  player.gameboard.placeShip(2, 0, player.battleship);
  player.gameboard.placeShip(3, 0, player.battleship);

  player.gameboard.placeShip(3, 8, player.destroyer);
  player.gameboard.placeShip(4, 8, player.destroyer);
  player.gameboard.placeShip(5, 8, player.destroyer);

  player.gameboard.placeShip(6, 3, player.submarine);
  player.gameboard.placeShip(7, 3, player.submarine);
  player.gameboard.placeShip(8, 3, player.submarine);

  player.gameboard.placeShip(8, 7, player.patrolBoat);
  player.gameboard.placeShip(8, 8, player.patrolBoat);
}

function computerShipPlacement(player) {
  player.gameboard.placeShip(1, 8, player.carrier);
  player.gameboard.placeShip(2, 8, player.carrier);
  player.gameboard.placeShip(3, 8, player.carrier);
  player.gameboard.placeShip(4, 8, player.carrier);
  player.gameboard.placeShip(5, 8, player.carrier);

  player.gameboard.placeShip(0, 0, player.battleship);
  player.gameboard.placeShip(0, 1, player.battleship);
  player.gameboard.placeShip(0, 2, player.battleship);
  player.gameboard.placeShip(0, 3, player.battleship);

  player.gameboard.placeShip(3, 1, player.destroyer);
  player.gameboard.placeShip(4, 1, player.destroyer);
  player.gameboard.placeShip(5, 1, player.destroyer);

  player.gameboard.placeShip(4, 4, player.submarine);
  player.gameboard.placeShip(4, 5, player.submarine);
  player.gameboard.placeShip(4, 6, player.submarine);

  player.gameboard.placeShip(8, 0, player.patrolBoat);
  player.gameboard.placeShip(9, 0, player.patrolBoat);
}

export { 
  playerShipPlacement,
  computerShipPlacement,
};