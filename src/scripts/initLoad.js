import { gameLoad } from './DOMgameLoad';
import { gameLoop } from './gameLoop';
import { newGame, customAlertScreen } from './DOMscreens';

function initLoad() {
  document.body.appendChild(createHeader());
  document.body.appendChild(newGame());
  document.body.appendChild(customAlertScreen());

  let startGame = document.querySelector('.startGame');
  startGame.addEventListener('click', () => initiateGame());

  let nameInput = document.querySelector('#userPlayerName');
  nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      initiateGame();
    }
  })
}

function initiateGame() {
  let playerName = document.querySelector('#userPlayerName').value;
  if (playerName === "") {
    playerName = 'User Player';
  }

  window.localStorage.setItem('battleshipPlayerName', `${playerName}`);

  let newGameOptions = document.querySelector('.newGameOptions');
  document.body.removeChild(newGameOptions);

  gameLoad(playerName);
  gameLoop(playerName);
}

function createHeader() {
  let gameName = document.createElement('header');
  gameName.classList.add('gameName');
  gameName.textContent = 'BATTLESHIP';
  return gameName;
}

export { initLoad };