interface DataCatalogProps {
  [key: string]: {
    id: string;
    title: string;
    price: number;
    image?: string;
    description?: string;
  }[];
}

interface RullesProducts {
  [key: string]: string[];
}

export const rullesProducts: RullesProducts = {
  bolos: [
    "Bolo com morango fica R$55,00 o quilo",
    "Quadrado a partir de 2,5kg, se com morango ou ameixa a partir de 3,5kg",
    "Quadrado apenas 2 recheios",
    "Menor bolo 1,2kg, se com morango ou ameixa a partir de 1,5kg",
    "Redondo de 2 a 3 recheios dependendo do peso e recheios escolhidos",
    "Bento cake 600g dois recheios menos crocante de nozes com suspiro",
    "Com cobertura de KitKat qualquer recheio fica R$50,00 o quilo",
    "Bolo fake R$40,00 a unidade",
  ],
  "bolos-de-forma": [
    "Rendem 28 a 32 fatias conforme o tamanho que cortar",
    "Pesam cerca de 2,5kg e recheadas cerca de 3kg",
  ],
  doces: [
    "Doces tradicionais R$80,00 o cento",
    "Doces gourmets R$90,00 o cento",
    "25 unidades: até 5 sabores",
    "50 unidades: até 5 sabores",
    "75 unidades: até 5 sabores",
    "100 unidades: até 5 sabores",
  ],
  tortinhas: [
    "R$100,00 o cento",
    "25 unidades: até 4 sabores",
    "50 unidades: até 4 sabores",
    "75 unidades: até 4 sabores",
    "100 unidades: até 4 sabores",
  ],
  finos: [
    "12 unidades: até 4 sabores",
    "20 unidades: até 5 sabores",
    "40 unidades: até 5 sabores",
    "80 unidades: até 5 sabores",
  ],
  morangos: ["10 unidades", "25 unidades", "50 unidades"],
  salgados: [
    "R$80,00 o Cento",
    "25 unidades: até 3 sabores",
    "30 unidades: até 3 sabores",
    "40 unidades: até 4 sabores",
    "50 unidades: até 5 sabores",
    "100 unidades: até 5 sabores",
  ],
  frios: [
    "Sanduíche 20 unidades: até 2 sabores",
    "Sanduiches sempre de 10 em 10",
    "Canudo minimo 20 unidades",
  ],
  bebidas: [],
};

export const dataCatalog: DataCatalogProps = {
  bolos: [
    {
      id: "brigadeiro",
      title: "Brigadeiro",
      price: 38,
      image: "/cardapio/bolos/recheios/brigadeiro.jpg",
    },
    {
      id: "baunilha",
      title: "Baunilha",
      price: 38,
      image: "/cardapio/bolos/recheios/baunilha.jpg",
    },
    {
      id: "beijinho",
      title: "Beijinho",
      price: 38,
      image: "/cardapio/bolos/recheios/beijinho.png",
    },
    {
      id: "abacaxi",
      title: "Abacaxi",
      price: 38,
      image: "/cardapio/bolos/recheios/abacaxi.jpg",
    },

    {
      id: "amendoim",
      title: "Amendoim",
      price: 38,
      image: "/cardapio/bolos/recheios/amendoim.jpg",
    },
    {
      id: "pêssego",
      title: "Pêssego",
      price: 38,
      image: "/cardapio/bolos/recheios/pessego.jpg",
    },

    {
      id: "doce-de-leite",
      title: "Doce de Leite",
      price: 38,
      image: "/cardapio/bolos/recheios/doce-de-leite.jpg",
    },
    {
      id: "nozes",
      title: "Strogonoff nozes",
      price: 46,
      image: "/cardapio/bolos/recheios/nozes.jpg",
    },
    {
      id: "baba-de-moca",
      title: "Baba de moça",

      price: 46,
      image: "/cardapio/bolos/recheios/baba-de-moca.jpg",
    },
    {
      id: "leite-ninho",
      title: "Leite ninho",

      price: 46,
      image: "/cardapio/bolos/recheios/leite-ninho.jpg",
    },
    {
      id: "prestigio",
      title: "Prestígio",
      price: 46,
      image: "/cardapio/bolos/recheios/prestigio.png",
    },
    {
      id: "quatro-leite",
      title: "Quatro leite",
      price: 46,
      image: "/cardapio/bolos/recheios/quatro-leite.png",
    },
    {
      id: "avela",
      title: "Avelã",

      price: 46,
      image: "/cardapio/bolos/recheios/avela.png",
    },
    {
      id: "alpino",
      title: "Alpino",
      price: 46,
      image: "/cardapio/bolos/recheios/alpino.jpg",
    },
    {
      id: "ameixa",
      title: "Strogonoff de ameixa",

      price: 46,
    },
    {
      id: "creme-de-maracuja",
      title: "Creme de maracujá",
      price: 46,
    },
    {
      id: "damasco",
      title: "Strogonoff de damasco",

      price: 46,
    },
    {
      id: "ouro-branco",
      title: "Ouro branco",
      price: 46,
      image: "/cardapio/bolos/recheios/ouro-branco.png",
    },
    {
      id: "sonho-de-valsa",
      title: "Sonho de valsa",
      price: 46,
      image: "/cardapio/bolos/recheios/sonho-de-valsa.png",
    },

    {
      id: "crocante",
      title: "Crocante de nozes com suspiro",
      price: 46,
    },
    {
      id: "bolo-da-casa",
      title: "Bolo da casa",
      price: 55,
      image: "/cardapio/bolos/recheios/bolo-da-casa.jpg",
      description:
        "Massa branca, crocante de nozes com suspiro e strogonoff de morango, não acompanha outros recheios",
    },
    {
      id: "bolo-str-morango",
      title: "Bolo de strogonoff de morango",
      price: 55,
    },
    {
      id: "marta-rocha",
      title: "Marta rocha",
      price: 50,
      image: "/cardapio/bolos/recheios/marta-rocha.png",
      description:
        "Com morango R$55,00 o quilo, massa mesclada, crocante de nozes com supiro, pode escolher uma fruta entre morago, damasco, pêssego, ameixa",
    },
  ],
  "bolos-de-forma": [
    {
      id: "nega-maluca",
      title: "Nega maluca",
      price: 55,
      image: "/cardapio/bolos/bolos-de-forma/nega-maluca.jpeg",
      description:
        "Escolher cobertura entre, brigadeiro, avelã, leite ninho, alpino.",
    },
    {
      id: "toalha-felpuda",
      title: "Toalha felpuda",
      price: 55,
      image: "/cardapio/bolos/bolos-de-forma/toalha-felpuda.png",
    },
    {
      id: "bolo-de-cenoura",
      title: "Bolo de cenoura",
      price: 55,
      image: "/cardapio/bolos/bolos-de-forma/bolo-de-cenoura.jpeg",
      description:
        "Escolher cobertura entre, brigadeiro, avelã, leite ninho, alpino.",
    },
    {
      id: "bolo-de-fuba",
      title: "Bolo de fubá",
      price: 55,
      description:
        "Escolher cobertura entre, brigadeiro, avelã, leite ninho, alpino.",
    },
    {
      id: "bolo-formigueiro",
      title: "Bolo formigueiro",
      price: 55,
      description:
        "Escolher cobertura entre, brigadeiro, avelã, leite ninho, alpino.",
    },
    {
      id: "bolo-doi-amores",
      title: "Bolo de cenoura",
      price: 55,
      description: "Cobertura preta e branca",
    },
    {
      id: "nega-maluca-recheada",
      title: "Nega maluca recheada",
      price: 70,
      description:
        "Recheios a escolher, prestígio, beijinho, brigadeiro, avelã, quatro leite e alpino. Escolher cobertura entre, brigadeiro, avelã, leite ninho, alpino.",
    },
    {
      id: "bolo-de-cenourar",
      title: "Bolo de cenoura recheado",
      price: 70,
      description:
        "Recheios a escolher, prestígio, beijinho, brigadeiro, avelã, quatro leite e alpino. Escolher cobertura entre, brigadeiro, avelã, leite ninho, alpino.",
    },
    {
      id: "bolo-de-fubar",
      title: "Bolo de fubá recheado",
      price: 70,
      description:
        "Recheios a escolher, prestígio, beijinho, brigadeiro, avelã, quatro leite e alpino. Escolher cobertura entre, brigadeiro, avelã, leite ninho, alpino.",
    },
    {
      id: "bolo-formigueiror",
      title: "Bolo formigueiro recheado",
      price: 70,
      description:
        "Recheios a escolher, prestígio, beijinho, brigadeiro, avelã, quatro leite e alpino. Escolher cobertura entre, brigadeiro, avelã, leite ninho, alpino.",
    },
    {
      id: "bolo-dois-amoresr",
      title: "Bolo dois amores recheado",
      price: 70,
      description:
        "Recheios a escolher, prestígio, beijinho, brigadeiro, avelã, quatro leite e alpino. Cobertura preta e branca",
    },
  ],
  doces: [
    {
      id: "doces-mistos",
      title: "Doces mistos",
      price: 0.9,
      image: "/cardapio/doces/tradicionais/mistos.png",
    },
    {
      id: "brigadeiro",
      title: "Brigadeiro",
      price: 0.9,
      image: "/cardapio/doces/tradicionais/brigadeiro.png",
    },
    {
      id: "beijinho",
      title: "Beijinho",
      price: 0.9,
      image: "/cardapio/doces/tradicionais/beijinho.png",
    },
    {
      id: "coco-queimado",
      title: "Coco queimado",
      price: 0.9,
      image: "/cardapio/doces/tradicionais/queimado.png",
    },
    {
      id: "leite-ninho",
      title: "Leite ninho",
      price: 0.9,
      image: "/cardapio/doces/tradicionais/ninho.png",
    },
    {
      id: "dois-amores",
      title: "Dois Amores",
      price: 0.9,
      image: "/cardapio/doces/tradicionais/amores.png",
    },
    {
      id: "doces-gourmet-misto",
      title: "Doces gourmet misto",
      price: 1,
    },
    {
      id: "leite-ninho-com-nutella",
      title: "Leite ninho com nutella",
      price: 1,
      image: "/cardapio/doces/gourmet/nutella.png",
    },
    {
      id: "olho-de-sogra",
      title: "Olho de sogra",
      price: 1,
      image: "/cardapio/doces/gourmet/sogra.png",
    },
    {
      id: "brigadeiro-charge-com-doce-de-leite",
      title: "Brigadeiro charge com doce de leite",
      price: 1,
      image: "/cardapio/doces/gourmet/brigadeiro-charge.jpeg",
    },
    {
      id: "brigadeiro-de-cafe",
      title: "Brigadeiro de café",
      price: 1,
      image: "/cardapio/doces/gourmet/cafe.png",
    },
    {
      id: "brigadeiro-de-confete",
      title: "Brigadeiro no confete",
      price: 1,
      image: "/cardapio/doces/gourmet/confete.png",
    },

    {
      id: "brigadeiro-branco-com-micanga-rosa",
      title: "Brigadeiro branco com miçanga rosa",
      price: 1,
      image: "/cardapio/doces/gourmet/brigadeiro-micanga-rosa.jpeg",
    },
    {
      id: "brigadeiro-branco-com-micanga-azul",
      title: "Brigadeiro branco com miçanga azul",
      price: 1,
      image: "/cardapio/doces/gourmet/brigadeiro-micanga-azul.jpeg",
    },
    {
      id: "brigadeiro-branco-amarelo",
      title: "Brigadeiro branco amarelo",
      price: 1,
    },
    {
      id: "brigadeiro-branco-vermelho",
      title: "Brigadeiro branco vermelho",
      price: 1,
    },
    {
      id: "brigadeiro-branco-micanga-colorida",
      title: "Brigadeiro branco cororido",
      price: 1,
    },
  ],
  tortinhas: [
    {
      id: "tortinha-de-brigadeiro",
      title: "Tortinha de brigadeiro",
      price: 1,
    },
    {
      id: "tortinha-de-morango",
      title: "Tortinha de morango",
      price: 1,
      image: "/cardapio/doces/gourmet/tmorango.png",
    },
    {
      id: "tortinha-de-maracuja",
      title: "Tortinha de maracujá",
      price: 1,
      image: "/cardapio/doces/gourmet/tortinha-de-maracuja.jpeg",
    },
    {
      id: "tortinha-de-brigadeiroc",
      title: "Tortinha de brigadeiro com cereja",
      price: 1,
    },
  ],
  finos: [
    {
      id: "camafeu",
      title: "Camafeu de Nozes",
      price: 2,
      image: "/cardapio/doces/finos/camafeu.png",
    },

    {
      id: "rafaello",
      title: "Rafaello",
      price: 2,
      image: "/cardapio/doces/finos/rafaello.png",
    },
    {
      id: "cereja",
      title: "Bom bom de cereja",
      price: 2,
      image: "/cardapio/doces/finos/rafaello.png",
    },
    {
      id: "bombom-de-uva",
      title: "Bombom de uva",
      price: 2,
      image: "/cardapio/doces/finos/uva.png",
    },

    {
      id: "bombom-de-damasco",
      title: "Bombom de damasco",
      price: 2,
      image: "/cardapio/doces/finos/damasco.png",
    },
  ],

  morangos: [
    {
      id: "bombom-de-morango",
      title: "Bombom de morango",
      price: 3,
      image: "/cardapio/doces/finos/morango.png",
    },
  ],

  salgados: [
    {
      id: "risoles-de-frango",
      title: "Risoles de frango",
      price: 0.8,
      image: "/cardapio/salgados/rfrango.png",
    },
    {
      id: "risoles-de-carne",
      title: "Risoles de carne",
      price: 0.8,
      image: "/cardapio/salgados/rcarne.png",
    },
    {
      id: "risoles-de-pizza",
      title: "Risoles de pizza",
      price: 0.8,
      image: "/cardapio/salgados/rpizza.png",
    },
    {
      id: "travesseirinho-de-calabresa",
      title: "Travesseirinho de calabresa",
      price: 0.8,
      image: "/cardapio/salgados/tcalabresa.png",
    },
    {
      id: "enrroladinho-de-salsicha",
      title: "Enrroladinho de salsicha",
      price: 0.8,
      image: "/cardapio/salgados/salsicha.png",
    },
    {
      id: "perola-de-queijo",
      title: "Perola de queijo",
      price: 0.8,
      image: "/cardapio/salgados/perola.png",
    },

    {
      id: "trouxinha-de-ricota",
      title: "Trouxinha de ricota",
      price: 0.8,
      image: "/cardapio/salgados/trouxinha.png",
    },
    {
      id: "coxinha-de-frango",
      title: "Coxinha de frango",
      price: 0.8,
      image: "/cardapio/salgados/coxinha.png",
    },
    {
      id: "pastel-de-carne",
      title: "Pastel de carne",
      price: 0.8,
      image: "/cardapio/salgados/pcarne.png",
    },
    {
      id: "pastel-de-salame",
      title: "Pastel de salame e três queijos",
      price: 0.8,
      image: "/cardapio/salgados/psalame.png",
    },
    {
      id: "pastel-de-frango",
      title: "Pastel de frango com catupiry",
      price: 0.8,
      image: "/cardapio/salgados/pfrango.png",
    },
    {
      id: "bolinha-de-carne-com-queijo",
      title: "Bolinha de carne com queijo",
      price: 0.8,
      image: "/cardapio/salgados/bcarne.png",
    },

    {
      id: "mini-churros",
      title: "Mini churros",
      price: 0.8,
      image: "/cardapio/salgados/churros.png",
    },
  ],
  frios: [
    {
      id: "canudo-de-salpicao",
      title: "Canudo de salpicão",
      price: 1.25,
      image: "/cardapio/frios/canudo-de-salpicao.png",
    },
    {
      id: "sanduiche-de-salpicao",
      title: "Sanduíche de salpicão",
      price: 1.5,
      image: "/cardapio/frios/sanduiche-de-salpicao.jpeg",
      description: "Maionese, salada, frango e legumes.",
    },
    {
      id: "sanduiche-normal",
      title: "Sanduíche tradicional",
      price: 1.5,
      image: "/cardapio/frios/sanduiche-normal.jpeg",
      description: "Maionese, salada, presunto e queijo.",
    },
  ],
  bebidas: [
    {
      id: "coca-cola-2l",
      title: "Coca cola 2L",
      price: 15,
      image: "/cardapio/bebidas/coca2L.png",
    },
    {
      id: "coca-zero-cola-2l",
      title: "Coca cola zero 2L",
      price: 15,
      image: "/cardapio/bebidas/coca-zero.png",
    },
    {
      id: "sprite-2l",
      title: "Sprite 2L",
      price: 12,
      image: "/cardapio/bebidas/sprite2L.png",
    },
    {
      id: "kuat-2l",
      title: "Kuat 2L",
      price: 12,
      image: "/cardapio/bebidas/kuat2L.png",
    },
    {
      id: "fanta-2l",
      title: "Fanta laranja 2L",
      price: 12,
      image: "/cardapio/bebidas/fantalaranja2L.png",
    },
    {
      id: "schweppes2l",
      title: "Schweppes 1,5L",
      price: 10,
      image: "/cardapio/bebidas/schweppes2l.png",
    },

    {
      id: "coca-lata-350ml",
      title: "Coca lata 350ml",
      price: 4.5,
      image: "/cardapio/bebidas/colalata.png",
    },
    {
      id: "monsterabsolutely",
      title: "Monster absolutely 475ml",
      price: 12,
      image: "/cardapio/bebidas/monsterabsolutely.png",
    },
    {
      id: "monsterenergy",
      title: "Monster energy 475ml",
      price: 12,
      image: "/cardapio/bebidas/monsterenergy.png",
    },
    {
      id: "monsterzeroultra",
      title: "Monster zero ultra 475ml",
      price: 12,
      image: "/cardapio/bebidas/monsterzeroultra.png",
    },
    {
      id: "suco-uva",
      title: "Suco Del Valle uva 1L",
      price: 12,
      image: "/cardapio/bebidas/sucouva.png",
    },
    {
      id: "suco-laranja",
      title: "Suco Del Valle laranja 1L",
      price: 12,
      image: "/cardapio/bebidas/sucolaranja.png",
    },
    {
      id: "suco-maracuja",
      title: "Suco Del Valle maracuja 1L",
      price: 12,
      image: "/cardapio/bebidas/sucomaracuja.png",
    },
    {
      id: "agua-com-gas510ml",
      title: "Água com gás 510ml",
      price: 3,
      image: "/cardapio/bebidas/aguacomgas.png",
    },
    {
      id: "agua-510ml",
      title: "Água 510ml",
      price: 3,
      image: "/cardapio/bebidas/aguasemgas.png",
    },
  ],
};

export const categorysName = Object.keys(dataCatalog);
