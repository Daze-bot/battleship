function gameLoad() {
  document.body.appendChild(createPlayerBoard());
}

function createPlayerBoard() {
  let playerBoard = document.createElement('div');
  playerBoard.classList.add('playerBoard');

  let rowMarkers = document.createElement('div');
  rowMarkers.classList.add('rowMarkers');
  for (let i = 0; i < 10; i++) {
    let rowLabel = document.createElement('div');
    rowLabel.classList.add('rowLabel');
    rowLabel.textContent = String.fromCharCode(97 + i).toUpperCase();
    rowMarkers.appendChild(rowLabel);
  }
  playerBoard.appendChild(rowMarkers);

  let columnMarkers = document.createElement('div');
  columnMarkers.classList.add('columnMarkers');
  for (let i = 0; i < 10; i++) {
    let columnLabel = document.createElement('div');
    columnLabel.classList.add('columnLabel');
    columnLabel.textContent = `${i + 1}`;
    columnMarkers.appendChild(columnLabel);
  }
  playerBoard.appendChild(columnMarkers);

  let gameSquares = document.createElement('div');
  gameSquares.classList.add('playerGameSquares');
  for (let i = 0; i < 100; i++) {
    let playerSquare = document.createElement('div');
    let formattedNum = (i).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    playerSquare.classList.add(formattedNum, 'playerSquare');
    gameSquares.appendChild(playerSquare);
  }
  playerBoard.appendChild(gameSquares);



  return playerBoard;
}

function createOpponentBoard() {

}

export { gameLoad };
