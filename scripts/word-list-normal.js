// Palavras com no máximo 15 letras
const normalWordList = [
    { 
        word: 'janela', 
        hint: 'Uma abertura em uma parede para deixar a luz entrar e permitir ver o exterior.' 
    },
    { 
        word: 'telefone', 
        hint: 'Um dispositivo para comunicação à distância.' 
    },
    { 
        word: 'vermelho', 
        hint: 'Uma cor primária.' 
    },
    { 
        word: 'bicicleta', 
        hint: 'Um veículo de duas rodas movido por pedais.' 
    },
    { 
        word: 'amizade', 
        hint: 'Um relacionamento afetuoso entre amigos.' 
    },
    { 
        word: 'família', 
        hint: 'Um grupo de pessoas relacionadas por laços sanguíneos ou afetivos.' 
    },
    { 
        word: 'sol', 
        hint: 'A estrela central do sistema solar.' 
    },
    { 
        word: 'livro', 
        hint: 'Um conjunto de páginas com informações ou histórias.' 
    },
    { 
        word: 'chocolate', 
        hint: 'Um doce feito a partir de sementes de cacau.' 
    },
    { 
        word: 'futebol', 
        hint: 'Um esporte jogado entre duas equipes com uma bola.' 
    },
    { 
        word: 'floresta', 
        hint: 'Uma grande área coberta por árvores e vegetação.' 
    },
    { 
        word: 'viagem', 
        hint: 'Uma jornada ou deslocamento para um lugar distante.' 
    },
    { 
        word: 'televisão', 
        hint: 'Um aparelho eletrônico para assistir a programas e filmes.' 
    },
    { 
        word: 'guitarra', 
        hint: 'Um instrumento musical com cordas.' 
    },
    { 
        word: 'fruta', 
        hint: 'Um produto comestível e geralmente doce, geralmente de uma planta.' 
    },
    { 
        word: 'oceanos', 
        hint: 'Grandes corpos de água salgada que cobrem a maior parte da Terra.' 
    },
    { 
        word: 'câmera', 
        hint: 'Um dispositivo para capturar imagens ou gravar vídeos.' 
    },
    { 
        word: 'amigo', 
        hint: 'Uma pessoa com quem se tem um vínculo afetivo próximo.' 
    },
    { 
        word: 'aventura', 
        hint: 'Uma experiência emocionante e arriscada.' 
    },
    { 
        word: 'tempo', 
        hint: 'A medida das condições atmosféricas, como sol, chuva, vento, etc.' 
    },
    { 
        word: 'escola', 
        hint: 'Um lugar onde as pessoas vão para aprender.' 
    },
    { 
        word: 'riso', 
        hint: 'Expressão facial e sonora de alegria.' 
    },
    { 
        word: 'coração', 
        hint: 'Um órgão vital que bombeia sangue pelo corpo.' 
    },
    { 
        word: 'sapato', 
        hint: 'Um item de vestuário usado nos pés para proteção e moda.' 
    },
    { 
        word: 'festa', 
        hint: 'Uma celebração ou comemoração.' 
    },
    { 
        word: 'arco-íris', 
        hint: 'Um fenômeno óptico e meteorológico que causa um espectro de luz colorida no céu.' 
    },
    { 
        word: 'cadeira', 
        hint: 'Um móvel para sentar.' 
    },
    { 
        word: 'trabalho', 
        hint: 'Atividade realizada para ganhar a vida ou alcançar um objetivo.' 
    },
    { 
        word: 'gato', 
        hint: 'Um animal de estimação com pelos e cauda.' 
    },
    { 
        word: 'cachecol', 
        hint: 'Um acessório usado para aquecer o pescoço.' 
    },
    { 
        word: 'cidade', 
        hint: 'Um centro urbano com uma grande população.' 
    },
    { 
        word: 'silêncio', 
        hint: 'A ausência de som ou ruído.' 
    },
    { 
        word: 'palavra', 
        hint: 'Uma unidade de linguagem com significado.' 
    },
    { 
        word: 'piano', 
        hint: 'Um instrumento musical de teclas.' 
    },
    { 
        word: 'nuvem', 
        hint: 'Massa visível de partículas de água ou gelo no céu.' 
    },
    { 
        word: 'corrida', 
        hint: 'Competição de velocidade entre pessoas ou veículos.' 
    },
    { 
        word: 'dança', 
        hint: 'Movimentos rítmicos do corpo em um padrão específico.' 
    },
    { 
        word: 'brinquedo', 
        hint: 'Um objeto usado para diversão, muitas vezes associado a crianças.' 
    },
    { 
        word: 'prédio', 
        hint: 'Uma estrutura construída com vários andares.' 
    },
    { 
        word: 'sorriso', 
        hint: 'Expressão facial feliz que envolve os lábios.' 
    },
    { 
        word: 'carta', 
        hint: 'Um meio de comunicação escrito, geralmente enviado pelo correio.' 
    },
    { 
        word: 'bola', 
        hint: 'Um objeto redondo usado em vários esportes e jogos.' 
    },
    { 
        word: 'sonho', 
        hint: 'Uma série de pensamentos, imagens ou emoções durante o sono.' 
    },
    { 
        word: 'praia', 
        hint: 'Uma área de areia ao longo da costa do mar ou de um lago.' 
    },
    { 
        word: 'pintura', 
        hint: 'Uma obra de arte feita com tinta sobre uma superfície.' 
    },
    { 
        word: 'música', 
        hint: 'Sons organizados de forma agradável.' 
    },
    { 
        word: 'calor', 
        hint: 'A sensação de alta temperatura.' 
    },
    { 
        word: 'sapato', 
        hint: 'Um item de vestuário usado nos pés para proteção e moda.' 
    },
    { 
        word: 'nadar', 
        hint: 'Mover-se através da água usando os membros.' 
    },
    { 
        word: 'cachoeira', 
        hint: 'Queda d\'água natural de uma altura elevada.' 
    },
    { 
        word: 'espelho', 
        hint: 'Uma superfície que reflete a luz de volta, mostrando a imagem reversa do objeto.' 
    },
    { 
        word: 'livro', 
        hint: 'Um conjunto de páginas com informações ou histórias.' 
    },
    { 
        word: 'azul', 
        hint: 'Uma cor primária.' 
    },
    { 
        word: 'cama', 
        hint: 'Um móvel usado para dormir ou descansar.' 
    },
    { 
        word: 'verão', 
        hint: 'Uma das quatro estações, caracterizada por clima quente.' 
    },
    { 
        word: 'sombra', 
        hint: 'A área escura formada quando a luz é bloqueada por um objeto opaco.' 
    },
    { 
        word: 'filme', 
        hint: 'Uma obra cinematográfica, geralmente com uma narrativa.' 
    },
    { 
        word: 'lua', 
        hint: 'O satélite natural da Terra, que reflete a luz do sol à noite.' 
    },
    { 
        word: 'arco-íris', 
        hint: 'Um fenômeno óptico e meteorológico que causa um espectro de luz colorida no céu.' 
    },
    { 
        word: 'guitarra', 
        hint: 'Um instrumento musical com cordas.' 
    },
    { 
        word: 'escola', 
        hint: 'Um lugar onde as pessoas vão para aprender.' 
    },
    { 
        word: 'pintor', 
        hint: 'Uma pessoa que cria obras de arte visual.' 
    },
    { 
        word: 'nuvem', 
        hint: 'Massa visível de partículas de água ou gelo no céu.' 
    },
    { 
        word: 'telefone', 
        hint: 'Um dispositivo para comunicação à distância.' 
    },
    { 
        word: 'amor', 
        hint: 'Um forte sentimento de afeição e carinho por outra pessoa.' 
    },
    { 
        word: 'cachecol', 
        hint: 'Um acessório usado para aquecer o pescoço.' 
    },
    { 
        word: 'escada', 
        hint: 'Uma série de degraus que conectam diferentes níveis.' 
    },
    { 
        word: 'amigo', 
        hint: 'Uma pessoa com quem se tem um vínculo afetivo próximo.' 
    },
    { 
        word: 'família', 
        hint: 'Um grupo de pessoas relacionadas por laços sanguíneos ou afetivos.' 
    },
    { 
        word: 'folha', 
        hint: 'A estrutura plana e fina encontrada em muitas plantas.' 
    },
    { 
        word: 'futebol', 
        hint: 'Um esporte jogado entre duas equipes com uma bola.' 
    },
    { 
        word: 'piano', 
        hint: 'Um instrumento musical de teclas.' 
    },
    { 
        word: 'cores', 
        hint: 'Diferentes tonalidades que são percebidas pelos olhos.' 
    },
    { 
        word: 'sol', 
        hint: 'A estrela central do sistema solar.' 
    },
    { 
        word: 'porta', 
        hint: 'Uma abertura em uma parede para entrar ou sair de um local.' 
    },
    { 
        word: 'cachorro', 
        hint: 'Um animal de estimação com quatro patas e pelos.' 
    },
    { 
        word: 'brinquedo', 
        hint: 'Um objeto usado para diversão, muitas vezes associado a crianças.' 
    },
    { 
        word: 'água', 
        hint: 'A substância líquida transparente e incolor essencial para a vida.' 
    },
    { 
        word: 'dança', 
        hint: 'Movimentos rítmicos do corpo em um padrão específico.' 
    },
    { 
        word: 'computador', 
        hint: 'Uma máquina eletrônica para processamento de dados.' 
    },
    { 
        word: 'relógio', 
        hint: 'Um dispositivo para medir o tempo.' 
    },
    { 
        word: 'filme', 
        hint: 'Uma obra cinematográfica, geralmente com uma narrativa.' 
    },
    { 
        word: 'montanha', 
        hint: 'Uma elevação natural da terra, geralmente com pico pontiagudo.' 
    },
    { 
        word: 'aniversário', 
        hint: 'A comemoração do dia em que alguém nasceu.' 
    },
    { 
        word: 'café', 
        hint: 'Uma bebida feita a partir de grãos torrados, geralmente servida quente.' 
    },
    { 
        word: 'ocasião', 
        hint: 'Um evento ou momento especial.' 
    },
    { 
        word: 'escritor', 
        hint: 'Uma pessoa que cria obras literárias, como livros e poesias.' 
    },
    { 
        word: 'perdão', 
        hint: 'A ação de desculpar ou libertar alguém de uma obrigação.' 
    },
    { 
        word: 'estrela', 
        hint: 'Um objeto celeste luminoso no céu noturno.' 
    },
    { 
        word: 'jardim', 
        hint: 'Uma área cultivada com plantas e flores.' 
    },
    { 
        word: 'passeio', 
        hint: 'Um curto trajeto a pé para lazer ou exercício.' 
    },
    { 
        word: 'teatro', 
        hint: 'Um local para apresentações ao vivo, como peças e shows.' 
    },
    { 
        word: 'beleza', 
        hint: 'A qualidade de ser agradável à vista ou ao ouvido.' 
    },
    { 
        word: 'trabalho', 
        hint: 'Atividade realizada para ganhar a vida ou alcançar um objetivo.' 
    },
    { 
        word: 'escova', 
        hint: 'Um objeto com cerdas usado para limpar ou pentear.' 
    },
    { 
        word: 'flores', 
        hint: 'As partes reprodutivas das plantas, frequentemente coloridas e perfumadas.' 
    },
    { 
        word: 'vento', 
        hint: 'O ar em movimento, especialmente uma corrente natural de ar.' 
    },
    { 
        word: 'verde', 
        hint: 'Uma cor que é uma mistura de azul e amarelo.' 
    },
    { 
        word: 'corrida', 
        hint: 'Competição de velocidade entre pessoas ou veículos.' 
    },
    { 
        word: 'férias', 
        hint: 'Um período de descanso ou viagem fora do trabalho ou da escola.' 
    },
    { 
        word: 'televisão', 
        hint: 'Um aparelho eletrônico para assistir a programas e filmes.' 
    },
    { 
        word: 'gelo', 
        hint: 'Água congelada em forma sólida.' 
    },
    { 
        word: 'céu', 
        hint: 'A parte da atmosfera acima da Terra, onde o sol, a lua e as estrelas são visíveis.' 
    },
    { 
        word: 'chapéu', 
        hint: 'Um acessório usado na cabeça para proteção ou estilo.' 
    },
    { 
        word: 'arte', 
        hint: 'Expressão criativa de ideias e imagens.' 
    },
    { 
        word: 'comida', 
        hint: 'Substância nutritiva consumida para sustento e prazer.' 
    },
    { 
        word: 'conversa', 
        hint: 'Interação verbal entre duas ou mais pessoas.' 
    },
    { 
        word: 'rio', 
        hint: 'Um curso d\'água natural que flui para um oceano ou lago.' 
    },
    { 
        word: 'estudo', 
        hint: 'A ação de adquirir conhecimento por meio da aprendizagem.' 
    },
    { 
        word: 'noite', 
        hint: 'O período de escuridão entre o pôr do sol e o amanhecer.' 
    },
];