// Selecionando elementos do DOM
const hangmanImage = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");

// Variáveis do jogo
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

// Função para reiniciar o jogo
const resetGame = () => {
    // Resetando todas as variáveis do jogo e elementos da interface do usuário (UI)
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);

    // Gerando a exibição inicial para a palavra
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
}

// Função para obter uma palavra aleatória
const getRandomWord = (difficulty) => {
    // Carregar banco de palavras com base na dificuldade
    const wordList = difficulty === 'hard' ? hardWordList : normalWordList;

    // Verificando se a tela é menor que 782 pixels
    const isSmallScreen = window.innerWidth < 782;

    // Filtrando a lista de palavras com base na largura da tela
    const filteredWordList = isSmallScreen
        ? wordList.filter(entry => entry.word.length <= 8)
        : wordList;

    // Selecionando uma palavra e dica aleatórias da lista filtrada
    const { word, hint } = filteredWordList[Math.floor(Math.random() * filteredWordList.length)];
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;

    // Resetando o jogo
    resetGame();
}

// Função para o fim do jogo (vitória ou derrota)
const gameOver = (isVictory) => {
    // Após 600ms do término do jogo, mostrando um modal com detalhes relevantes
    setTimeout(() => {
        const modalText = isVictory ? `Você encontrou a palavra:` : `A palavra correta era:`;
        gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Parabéns!' : 'Fim de Jogo!'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    }, 300);
}

// Função para remover acentos de uma letra
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// Função para inicializar o jogo ao clicar em uma letra
const initGame = (button, clickedLetter) => {
    const letterToCheck = removeAccents(clickedLetter.toLowerCase());

    // Verificar se a letra clicada existe na palavra atual
    let letterFound = false;

    [...currentWord].forEach((letter, index) => {
        const normalizedLetter = removeAccents(letter.toLowerCase());

        if (normalizedLetter === letterToCheck) {
            correctLetters.push(letter);
            wordDisplay.querySelectorAll("li")[index].innerText = letter;
            wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            letterFound = true;
        }
    });

    if (!letterFound) {
        // Se a letra clicada não existir, atualizar o contador de palpites errados e a imagem da forca
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }

    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Chamar a função gameOver se uma dessas condições for atendida
    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
};

// Criar botões do teclado
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

// Armazenar todos os botões de letra em um array
const letterButtons = Array.from(keyboardDiv.querySelectorAll("button"));

// Função para lidar com o evento de pressionar uma tecla
const handleKeyDown = (event) => {
    const pressedKey = event.key.toLowerCase();

    // Verificar se a tecla pressionada é uma letra e não está desativada
    if (/^[a-z]$/.test(pressedKey)) {
        const correspondingButton = letterButtons.find(button => button.innerText.toLowerCase() === pressedKey);
        
        // Se um botão com a letra correspondente for encontrado, simular um clique
        if (correspondingButton && !correspondingButton.disabled) {
            initGame(correspondingButton, pressedKey.toUpperCase());
        }
    }
};

// Adicione a função setDifficulty para a página principal do jogo
const setDifficulty = (difficulty) => {
    localStorage.setItem('currentDifficulty', difficulty);
    getRandomWord(difficulty);
};

// Iniciar o jogo com a dificuldade armazenada localmente
const storedDifficulty = localStorage.getItem('currentDifficulty') || 'normal';
getRandomWord(storedDifficulty);
playAgainBtn.addEventListener("click", () => getRandomWord(storedDifficulty));

// Adicionar ouvinte de evento de pressionar uma tecla ao documento
document.addEventListener("keydown", handleKeyDown);

// Inicializar o jogo com a dificuldade padrão
getRandomWord(storedDifficulty);