import { gameLoad } from './DOMgameLoad';
import { gameLoop } from './gameLoop';
import { newGame } from './DOMscreens';

function initLoad() {
  document.body.appendChild(createHeader());
  document.body.appendChild(newGame());

  let startGame = document.querySelector('.startGame');
  startGame.addEventListener('click', () => {
    let playerName = document.querySelector('#userPlayerName').value;
    if (playerName === "") {
      playerName = 'User Player';
    }

    console.log(playerName);

    let newGameOptions = document.querySelector('.newGameOptions');
    document.body.removeChild(newGameOptions);

    gameLoad(playerName);
    gameLoop(playerName);
  })
}

function createHeader() {
  let gameName = document.createElement('header');
  gameName.classList.add('gameName');
  gameName.textContent = 'BATTLESHIP';
  return gameName;
}

export { initLoad };