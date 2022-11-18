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
    this.allShips = [this.carrier, this.battleship, this.destroyer, this.submarine, this.patrolBoat];
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
    if (this.gameboard.checkAllShipsSunk() === true) {
      return;
    }
    let woundedShip = userPlayer.allShips.some(ship => {
      return ship.partialHit();
    })
    if (woundedShip === true) {
      let hitLocations = [];
      for (let column = 0; column < userPlayer.gameboard.board.length; column++) {
        for (let row = 0; row < userPlayer.gameboard.board[column].length; row++) {
          if (userPlayer.gameboard.board[column][row] === 'hit') {
            hitLocations.push(`${column}${row}`);
          }
        }
      }
      let woundedLocations = [];
      hitLocations.forEach(location => {
        let hitColumn = Number(location.slice(0, 1));
        let hitRow = Number(location.slice(1, 2));
        if (hitColumn === 0 && hitRow === 0) {
          if (userPlayer.gameboard.containsShip(hitColumn + 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow + 1)) {
            woundedLocations.push(location);
          }
        } else if (hitColumn === 0 && hitRow === 9) {
          if (userPlayer.gameboard.containsShip(hitColumn + 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow - 1)) {
            woundedLocations.push(location);
          }
        } else if (hitColumn === 9 && hitRow === 0) {
          if (userPlayer.gameboard.containsShip(hitColumn - 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow + 1)) {
            woundedLocations.push(location);
          }
        } else if (hitColumn === 9 && hitRow === 9) {
          if (userPlayer.gameboard.containsShip(hitColumn - 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow - 1)) {
            woundedLocations.push(location);
          }
        } else if (hitColumn === 0) {
          if (userPlayer.gameboard.containsShip(hitColumn + 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow + 1) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow - 1)) {
            woundedLocations.push(location);
          }
        } else if (hitColumn === 9) {
          if (userPlayer.gameboard.containsShip(hitColumn - 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow + 1) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow - 1)) {
            woundedLocations.push(location);
          }
        } else if (hitRow === 0) {
          if (userPlayer.gameboard.containsShip(hitColumn + 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn - 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow + 1)) {
            woundedLocations.push(location);
          }
        } else if (hitRow === 9) {
          if (userPlayer.gameboard.containsShip(hitColumn + 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn - 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow - 1)) {
            woundedLocations.push(location);
          }
        } else {
          if (userPlayer.gameboard.containsShip(hitColumn + 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn - 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow + 1) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow - 1)) {
            woundedLocations.push(location);
          }
        }
      })
      let randomWound = woundedLocations[Math.floor(Math.random() * woundedLocations.length)];
      let woundColumn = Number(randomWound.slice(0, 1));
      let woundRow = Number(randomWound.slice(1, 2));
      let woundGuesses = [];
      if (woundColumn === 0 && woundRow === 0) {
        woundGuesses.push(`${woundColumn + 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow + 1}`);
      } else if (woundColumn === 0 && woundRow === 9) {
        woundGuesses.push(`${woundColumn + 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow - 1}`);
      } else if (woundColumn === 9 && woundRow === 0) {
        woundGuesses.push(`${woundColumn - 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow + 1}`);
      } else if (woundColumn === 9 && woundRow === 9) {
        woundGuesses.push(`${woundColumn - 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow - 1}`);
      } else if (woundColumn === 0) {
        woundGuesses.push(`${woundColumn + 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow + 1}`);
        woundGuesses.push(`${woundColumn}${woundRow - 1}`);
      } else if (woundColumn === 9) {
        woundGuesses.push(`${woundColumn - 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow + 1}`);
        woundGuesses.push(`${woundColumn}${woundRow - 1}`);
      } else if (woundRow === 0) {
        woundGuesses.push(`${woundColumn + 1}${woundRow}`);
        woundGuesses.push(`${woundColumn - 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow + 1}`);
      } else if (woundRow === 9) {
        woundGuesses.push(`${woundColumn + 1}${woundRow}`);
        woundGuesses.push(`${woundColumn - 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow - 1}`);
      } else {
        woundGuesses.push(`${woundColumn + 1}${woundRow}`);
        woundGuesses.push(`${woundColumn - 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow + 1}`);
        woundGuesses.push(`${woundColumn}${woundRow - 1}`);
      }      
      let validGuesses = woundGuesses.filter(item => {
        let itemColumn = item.slice(0, 1);
        let itemRow = item.slice(1, 2);
        return userPlayer.gameboard.notYetGuessed(itemColumn, itemRow);
      })

      console.log(validGuesses);

      let randomWoundGuess = validGuesses[Math.floor(Math.random() * validGuesses.length)];
      this.makeAttack(randomWoundGuess.slice(0, 1), randomWoundGuess.slice(1, 2), userPlayer.gameboard)
      userPlayer.renderPlayerBoard();
    } else {
      let notGuessed = []
      for (let i = 0; i < userPlayer.gameboard.board.length; i++) {
        for (let j = 0; j < userPlayer.gameboard.board[i].length; j++) {
          if (userPlayer.gameboard.notYetGuessed(i, j) === true) {
            notGuessed.push(`${i}${j}`);
          }
        }
      }
      if (notGuessed.length > 0) {
        let randomGuess = notGuessed[Math.floor(Math.random() * notGuessed.length)];
        let randomColumn = randomGuess.slice(0, 1);
        let randomRow = randomGuess.slice(1, 2);
        this.makeAttack(randomColumn, randomRow, userPlayer.gameboard);
        userPlayer.renderPlayerBoard();
      }
    }
  }

  renderPlayerBoard() {
    for (let i = 0; i < this.gameboard.board.length; i++) {
      for (let j = 0; j < this.gameboard.board[i].length; j++) {
        if (this.gameboard.board[i][j] !== 'hit' &&
            this.gameboard.board[i][j] !== 'miss' &&
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
