/**
 * Beskriver en produkt som ska säljas på sidan.
 * OBS: Kan utökas men inte ändras pga cypress.
 **/
export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  url: string;
}

export interface CartItem extends Product {
  quantity: number;
}

/* DATA: Våra mockade produkter, 12 stycken */
export const products: Product[] = [
  {
    url: "product",
    id: "1",
    title: "BERLIN SHAPES NO2 CANVASTAVLA",
    price: 109,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://images.desenio.com/zoom/15801_1.jpg?_gl=1*1lb5ytk*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNTYzNy4wLjAuMA..",
  },
  {
    url: "product",
    id: "2",
    title: "ABSTRACT FIGURES NO2 CANVASTAVLA",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://images.desenio.com/zoom/can17123-8_1-82084.jpg?_gl=1*bwpdbi*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNTk1MC4wLjAuMA..",
  },
  {
    url: "product",
    id: "3",
    title: "BORIS DRASCHOFF / KUBISTIKA - RISING",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://images.desenio.com/zoom/cset0013_2.jpg?_gl=1*9fluf7*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNjAzOC4wLjAuMA..",
  },
  {
    url: "product",
    id: "4",
    title: "RUSTIC ARCHES CANVASTAVLA",
    price: 449,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://images.desenio.com/zoom/can2562_4.jpg?_gl=1*1uadpyj*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNjE0NS4wLjAuMA..",
  },
  {
    url: "product",
    id: "5",
    title: "VIVID SHAPES NO1 CANVASTAVLA",
    price: 449,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://images.desenio.com/zoom/can16860_2-8446.jpg?_gl=1*az9fby*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNjI4OS4wLjAuMA..",
  },
  {
    url: "product",
    id: "6",
    title: "BOTANICAL LINES NO1 CANVASTAVLA",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://images.desenio.com/zoom/can16297_2-40584.jpg?_gl=1*xv8ylc*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNjM2NS4wLjAuMA..",
  },
  {
    url: "product",
    id: "7",
    title: "CIRCLES CANVASTAVLA",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://images.desenio.com/zoom/15550_1.jpg?_gl=1*i42h3e*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNzc5Ny4wLjAuMA..",
  },
  {
    url: "product",
    id: "8",
    title: "RUSTIC ARCHES CANVASTAVLA",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://images.desenio.com/zoom/can16859_1.jpg?_gl=1*u7juis*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNzgzNi4wLjAuMA..",
  },
  {
    url: "product",
    id: "9",
    title: "ABSTRACT TEXTURE CANVASTAVLA",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://images.desenio.com/zoom/can17134_1.jpg?_gl=1*1aqfbyj*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNzg4NC4wLjAuMA..",
  },
  {
    url: "product",
    id: "10",
    title: "BERLIN SHAPES NO1 CANVASTAVLA",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://images.desenio.com/zoom/can15381_1.jpg?_gl=1*1eiab6k*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNzkxMC4wLjAuMA..",
  },
  {
    url: "product",
    id: "11",
    title: "SPACEFROG DESIGNS - METALLIC ",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://images.desenio.com/zoom/can16996_2.jpg?_gl=1*1pptcpi*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkxNTI2NC41LjEuMTcwOTkxNTI2OC4wLjAuMA..",
  },
  {
    url: "product",
    id: "12",
    title: "BABY TURTLE CANVAS",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://images.desenio.com/zoom/can16063-1_1.jpg?_gl=1*k2xjuc*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkxNTI2NC41LjEuMTcwOTkxNTI5NC4wLjAuMA..",
  },
];
