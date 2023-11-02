const setDifficulty = (difficulty) => {
    localStorage.setItem('currentDifficulty', difficulty);
    window.location.href = 'index.html';  // Redireciona para a página principal do jogo
};