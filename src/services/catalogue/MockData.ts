const products = [
  {
    menuId: "M01",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/frites-douces.jpeg",
    description: "Delicious sweet potato fries",
    id: "Z1144",
    price: 400,
    sold_out: false,
    available_options: [
      "S01",
      "S02"
    ],
    name: "Sweet potato fries"
  },
  {
    menuId: "M02",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/burger-poulet.jpeg",
    description: "Baker's brioche bun with spelt flakes, 2 large marinated and homemade breaded chicken fillets, mature cheddar, pickled red onions, mayonnaise sauce and batavia lettuce",
    id: "Z1528",
    price: 900,
    sold_out: false,
    available_options: [
      "A01",
      "A02"
    ],
    name: "Chicken burger"
  },
  {
    menuId: "M02",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/rolls.jpeg",
    description: "Wrap with homemade fried and marinated chicken, cream cheese, cucumber, coleslaw, pickled onion.",
    id: "Z4122",
    price: 650,
    sold_out: true,
    name: "Paradise Rolls"
  },
  {
    menuId: "M02",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/veggie-bowl.jpeg",
    description: "Vinegared rice, pan-fried vegetarian gyozas, avocado, fresh mango, pickled onions.",
    id: "Z1662",
    price: 1090,
    sold_out: false,
    name: "Veggie bowl"
  },
  {
    menuId: "M01",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/gyoza-vegan.jpeg",
    description: "Japanese chicken dumplings - 4 pieces",
    id: "Z3920",
    price: 390,
    sold_out: false,
    name: "Chicken gyoza - X4"
  },
  {
    menuId: "M01",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/tenders.jpeg",
    description: "Real chicken fillet tenders breaded with cornflakes and a sauce of your choice",
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
    description: "Cream cheese Poke Paradise style, raw salmon, lime, sesame seeds.",
    id: "Z6749",
    price: 690,
    sold_out: false,
    name: "Cream cheese salmon"
  },
  {
    menuId: "M03",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/crumbles-fr.jpg",
    description: "Vegan red fruit crumble, homemade and with love",
    id: "Z5534",
    price: 390,
    sold_out: false,
    name: "Vegan red fruit crumble"
  },
  {
    menuId: "M03",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/verrine-citron.jpeg",
    description: "Revisited lemon tart - Lemon mousse, crumble, whipped cream",
    id: "Z2344",
    price: 390,
    sold_out: true,
    name: "Lemon tart verrine"
  },
  {
    menuId: "M02",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/poke.jpeg",
    description: "Vinegared rice, raw salmon, avocado, edamame beans, fresh mango, cream cheese Poke Paradise style, sesame seeds and marinade of your choice",
    id: "Z1122",
    price: 1050,
    sold_out: false,
    name: "Hawaii Poké"
  },
  {
    menuId: "M01",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/frites.jpeg",
    description: "Delicious salted fries",
    id: "Z9944",
    price: 300,
    sold_out: false,
    available_options: [
      "S01",
      "S02"
    ],
    name: "Fries"
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
    name: "Main courses"
  }
];

const options = [
  {
    id: "OPT02",
    name: "Side dishes",
    items: [
      {
        name: "Fries",
        id: "A01"
      },
      {
        name: "Green beans",
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
        name: "Samurai",
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