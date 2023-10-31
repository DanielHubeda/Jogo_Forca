const wordList = [
    {
        word: "eu",
        hint: "Não é você e não é ele."
    },
    {
        word: "tio",
        hint: "O irmão do meu pai."
    },
    {
        word: "abelha",
        hint: "Animal que produz mel.",
    },
    {
        word: "pobre",
        hint: "O contrário de rico."
    },
    {
        word: "chuva",
        hint: "Cai em pé e corre deitada."
    },
    {
        word: "palmeiras",
        hint: "Time sem mundial."
    },
    {
        word: "computador",
        hint: "Máquina que processa dados."
    },
    {
        word: "viagem",
        hint: "Jornada ou deslocamento de um lugar para outro."
    },
    {
        word: "felicidade",
        hint: "Estado emocional de grande contentamento."
    },
    {
        word: "astronomia",
        hint: "Estudo dos corpos celestes."
    },
    {
        word: "escultura",
        hint: "Arte de esculpir formas tridimensionais."
    },
    {
        word: "girafa",
        hint: "Animal de pescoço longo."
    },
    {
        word: "ocelote",
        hint: "Felino selvagem das Américas."
    },
    {
        word: "paralelepípedo",
        hint: "Tipo de pavimento retangular."
    },
    {
        word: "saudade",
        hint: "Sentimento nostálgico."
    },
    {
        word: "cachoeira",
        hint: "Queda d'água natural."
    },
    {
        word: "quasar",
        hint: "Fonte astronômica de energia intensa."
    },
    {
        word: "fantasia",
        hint: "Roupa imaginária para eventos."
    },
    {
        word: "oceano",
        hint: "Corpo de água salgada muito extenso."
    },
    {
        word: "esmeralda",
        hint: "Pedra verde preciosa."
    },
    {
        word: "sorvete",
        hint: "Gelado e doce, vem em muitos sabores."
    },
    {
        word: "cacto",
        hint: "Planta adaptada a ambientes secos."
    },
    {
        word: "violinista",
        hint: "Pessoa que toca violino."
    },
    {
        word: "aventura",
        hint: "Jornada emocionante ou arriscada."
    },
    {
        word: "oportunidade",
        hint: "Momento favorável para algo."
    },
    {
        word: "radiante",
        hint: "Brilhante e cheio de energia."
    },
    {
        word: "piano",
        hint: "Instrumento musical de teclas."
    },
    {
        word: "encantador",
        hint: "Algo ou alguém que cativa."
    },
    {
        word: "miragem",
        hint: "Ilusão óptica de algo inexistente."
    },
    {
        word: "astronauta",
        hint: "Viaja para o espaço."
    },
    {
        word: "tecnologia",
        hint: "Conjunto de conhecimentos e técnicas."
    },
    {
        word: "jardineiro",
        hint: "Cuida de plantas e jardins."
    },
    {
        word: "deserto",
        hint: "Área seca com pouca vegetação."
    },
    {
        word: "maravilha",
        hint: "Algo extraordinário e surpreendente."
    },
    {
        word: "escalada",
        hint: "Subir em rochas ou montanhas."
    },
    {
        word: "enigma",
        hint: "Algo misterioso e difícil de entender."
    },
    {
        word: "bambu",
        hint: "Planta de caule oco e resistente."
    },
    {
        word: "sonhador",
        hint: "Alguém com muitos sonhos e aspirações."
    },
    {
        word: "monumento",
        hint: "Estrutura que representa um evento ou pessoa."
    },
    {
        word: "reflexo",
        hint: "Imagem refletida em uma superfície."
    },
    {
        word: "melodia",
        hint: "Sequência agradável de sons."
    },
    {
        word: "miraculoso",
        hint: "Algo extraordinariamente surpreendente."
    },
    {
        word: "silhueta",
        hint: "Contorno escuro de uma forma."
    },
    {
        word: "gargalhada",
        hint: "Riso alto e contagiante."
    },
    {
        word: "serenidade",
        hint: "Estado de calma e tranquilidade."
    },
    {
        word: "montanha-russa",
        hint: "Atração de parque de diversões com altos e baixos."
    },
    {
        word: "paradoxo",
        hint: "Afirmação aparentemente contraditória."
    },
    {
        word: "alquimia",
        hint: "Antiga prática de transformar metais em ouro."
    },
    {
        word: "luminoso",
        hint: "Que emite luz."
    },
    {
        word: "paradoxo",
        hint: "Afirmação que parece contraditória, mas pode ser verdadeira."
    },
    {
        word: "sinuoso",
        hint: "Caminho que faz curvas e reviravoltas."
    },
    {
        word: "eficaz",
        hint: "Algo que produz o efeito desejado."
    },
    {
        word: "voraz",
        hint: "Que devora com avidez."
    },
    {
        word: "efervescente",
        hint: "Que libera bolhas de gás, geralmente em líquidos."
    },
    {
        word: "eloquente",
        hint: "Expressa-se de forma persuasiva e articulada."
    },
    {
        word: "imponente",
        hint: "Que impõe respeito pela sua grandeza ou beleza."
    },
    {
        word: "resiliente",
        hint: "Capaz de se recuperar rapidamente após dificuldades."
    },
    {
        word: "sibilante",
        hint: "Som produzido pela pronúncia de 's' ou 'ss'."
    },
    {
        word: "umbra",
        hint: "Parte mais escura da sombra durante um eclipse."
    },
    {
        word: "efusivo",
        hint: "Expressa emoção ou entusiasmo de forma intensa."
    },
    {
        word: "vicissitude",
        hint: "Mudança imprevista de circunstâncias ou sorte."
    },
    {
        word: "denodado",
        hint: "Corajoso e determinado."
    },
    {
        word: "prolixo",
        hint: "Que se expressa de maneira excessivamente longa ou detalhada."
    },
    {
        word: "obnubilar",
        hint: "Tornar obscurecido ou confuso."
    },
    {
        word: "incipiente",
        hint: "Em estágio inicial de desenvolvimento."
    },
    {
        word: "sesquipedaliano",
        hint: "Que contém muitas sílabas ou palavras longas."
    },
    {
        word: "fulgurante",
        hint: "Brilhante e reluzente, como um relâmpago."
    },
    {
        word: "laconismo",
        hint: "Expressão verbal mínima, uso mínimo de palavras."
    },
    {
        word: "quididade",
        hint: "A qualidade ou natureza essencial de algo."
    },
    {
        word: "frugalidade",
        hint: "Hábito de viver com simplicidade e parcimônia."
    },
    {
        word: "nefelibata",
        hint: "Pessoa que vive nas nuvens, alheia à realidade."
    },
    {
        word: "placidamente",
        hint: "De maneira calma e tranquila."
    },
    {
        word: "crepuscular",
        hint: "Relativo ao amanhecer ou anoitecer."
    },
    {
        word: "circunloquio",
        hint: "Expressar-se de maneira indireta ou longa demais."
    },
    {
        word: "paradigma",
        hint: "Modelo ou padrão a ser seguido."
    },
    {
        word: "eficaz",
        hint: "Capaz de produzir o efeito desejado."
    },
    {
        word: "resplandescente",
        hint: "Brilhando de forma brilhante, radiante."
    },
    {
        word: "serendipidade",
        hint: "A ocorrência e desenvolvimento de eventos por acaso de maneira feliz ou benéfica."
    },
    {
        word: "justapor",
        hint: "Colocar ou lidar com algo próximo para efeito de contraste."
    },
    {
        word: "quixotesco",
        hint: "Extremamente idealista, irrealista e impraticável."
    },
    {
        word: "ambrosial",
        hint: "Excepcionalmente agradável ao paladar ou olfato, divino."
    },
    {
        word: "luminoso",
        hint: "Emitindo luz sem ser causada pelo calor."
    },
    {
        word: "efulgente",
        hint: "Brilhante, radiante."
    },
    {
        word: "nebuloso",
        hint: "Coberto por uma névoa densa, pouco claro."
    },
    {
        word: "sagaz",
        hint: "Pessoa astuta, perspicaz."
    },
    {
        word: "obnubilar",
        hint: "Tornar obscuro, confundir."
    },
    {
        word: "eflorescente",
        hint: "Florescendo ou desenvolvendo-se de forma vibrante."
    },
    {
        word: "sereno",
        hint: "Calmo, tranquilo, sem perturbações."
    },
    {
        word: "perene",
        hint: "Que dura por um longo tempo, constante."
    },
    {
        word: "eficaz",
        hint: "Efetivo, que produz resultados."
    },
    {
        word: "eloquente",
        hint: "Expressa-se de forma persuasiva e articulada."
    },
    {
        word: "efluente",
        hint: "Fluido que flui para fora de uma substância ou sistema."
    },
    {
        word: "epifania",
        hint: "Revelação ou compreensão súbita e intuitiva."
    },
    {
        word: "peregrino",
        hint: "Viajante que realiza uma jornada, especialmente por motivos religiosos."
    },
    {
        word: "melancolia",
        hint: "Estado de profunda tristeza e pensamento reflexivo."
    },
    {
        word: "sutil",
        hint: "Delicado e difícil de perceber."
    },
    {
        word: "procrastinação",
        hint: "Tendência de adiar tarefas."
    },
    {
        word: "efusividade",
        hint: "Expressão calorosa e entusiástica."
    },
    {
        word: "quididade",
        hint: "Essência ou qualidade intrínseca de algo."
    },
    {
        word: "vicissitudes",
        hint: "Mudanças imprevisíveis na vida."
    },
    {
        word: "plenitude",
        hint: "Estado de estar completo ou pleno."
    },
    {
        word: "insolente",
        hint: "Que age com desrespeito ou arrogância."
    },
    {
        word: "quixotismo",
        hint: "Comportamento idealista, muitas vezes ingênuo ou impraticável."
    },
    {
        word: "nefando",
        hint: "Que é abominável, horrível."
    },
    {
        word: "benevolente",
        hint: "Que tem disposição para fazer o bem, generoso."
    },
    {
        word: "prolixo",
        hint: "Que se expressa de maneira excessivamente longa."
    },
    {
        word: "lapidar",
        hint: "Trabalhar com pedras preciosas ou aprimorar uma ideia."
    },
    {
        word: "sagacidade",
        hint: "Qualidade de quem é perspicaz e astuto."
    },
    {
        word: "quimera",
        hint: "Monstro mitológico com cabeça de leão, corpo de cabra e cauda de serpente."
    },
    {
        word: "procrastinar",
        hint: "Adiar ou postergar uma tarefa."
    },
    {
        word: "quisila",
        hint: "Discussão ou desentendimento."
    },
    {
        word: "sibilante",
        hint: "Som produzido pela pronúncia de 's' ou 'ss'."
    },
    {
        word: "luminosidade",
        hint: "Qualidade de ser brilhante ou luminoso."
    },
    {
        word: "obnubilar",
        hint: "Tornar obscurecido ou confuso."
    },
    {
        word: "serenidade",
        hint: "Estado de calma e tranquilidade."
    },
    {
        word: "sagaz",
        hint: "Pessoa astuta, perspicaz."
    },
    {
        word: "vicissitude",
        hint: "Mudança imprevista de circunstâncias ou sorte."
    },
    {
        word: "obsequioso",
        hint: "Que age com excessiva submissão ou servilismo."
    },
    {
        word: "efervescer",
        hint: "Entrar em efervescência, produzir bolhas."
    },
    {
        word: "serendipidade",
        hint: "Ocorrência de eventos felizes por acaso."
    },
    {
        word: "sagaz",
        hint: "Que tem astúcia, perspicaz."
    },
    {
        word: "perene",
        hint: "Que dura por um longo tempo, constante."
    },
    {
        word: "proparoxítona",
        hint: "Palavra cuja sílaba tônica é a antepenúltima."
    },
    {
        word: "anacronismo",
        hint: "Erro de cronologia, algo fora de seu tempo histórico."
    },
    {
        word: "perfidioso",
        hint: "Que trai com perfídia, desleal."
    },
    {
        word: "sesquipedaliano",
        hint: "Que contém muitas sílabas ou palavras longas."
    },
    {
        word: "nefelibata",
        hint: "Pessoa que vive nas nuvens, alheia à realidade."
    },
    {
        word: "quididade",
        hint: "A qualidade ou natureza essencial de algo."
    },
    {
        word: "lapidar",
        hint: "Trabalhar com pedras preciosas ou aprimorar uma ideia."
    }
]