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
    title: "Poster 1",
    price: 109,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://images.desenio.com/zoom/15801_1.jpg?_gl=1*1lb5ytk*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNTYzNy4wLjAuMA..",
  },
  {
    url: "product",
    id: "2",
    title: "Poster 2",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://images.desenio.com/zoom/can17123-8_1-82084.jpg?_gl=1*bwpdbi*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNTk1MC4wLjAuMA..",
  },
  {
    url: "product",
    id: "3",
    title: "Poster 3",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://images.desenio.com/zoom/cset0013_2.jpg?_gl=1*9fluf7*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNjAzOC4wLjAuMA..",
  },
  {
    url: "product",
    id: "4",
    title: "Poster 4",
    price: 449,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://images.desenio.com/zoom/can2562_4.jpg?_gl=1*1uadpyj*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNjE0NS4wLjAuMA..",
  },
  {
    url: "product",
    id: "5",
    title: "Poster 5",
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
    title: "Poster 7",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/224px-Picture_icon_BLACK.svg.png?20180309172929",
  },
  {
    url: "product",
    id: "8",
    title: "Poster 8",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/224px-Picture_icon_BLACK.svg.png?20180309172929",
  },
  {
    url: "product",
    id: "9",
    title: "Poster 9",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/224px-Picture_icon_BLACK.svg.png?20180309172929",
  },
  {
    url: "product",
    id: "10",
    title: "Poster 10",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/224px-Picture_icon_BLACK.svg.png?20180309172929",
  },
  {
    url: "product",
    id: "11",
    title: "Poster 11",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/224px-Picture_icon_BLACK.svg.png?20180309172929",
  },
  {
    url: "product",
    id: "12",
    title: "Poster 12",
    price: 99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/224px-Picture_icon_BLACK.svg.png?20180309172929",
  },
];
