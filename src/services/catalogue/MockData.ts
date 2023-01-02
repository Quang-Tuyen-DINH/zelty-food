const products = [
  {
    menuId: "M01",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/frites-douces.jpeg",
    description: "Délicieuses frites de patate douce",
    id: "Z1144",
    price: 400,
    sold_out: false,
    available_options: [
      "S01",
      "S02"
    ],
    name: "Frites de patate douce"
  },
  {
    menuId: "M02",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/burger-poulet.jpeg",
    description: "Bun's brioché du boulanger aux flocons d'épeautre, 2 grosses aiguillettes de poulet mariné et pané maison, cheddar mature, oignons rouge pickles, sauce mayonnaise et salade batavia",
    id: "Z1528",
    price: 900,
    sold_out: false,
    available_options: [
      "A01",
      "A02"
    ],
    name: "Burger poulet"
  },
  {
    menuId: "M02",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/rolls.jpeg",
    description: "Wrap au poulet Frit et mariné maison, cream cheese, concombre, coleslaw, oignon pickles.",
    id: "Z4122",
    price: 650,
    sold_out: true,
    name: "Rolls Paradise"
  },
  {
    menuId: "M02",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/veggie-bowl.jpeg",
    description: "Riz vinaigré, gyosas végétarien snackés, avocat, Mangue fraîche, oignons pickles.",
    id: "Z1662",
    price: 1090,
    sold_out: false,
    name: "Veggie bowl"
  },
  {
    menuId: "M01",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/gyoza-vegan.jpeg",
    description: "Raviolis japonais au poulet - 4 pièces",
    id: "Z3920",
    price: 390,
    sold_out: false,
    name: "Gyoza au poulet - X4"
  },
  {
    menuId: "M01",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/tenders.jpeg",
    description: "Véritables tenders de filet de poulet pané aux cornflakes et une sauce au choix",
    id: "Z1891",
    price: 550,
    sold_out: false,
    available_options: [
      "S01",
      "S02",
      "S03",
      "S04"
    ],
    name: "Tenders"
  },
  {
    menuId: "M02",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/cream-saumon.jpeg",
    description: "Cream cheese façon Poke Paradise, saumon cru, citron vert, graines de sésame.",
    id: "Z6749",
    price: 690,
    sold_out: false,
    name: "Cream cheese saumon"
  },
  {
    menuId: "M03",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/crumbles-fr.jpg",
    description: "Crumble fruits rouges entièrement vegan, fait maison et avec amour",
    id: "Z5534",
    price: 390,
    sold_out: false,
    name: "Crumble fruits rouges vegan"
  },
  {
    menuId: "M03",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/verrine-citron.jpeg",
    description: "Tarte au citron revisité - Mousse au citron, crumble, crème fouettée",
    id: "Z2344",
    price: 390,
    sold_out: true,
    name: "Verrine façon tarte au citron"
  },
  {
    menuId: "M02",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/poke.jpeg",
    description: "Riz vinaigré, saumon cru, avocat, fèves d'edamames, mangue fraîche, cream cheese façon Poke Paradise, graines de sésame et marinade au choix",
    id: "Z1122",
    price: 1050,
    sold_out: false,
    name: "Poké Hawaï"
  },
  {
    menuId: "M01",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/frites.jpeg",
    description: "Délicieuses frites salées",
    id: "Z9944",
    price: 300,
    sold_out: false,
    available_options: [
    "S01",
    "S02"
    ],
    name: "Frites"
  }
];

const menus = [
  {
    id: "M03",
    name: "Desserts"
  },
  {
    id: "M01",
    name: "Sides"
  },
  {
    id: "M02",
    name: "Plats"
  }
];

const options = [
  {
    id: "OPT02",
    name: "Accompagnements",
    items: [
      {
        name: "Frites",
        id: "A01"
      },
      {
        name: "Haricots verts",
        id: "A02"
      }
    ]
  },
  {
    id: "OPT01",
    items: [
      {
        name: "Mayonnaise",
        id: "S01"
      },
      {
        name: "Ketchup",
        id: "S02"
      },
      {
        name: "Samouraï",
        id: "S03"
      },
      {
        name: "Barbecue",
        id: "S04"
      }
    ],
    name: "Sauces"
  }
]

export const products$ = new Promise((resolve, reject) => setTimeout(resolve, 100, products));
export const menus$ = new Promise((resolve, reject) => setTimeout(resolve, 100, menus));
export const options$ = new Promise((resolve, reject) => setTimeout(resolve, 100, options));