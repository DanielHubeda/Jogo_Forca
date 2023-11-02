// Palavras com no máximo 15 letras
const hardWordList = [
    {
        word: "sesquipedal",
        hint: "Relativo a palavras longas e complexas"
    },
    {
        word: "perpendicular",
        hint: "Formando ângulo reto"
    },
    {
        word: "quintessência",
        hint: "O mais puro exemplo de algo"
    },
    {
        word: "ubiquidade",
        hint: "Capacidade de estar em vários lugares ao mesmo tempo"
    },
    {
        word: "efervescente",
        hint: "Em estado de agitação ou ebulição"
    },
    {
        word: "plausível",
        hint: "Que parece verdadeiro ou provável"
    },
    {
        word: "efêmero",
        hint: "Que dura por pouco tempo, passageiro"
    },
    {
        word: "sagaz",
        hint: "Perspicaz, astuto"
    },
    {
        word: "paradoxo",
        hint: "Afirmação que parece contraditória"
    },
    {
        word: "prolixo",
        hint: "Que se estende em demasia, excessivamente longo"
    },
    {
        word: "lânguido",
        hint: "Sem força, fraco"
    },
    {
        word: "magnânimo",
        hint: "Generoso, que possui grandeza de alma"
    },
    {
        word: "dissensão",
        hint: "Desacordo, divergência de opiniões"
    },
    {
        word: "eficácia",
        hint: "Capacidade de produzir o efeito desejado"
    },
    {
        word: "acirrado",
        hint: "Intenso, disputado com fervor"
    },
    {
        word: "insólito",
        hint: "Que foge ao comum, fora do ordinário"
    },
    {
        word: "laconismo",
        hint: "Economia de palavras, concisão"
    },
    {
        word: "quimera",
        hint: "Ilusão, algo impossível ou irreal"
    },
    {
        word: "vicissitude",
        hint: "Alternação de estados ou situações"
    },
    {
        word: "morbidez",
        hint: "Qualidade do que é doentio ou mórbido"
    },
    {
        word: "acéfalo",
        hint: "Sem líder ou chefe, que não possui cabeça"
    },
    {
        word: "desígnio",
        hint: "Propósito, intenção"
    },
    {
        word: "ecletismo",
        hint: "Adoção de elementos de diversas origens"
    },
    {
        word: "efluente",
        hint: "Líquido que flui de um corpo ou substância"
    },
    {
        word: "gregário",
        hint: "Relacionado à vida em grupo, social"
    },
    {
        word: "idiossincrasia",
        hint: "Característica peculiar de uma pessoa"
    },
    {
        word: "júbilo",
        hint: "Alegria intensa, exultação"
    },
    {
        word: "lúgubre",
        hint: "Que causa tristeza, melancólico"
    },
    {
        word: "melindroso",
        hint: "Suscetível, que se ofende facilmente"
    },
    {
        word: "nefasto",
        hint: "Que traz má sorte, desastroso"
    },
    {
        word: "oblíquo",
        hint: "Que não é reto, que se desvia"
    },
    {
        word: "panaceia",
        hint: "Remédio ou solução universal"
    },
    {
        word: "quididade",
        hint: "Essência, natureza íntima de algo"
    },
    {
        word: "recôndito",
        hint: "Escondido, secreto"
    },
    {
        word: "sibilante",
        hint: "Que produz som semelhante a assobio"
    },
    {
        word: "tácito",
        hint: "Que não é expresso verbalmente, implícito"
    },
    {
        word: "ultraje",
        hint: "Afronta, insulto grave"
    },
    {
        word: "vórtice",
        hint: "Movimento giratório de fluido, redemoinho"
    },
    {
        word: "zenite",
        hint: "Ponto mais alto no céu, cume"
    },
    {
        word: "alacer",
        hint: "Vivo, animado, cheio de ânimo"
    },
    {
        word: "benévolo",
        hint: "Que demonstra bondade, benevolência"
    },
    {
        word: "cacofonia",
        hint: "Conjunto de sons desagradáveis"
    },
    {
        word: "efluvial",
        hint: "Relativo a emissão de vapores ou cheiros"
    },
    {
        word: "fúlgido",
        hint: "Que brilha intensamente"
    },
    {
        word: "genuflexão",
        hint: "Ato de ajoelhar em sinal de reverência"
    },
    {
        word: "hirsuto",
        hint: "Coberto de pelos, peludo"
    },
    {
        word: "icônico",
        hint: "Que representa um ícone, símbolo"
    },
    {
        word: "jazigo",
        hint: "Local de sepultamento, túmulo"
    },
    {
        word: "magnífico",
        hint: "Grandioso, esplêndido"
    },
    {
        word: "pândego",
        hint: "Alegre, brincalhão"
    },
    {
        word: "zênite",
        hint: "Ponto mais alto no céu, auge"
    },
    {
        word: "acérrimo",
        hint: "Muito fervoroso, ardente"
    },
    {
        word: "dissecação",
        hint: "Ato de dissecar, separar em partes"
    },
    {
        word: "equânime",
        hint: "Que mantém a calma, sereno"
    },
    {
        word: "facetado",
        hint: "Com muitas facetas, complexo"
    },
    {
        word: "glaúco",
        hint: "De cor verde-azulada, acinzentado"
    },
    {
        word: "hipotético",
        hint: "Baseado em suposição ou conjectura"
    },
    {
        word: "idílico",
        hint: "Relacionado a uma vida simples e feliz"
    },
    {
        word: "jocoso",
        hint: "Que tem caráter de brincadeira, divertido"
    },
    {
        word: "kaleidoscópio",
        hint: "Instrumento óptico com fragmentos coloridos"
    },
    {
        word: "límpido",
        hint: "Transparente, claro"
    },
    {
        word: "magnanimidade",
        hint: "Qualidade de ser generoso e nobre"
    },
    {
        word: "nebuloso",
        hint: "Coberto de névoa, pouco claro"
    },
    {
        word: "óbulo",
        hint: "Pequena moeda de prata, oferta"
    },
    {
        word: "plenitude",
        hint: "Estado de estar cheio ou completo"
    },
    {
        word: "quimérico",
        hint: "Fantástico, irreal"
    },
    {
        word: "reticente",
        hint: "Que revela pouco, reservado"
    },
    {
        word: "venturoso",
        hint: "Feliz, afortunado"
    },
    {
        word: "ácido",
        hint: "Que tem sabor azedo, corrosivo"
    },
    {
        word: "fóssil",
        hint: "Resto preservado de um organismo antigo"
    },
    {
        word: "gênese",
        hint: "Origem, processo de formação"
    },
    {
        word: "hipotermia",
        hint: "Diminuição da temperatura corporal abaixo do normal"
    },
    {
        word: "inóspito",
        hint: "Que não oferece condições favoráveis à vida"
    },
    {
        word: "jubiloso",
        hint: "Cheio de alegria e satisfação"
    },
    {
        word: "karma",
        hint: "Crença de que as ações passadas influenciam o destino futuro"
    },
    {
        word: "lenitivo",
        hint: "Que alivia ou suaviza, paliativo"
    },
    {
        word: "ósculo",
        hint: "Beijo"
    },
    {
        word: "paradigma",
        hint: "Exemplo ou modelo a ser seguido"
    },
    {
        word: "quixotesco",
        hint: "Relativo a Dom Quixote, extravagante"
    },
    {
        word: "soturno",
        hint: "Triste, sombrio"
    },
    {
        word: "ubíquo",
        hint: "Presente em todos os lugares ao mesmo tempo"
    },
    {
        word: "acérrimo",
        hint: "Muito fervoroso, ardente"
    },
    {
        word: "dissecação",
        hint: "Ato de dissecar, separar em partes"
    },
    {
        word: "equânime",
        hint: "Que mantém a calma, sereno"
    },
    {
        word: "facetado",
        hint: "Com muitas facetas, complexo"
    },
    {
        word: "glaúco",
        hint: "De cor verde-azulada, acinzentado"
    },
    {
        word: "hipotético",
        hint: "Baseado em suposição ou conjectura"
    },
    {
        word: "idílico",
        hint: "Relacionado a uma vida simples e feliz"
    },
    {
        word: "jocoso",
        hint: "Que tem caráter de brincadeira, divertido"
    },
    {
        word: "kaleidoscópio",
        hint: "Instrumento óptico com fragmentos coloridos"
    },
    {
        word: "magnanimidade",
        hint: "Qualidade de ser generoso e nobre"
    },
    {
        word: "nebuloso",
        hint: "Coberto de névoa, pouco claro"
    },
    {
        word: "óbulo",
        hint: "Pequena moeda de prata, oferta"
    },
    {
        word: "plenitude",
        hint: "Estado de estar cheio ou completo"
    },
    {
        word: "sagacidade",
        hint: "Inteligência aguda e perspicaz"
    },
    {
        word: "xenofobia",
        hint: "Aversão a estrangeiros"
    },
    {
        word: "yatagan",
        hint: "Tipo de faca turca"
    },
    {
        word: "déspota",
        hint: "Governante com poder absoluto e autoritário"
    },
    {
        word: "efígie",
        hint: "Representação de uma pessoa em uma moeda"
    },
    {
        word: "néscio",
        hint: "Ignorante, estúpido"
    },
    {
        word: "resiliente",
        hint: "Capaz de se recuperar de adversidades"
    },
    {
        word: "tênue",
        hint: "Frágil, delicado"
    },
    {
        word: "vagaroso",
        hint: "Que se move lentamente, vagarosamente"
    }
];