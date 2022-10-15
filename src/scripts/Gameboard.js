class Gameboard {
  constructor(player) {
    this.player = player;
    this.board = [];
    for (let i = 0; i < 10; i++) {
      this.board.push(["", "", "", "", "", "", "", "", "", ""]);
    }
  }

  placeShip(column, row, ship) {
    this.board[column][row] = ship;
  }

  receiveAttack(column, row) {
    if (this.board[column][row] !== "") {
      this.board[column][row].hit();
      this.board[column][row] = 'hit';
    } else {
      this.board[column][row] = 'miss';
    }
  }

  reportMisses() {
    let missLog = [];
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] === 'miss') {
          missLog.push((i, j));
        }
      }
    }
    return missLog;
  }

  reportHits() {
    let hitLog = [];
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] === 'hit') {
          hitLog.push((i, j));
        }
      }
    }
    return hitLog;
  }

  checkAllShipsSunk() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] !== 'hit' &&
            this.board[i][j] !=='miss' &&
            this.board[i][j] !== "") {
          return false;
        }
      }
    }
    return true;
  }
}

export { Gameboard };