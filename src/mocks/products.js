const products = [
  {
    id: 0,
    name: "Филе бедра цыпленка",
    description:
      "Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.",
    price: 400,
    weight: 700,
    image: "https://i.ibb.co/QHNkcKM/Rectangle-2.png",
    specifications: [
      {
        property: "Масса",
        value: "0,7 кг. (595-805 г.).",
      },
      {
        property: "Срок годности",
        value: "6 суток",
      },
      {
        property: "Порода",
        value: "Кобб 500ю",
      },
      {
        property: "Место происхождения",
        value: "Тверская область",
      },
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: "135 ккал./565 кДж",
      },
      {
        property: "Пищевая ценность",
        value: "белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г.",
      },
    ],
  },
  {
    id: 1,
    name: "Филе бедра гуся",
    description:
      "Порция мяса содержит много железа, фосфора, цинка, меди и витаминов. Оно обладает нежным вкусом. Правильно приготовленная грудка будет сочной и точно понравится всей семье.",
    price: 500,
    weight: 600,
    image: "https://i.ibb.co/dc3H13G/Rectangle-2-1.png",
    specifications: [
      {
        property: "Масса",
        value: "0,6 кг. (495-705 г.).",
      },
      {
        property: "Срок годности",
        value: "5 суток",
      },
      {
        property: "Порода",
        value: "Кобб 200ю",
      },
      {
        property: "Место происхождения",
        value: "Тверская область",
      },
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: "335 ккалю./765 кДж",
      },
      {
        property: "Пищевая ценность",
        value: "белки - 13,8 г., жиры - 18,7 г., углеводы - 0 г.; на 100 г.",
      },
    ],
  },
  {
    id: 2,
    name: "Стейк Рибай",
    description:
      "Популярный альтернативный стейк из мраморного мяса с прослойкой жира по краю. ",
    price: 1080,
    weight: 240,
    image:
      "https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/3684/715efa-730x604.JPG?v=3",
    specifications: [
      {
        property: "Масса",
        value: "240 г. (204-276г.).",
      },
      {
        property: "Срок годности",
        value: "21 сутки",
      },
      {
        property: "Порода",
        value: "Абердин-Ангус",
      },
      {
        property: "Условия хранения",
        value: "от 0 до 10 °С.",
      },
      {
        property: "Место происхождения",
        value: "Новгородская область, Батецкий район",
      },
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: " 210 кКал. / 878,7 кДж",
      },
      {
        property: "Пищевая ценность",
        value: "белки - 15 г., жиры - 10 г., углеводы - 0,5 г.; на 100 г",
      },
    ],
  },
  {
    id: 3,
    name: "Филе клария (заморозка)",
    description:
      "Мякоть клария сладкая, воздушная и практически не имеет костей. Кларий обладает высокой усвояемостью, поэтому подходит для специализированных рационов и диет. Из этой удивительно вкусной и полезной рыбы получаются превосходная согревающая уха, супы, запеканки и котлеты. Блюда из клария непременно стоит попробовать каждому.",
    price: 697,
    weight: 450,
    image:
      "https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/14975/0d7b99-730x604.JPG?v=3",
    specifications: [
      {
        property: "Масса",
        value: "450 г (337.5-562.5 г).",
      },
      {
        property: "Срок годности",
        value: "180 суток",
      },
      {
        property: "Порода",
        value: "род пресноводных лучепёрых рыб из семейства клариевых",
      },
      {
        property: "Место происхождения",
        value: "Московская область, городской округ Луховицы.",
      },
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: " 210 кКал / 927,8 кДж",
      },
      {
        property: "Пищевая ценность",
        value: "белки - 17 г., жиры - 5 г., углеводы - 3 г.; на 100 г.",
      },
    ],
  },
  {
    id: 4,
    name: "Креветки черные тигровые",
    description:
      "Черные тигровые креветки 8/12 'SANGO' (заморозка) – изысканный морепродукт, отличающийся крупными размерами и насыщенным вкусом.Черные креветки богаты белком, витамином B12, фосфором и селеном.",
    price: 2299,
    weight: 1000,
    image:
      "https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/15640/da7c3e-730x604.jpg?v=3",
    specifications: [
      {
        property: "Масса",
        value: "1 кг.",
      },
      {
        property: "Срок годности",
        value: "24 месяца",
      },
      {
        property: "Порода",
        value: "Черная тигровая креветка",
      },
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: " 98 ккал / 334 кДж",
      },
      {
        property: "Пищевая ценность",
        value: "белки - 19,4 г., жиры - 0,1 г., углеводы - 0 г.; на 100 г.",
      },
    ],
  },
];

export default products;
