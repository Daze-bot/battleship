import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";
import { bgImages } from "./backGroundImgLoader";
import Hit from '../imgs/explosion.svg';
import Circle from '../imgs/circle.svg';
import { alertGameOver } from "./DOMscreens";

class Player {
  constructor(name) {
    this.name = name;
    this.turn = false;
    this.gameboard = new Gameboard(this.name);
    this.carrier = new Ship('Carrier', 5);
    this.battleship = new Ship('Battleship', 4);
    this.destroyer = new Ship('Destroyer', 3);
    this.submarine = new Ship('Submarine', 3);
    this.patrolBoat = new Ship('Patrol Boat', 2);
  }

  makeAttack(column, row, opponentBoard) {
    if (opponentBoard.checkAllShipsSunk() === true || this.turn === false) {
      return;
    }
    if (opponentBoard.notYetGuessed(column, row)) {
      opponentBoard.receiveAttack(column, row);
    }
    return;
  }

  AIMove(userPlayer) {
    let notGuessed = []
    for (let i = 0; i < userPlayer.gameboard.board.length; i++) {
      for (let j = 0; j < userPlayer.gameboard.board[i].length; j++) {
        if (userPlayer.gameboard.notYetGuessed(i, j) === true) {
          notGuessed.push(`${j}${i}`);
        }
      }
    }
    if (notGuessed.length > 0 && this.gameboard.checkAllShipsSunk() === false) {
      let randomGuess = notGuessed[Math.floor(Math.random() * notGuessed.length)];
      let randomColumn = randomGuess.slice(1, 2);
      let randomRow = randomGuess.slice(0, 1);
      this.makeAttack(randomColumn, randomRow, userPlayer.gameboard);
      userPlayer.renderPlayerBoard();
    }
  }

  renderPlayerBoard() {
    for (let i = 0; i < this.gameboard.board.length; i++) {
      for (let j = 0; j < this.gameboard.board[i].length; j++) {
        if (this.gameboard.board[i][j] !== 'hit' &&
            this.gameboard.board[i][j] !=='miss' &&
            this.gameboard.board[i][j] !== "") {
          let square = document.getElementById(`p${j}${i}`);
          let shipName = this.gameboard.board[i][j].name.toLowerCase().replace(/\s/g, '-');
          square.style.backgroundImage = `url(${bgImages[`${shipName}.svg`]})`;
        } else if (this.gameboard.board[i][j] === 'miss') {
          let square = document.getElementById(`p${j}${i}`);
          let missIMG = document.createElement('img');
          missIMG.classList.add('targetMiss');
          missIMG.src = Circle;
          while (square.hasChildNodes()) {
            square.removeChild(square.lastChild);
          }
          square.appendChild(missIMG);
          square.style.background = 'none';
        } else if (this.gameboard.board[i][j] === 'hit') {
          let square = document.getElementById(`p${j}${i}`);
          let hitIMG = document.createElement('img');
          hitIMG.classList.add('targetHit');
          hitIMG.src = Hit;
          while (square.hasChildNodes()) {
            square.removeChild(square.lastChild);
          }
          square.appendChild(hitIMG);
          square.style.background = 'none';
        }
      }
    }
  }

  renderOpponentBoard() {
    for (let i = 0; i < this.gameboard.board.length; i++) {
      for (let j = 0; j < this.gameboard.board[i].length; j++) {
        if (this.gameboard.board[i][j] === 'miss') {
          let square = document.getElementById(`o${j}${i}`);
          let missIMG = document.createElement('img');
          missIMG.classList.add('targetMiss');
          missIMG.src = Circle;
          while (square.hasChildNodes()) {
            square.removeChild(square.lastChild);
          }
          square.appendChild(missIMG);
          square.style.background = 'none';
        } else if (this.gameboard.board[i][j] === 'hit') {
          let square = document.getElementById(`o${j}${i}`);
          let hitIMG = document.createElement('img');
          hitIMG.classList.add('targetHit');
          hitIMG.src = Hit;
          while (square.hasChildNodes()) {
            square.removeChild(square.lastChild);
          }
          square.appendChild(hitIMG);
        }
      }
    }
  }

  winGame() {
    alertGameOver(this.name);
  }
}

export { Player };
