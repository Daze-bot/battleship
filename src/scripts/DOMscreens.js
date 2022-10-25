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

  let playBtn = document.createElement('button');
  playBtn.classList.add('startGame');
  playBtn.type = 'button';
  playBtn.textContent = "Start Game!";
  playerNameSelection.appendChild(playBtn);

  return newGame;
}

export { newGame };