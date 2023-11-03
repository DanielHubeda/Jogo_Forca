// scripts/theme-init.js

// Função para obter o tema atual do localStorage ou retornar um tema padrão
const getCurrentTheme = () => {
    return localStorage.getItem('currentTheme') || 'theme-normal';
};

// Função para exibir os elementos após aplicar o tema
const showElements = () => {
    document.body.classList.remove('hide');
};

// Função para aplicar o tema ao carregar a página
const applyTheme = (theme) => {
    document.getElementById('theme-stylesheet').setAttribute('href', `estilos/${theme}.css`);
};

// Função para configurar o tema inicial ao carregar a página
const applyInitialTheme = () => {
    const currentTheme = getCurrentTheme();
    applyTheme(currentTheme);
    
    // Verifica se o elemento com o ID 'theme' existe antes de tentar acessá-lo
    const themeSelect = document.getElementById('theme');
    if (themeSelect) {
        themeSelect.value = currentTheme;
    }

    // Adiciona um ouvinte de evento para o carregamento da folha de estilo
    const themeStylesheet = document.getElementById('theme-stylesheet');
    if (themeStylesheet) {
        themeStylesheet.addEventListener('load', showElements);
    }

    // Adicione um pequeno atraso para garantir que os estilos sejam aplicados antes de mostrar os elementos
    setTimeout(() => {
        showElements();
    }, 20);
};

// Chame a função ao carregar a página
window.addEventListener('DOMContentLoaded', applyInitialTheme);

// Adicione esta função para lidar com a mudança de tema
const changeTheme = (theme) => {
    console.log('Changing theme to:', theme);
    applyTheme(theme);
    showElements();
    localStorage.setItem('currentTheme', theme);
};