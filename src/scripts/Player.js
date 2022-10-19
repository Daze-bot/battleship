import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";

class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard(this.name);
    this.carrier = new Ship('Carrier', 5);
    this.battleship = new Ship('Battleship', 4);
    this.destroyer = new Ship('Destroyer', 3);
    this.submarine = new Ship('Submarine', 3);
    this.patrolBoat = new Ship('Patrol Boat', 2);
  }

  makeAttack(column, row, opponentBoard) {
    if (opponentBoard.board.isEmpty(column, row)) {
      opponentBoard.receiveAttack(column, row);
    }
    return;
  }

  renderPlayerBoard() {
    for (let i = 0; i < this.gameboard.board.length; i++) {
      for (let j = 0; j < this.gameboard.board[i].length; j++) {
        if (this.gameboard.board[i][j] !== 'hit' &&
            this.gameboard.board[i][j] !=='miss' &&
            this.gameboard.board[i][j] !== "") {
          let square = document.getElementById(`p${j}${i}`);
          square.textContent = 'S';
        }
      }
    }
  }

  renderOpponentBoard() {
    for (let i = 0; i < this.gameboard.board.length; i++) {
      for (let j = 0; j < this.gameboard.board[i].length; j++) {
        if (this.gameboard.board[i][j] !== 'hit' &&
            this.gameboard.board[i][j] !=='miss' &&
            this.gameboard.board[i][j] !== "") {
          let square = document.getElementById(`o${j}${i}`);
          square.textContent = 'S';
        }
      }
    }
  }
}

export { Player };
