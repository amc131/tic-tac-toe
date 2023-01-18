function clickLogic() {
  const markerX = '&#10060';
  const markerCircle = '&#11093';
  const gameTiles = document.querySelectorAll('.game-tile');
  for (let i = 0; i < gameTiles.length; i++) {
    gameTiles[i].addEventListener('click', () => {
      gameTiles[i].innerHTML = markerCircle;
    });
  }
}

function createBoard() {
  const gameBoardContainer = document.querySelector('.game-board-container');
  for (let i = 0; i < 9; i++) {
    const gameTile = document.createElement('div');
    gameTile.classList.add('game-tile');
    gameBoardContainer.appendChild(gameTile);
  }
  clickLogic();
}

window.onload = createBoard;
