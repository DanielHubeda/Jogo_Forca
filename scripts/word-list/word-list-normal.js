// Palavras com no máximo 12 letras
const normalWordList = [
    {
        word: 'bicampeonato',
        hint: 'Conquista consecutiva de dois campeonatos.',
    },
    {
        word: 'cartilaginoso',
        hint: 'Relativo à cartilagem, tecido elástico nos vertebrados.',
    },
    {
        word: 'fotossíntese',
        hint: 'Processo de conversão de luz solar em energia química nas plantas.',
    },
    {
        word: 'luminosidade',
        hint: 'Qualidade de emitir luz ou brilho.',
    },
    {
        word: 'metamorfose',
        hint: 'Transformação completa de uma forma para outra.',
    },
    {
        word: 'oceanografia',
        hint: 'Estudo dos oceanos, incluindo suas propriedades e fenômenos.',
    },
    {
        word: 'paralelepípedo',
        hint: 'Tipo de bloco utilizado em pavimentação de ruas.',
    },
    {
        word: 'tecnologia',
        hint: 'Conjunto de conhecimentos e técnicas utilizados na produção de bens e serviços.',
    },
    {
        word: 'precipitação',
        hint: 'Forma de água, líquida ou sólida, que cai da atmosfera.',
    },
    {
        word: 'quadrilátero',
        hint: 'Figura geométrica com quatro lados.',
    },
    {
        word: 'resiliência',
        hint: 'Capacidade de se recuperar após adversidades.',
    },
    {
        word: 'sorveteria',
        hint: 'Local onde são vendidos sorvetes.',
    },
    {
        word: 'tangerina',
        hint: 'Fruta cítrica, semelhante à laranja.',
    },
    {
        word: 'ventilador',
        hint: 'Dispositivo para circular o ar.',
    },
    {
        word: 'biblioteca',
        hint: 'Local onde são armazenados e organizados livros.',
    },
    {
        word: 'diagnóstico',
        hint: 'Determinação da natureza de uma doença ou condição.',
    },
    {
        word: 'ecossistema',
        hint: 'Comunidade de organismos vivos e seu ambiente.',
    },
    {
        word: 'fantasma',
        hint: 'Suposta aparição de uma pessoa falecida.',
    },
    {
        word: 'galáxia',
        hint: 'Sistema massivo de estrelas, nuvens de gás e poeira cósmica.',
    },
    {
        word: 'hipotenusa',
        hint: 'Lado mais longo de um triângulo retângulo.',
    },
    {
        word: 'incandescência',
        hint: 'Emissão de luz pelo calor.',
    },
    {
        word: 'jardineiro',
        hint: 'Pessoa que cuida de jardins.',
    },
    {
        word: 'linguagem',
        hint: 'Sistema de comunicação utilizado pelos seres humanos.',
    },
    {
        word: 'montanha',
        hint: 'Elevação natural de terreno, geralmente mais alta e íngreme do que uma colina.',
    },
    {
        word: 'necessidade',
        hint: 'Aquilo que é essencial ou obrigatório.',
    },
    {
        word: 'ocultismo',
        hint: 'Conjunto de práticas e crenças relacionadas ao sobrenatural.',
    },
    {
        word: 'palpite',
        hint: 'Opinião ou suposição sobre algo.',
    },
    {
        word: 'silhueta',
        hint: 'Contorno de uma forma, especialmente quando é escura ou sombreada.',
    },
    {
        word: 'telescópio',
        hint: 'Instrumento óptico para observar objetos distantes.',
    },
    {
        word: 'avenida',
        hint: 'Uma rua larga, geralmente com árvores ao longo dos lados.',
    },
    {
        word: 'barragem',
        hint: 'Construção para reter água e criar um reservatório.',
    },
    {
        word: 'caminhante',
        hint: 'Pessoa que anda a pé, especialmente por lazer ou exercício.',
    },
    {
        word: 'descoberta',
        hint: 'Ato de encontrar algo pela primeira vez ou revelar algo previamente desconhecido.',
    },
    {
        word: 'eletrônica',
        hint: 'Ramo da física que lida com o controle de elétrons em dispositivos e sistemas.',
    },
    {
        word: 'família',
        hint: 'Grupo de pessoas relacionadas por laços de sangue ou afeto.',
    },
    {
        word: 'hospedagem',
        hint: 'Acomodação ou alojamento, especialmente em hotéis ou pousadas.',
    },
    {
        word: 'ilustre',
        hint: 'Famoso e respeitado por suas realizações.',
    },
    {
        word: 'jardineiro',
        hint: 'Pessoa que cuida e cultiva um jardim.',
    },
    {
        word: 'karaokê',
        hint: 'Entretenimento japonês onde as pessoas cantam músicas junto com uma gravação instrumental.',
    },
    {
        word: 'lampejo',
        hint: 'Brilho rápido ou súbita manifestação de algo.',
    },
    {
        word: 'mochila',
        hint: 'Saco usado para transportar itens nas costas, geralmente durante atividades ao ar livre.',
    },
    {
        word: 'naufrágio',
        hint: 'Afundamento ou destruição de um navio no mar.',
    },
    {
        word: 'ocorrência',
        hint: 'Acontecimento ou evento que ocorre em determinado momento.',
    },
    {
        word: 'radiante',
        hint: 'Que emana luz ou energia intensa.',
    },
    {
        word: 'serenidade',
        hint: 'Estado de tranquilidade e calma.',
    },
    {
        word: 'tecnologia',
        hint: 'Conjunto de conhecimentos e técnicas utilizados na produção de bens e serviços.',
    },
    {
        word: 'uivante',
        hint: 'Que emite um som prolongado e agudo semelhante a um uivo.',
    },
    {
        word: 'vibrante',
        hint: 'Que vibra ou pulsa com intensidade.',
    },
    {
        word: 'xerife',
        hint: 'Oficial encarregado da aplicação da lei em algumas jurisdições.',
    },
    {
        word: 'yoga',
        hint: 'Prática física, mental e espiritual originária da Índia.',
    },
    {
        word: 'zeppelin',
        hint: 'Tipo de dirigível ou aeronave mais leve que o ar.',
    },
    {
        word: 'bizarro',
        hint: 'Estranho, incomum de uma maneira desconcertante.',
    },
    {
        word: 'cenário',
        hint: 'Ambiente ou contexto em que algo se desenrola.',
    },
    {
        word: 'denso',
        hint: 'Que possui alta concentração de massa ou substância.',
    },
    {
        word: 'elogio',
        hint: 'Expressão de apreço, admiração ou reconhecimento.',
    },
    {
        word: 'fachada',
        hint: 'Parte externa ou frontal de um edifício.',
    },
    {
        word: 'harmonia',
        hint: 'Equilíbrio e acordo entre partes ou elementos.',
    },
    {
        word: 'lúcido',
        hint: 'Claro na mente, capaz de pensar com clareza.',
    },
    {
        word: 'nostalgia',
        hint: 'Sentimento de saudade ou desejo por algo do passado.',
    },
    {
        word: 'obscuro',
        hint: 'Que não é facilmente compreendido ou percebido.',
    },
    {
        word: 'paradoxo',
        hint: 'Ideia ou declaração que parece contraditória, mas pode ser verdadeira.',
    },
    {
        word: 'resiliente',
        hint: 'Capaz de se recuperar rapidamente de dificuldades.',
    },
    {
        word: 'sutil',
        hint: 'Delicado, não óbvio, agindo de maneira quase imperceptível.',
    },
    {
        word: 'tênue',
        hint: 'Fraco, delicado, que tem pouca substância ou intensidade.',
    },
    {
        word: 'vórtice',
        hint: 'Movimento espiral de fluido, como água ou ar.',
    },
    {
        word: 'cúmplice',
        hint: 'Pessoa que participa ou compactua em uma ação criminosa ou segredo.',
    },
    {
        word: 'delírio',
        hint: 'Estado de excitação ou euforia.',
    },
    {
        word: 'girassol',
        hint: 'Planta que se volta em direção ao sol.',
    },
    {
        word: 'hipótese',
        hint: 'Suposição ou conjectura.',
    },
    {
        word: 'jardim',
        hint: 'Área cultivada com plantas, flores e árvores para fins ornamentais.',
    },
    {
        word: 'luminar',
        hint: 'Iluminar com luz intensa.',
    },
    {
        word: 'melodia',
        hint: 'Sequência agradável de sons musicais.',
    },
    {
        word: 'notável',
        hint: 'Digno de nota ou consideração; extraordinário.',
    },
    {
        word: 'ocorrer',
        hint: 'Acontecer ou ter lugar.',
    },
    {
        word: 'peregrino',
        hint: 'Viajante que percorre terras estrangeiras.',
    },
    {
        word: 'quimono',
        hint: 'Vestimenta tradicional japonesa.',
    },
    {
        word: 'recluso',
        hint: 'Que vive em isolamento; afastado da sociedade.',
    },
    {
        word: 'sábio',
        hint: 'Pessoa com grande conhecimento e sabedoria.',
    },
    {
        word: 'usurpar',
        hint: 'Tomar posse ou uso de algo ilegalmente.',
    },
    {
        word: 'vulcão',
        hint: 'Abertura na crosta terrestre por onde emergem lava, cinzas e gases vulcânicos.',
    },
    {
        word: 'xadrez',
        hint: 'Jogo de tabuleiro estratégico para dois jogadores.',
    },
];