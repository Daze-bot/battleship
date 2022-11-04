function newGame() {
  let newGame = document.createElement('div');
  newGame.classList.add('newGameOptions');

  let playerNameSelection = document.createElement('form');
  playerNameSelection.classList.add('playerNameSelection');
  playerNameSelection.setAttribute('action', "");
  playerNameSelection.setAttribute('autocomplete', 'off');
  newGame.appendChild(playerNameSelection);

  let nameInput = document.createElement('div');
  nameInput.classList.add('nameInput');
  playerNameSelection.appendChild(nameInput);

  let label = document.createElement('label');
  label.setAttribute('for', 'userPlayerName');
  label.textContent = 'Enter Your Name:'
  nameInput.appendChild(label);

  let input = document.createElement('input');
  input.name = 'userPlayerName';
  input.type = 'text';
  input.id = 'userPlayerName';
  input.maxLength = '12';
  nameInput.appendChild(input);
  let playerName = localStorage.getItem('battleshipPlayerName') || "";
  input.value = playerName;

  let playBtn = document.createElement('button');
  playBtn.classList.add('startGame');
  playBtn.type = 'button';
  playBtn.textContent = "Start Game!";
  playerNameSelection.appendChild(playBtn);

  return newGame;
}

function shipPlacementHelper() {
  let helperDiv = document.createElement('div');
  helperDiv.classList.add('placementHelper');

  let btn = document.createElement('button');
  btn.classList.add('helperBtn', 'horizontal');
  btn.textContent = "Rotate Ship";
  btn.addEventListener('click', () => {
    btn.classList.toggle('horizontal');
  })
  helperDiv.appendChild(btn);

  let text = document.createElement('p');
  text.classList.add('helperText');
  helperDiv.appendChild(text);

  return helperDiv;
}

function customAlertScreen() {
  let alertBox = document.createElement('div');
  alertBox.classList.add('alertBox', 'hidden');

  let textBox = document.createElement('div');
  textBox.classList.add('alertTextBox');
  alertBox.appendChild(textBox);

  return alertBox;
}

function alertGameStart() {
  let alertBox = document.querySelector('.alertBox');
  alertBox.classList.remove('hidden');

  let textBox = document.querySelector('.alertTextBox');
  textBox.textContent = 'Click on an enemy square to launch your attack!';

  setTimeout(hideAlert, 4000);
}

function alertSunkShip(player, shipName) {
  let alertBox = document.querySelector('.alertBox');
  alertBox.classList.remove('hidden');

  let textBox = document.querySelector('.alertTextBox');
  textBox.textContent = `${player}'s ${shipName} has been sunk!`;

  setTimeout(hideAlert, 1500);
}

function alertGameOver(playerName) {
  let alertBox = document.querySelector('.alertBox');
  alertBox.classList.remove('hidden');
  alertBox.classList.add('winnerScreen');

  let textBox = document.querySelector('.alertTextBox');
  textBox.textContent = `${playerName} Wins!`;

  let resetBtn = document.createElement('button');
  resetBtn.classList.add('resetGame');
  resetBtn.textContent = 'New Game';

  resetBtn.addEventListener('click', () => {
    window.location.reload();
  })

  alertBox.appendChild(resetBtn);
}

function hideAlert() {
  let alertBox = document.querySelector('.alertBox');
  if (alertBox.classList.contains('winnerScreen')) {
    return;
  }
  alertBox.classList.add('hidden');
}

export {
  newGame,
  customAlertScreen,
  alertGameStart,
  alertSunkShip,
  alertGameOver,
  hideAlert,
  shipPlacementHelper,
 };