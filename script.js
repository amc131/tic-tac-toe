function createBoard() {
  const gameBoardContainer = document.querySelector('.game-board-container');
  for (let i = 0; i < 9; i++) {
    const gameTile = document.createElement('div');
    gameTile.classList.add('game-tile');
    gameBoardContainer.appendChild(gameTile);
  }
}

window.onload = createBoard;
