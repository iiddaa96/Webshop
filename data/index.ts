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
    title: "WILLIAM MORRIS - WILLOW BOUGH POSTER",
    price: 99,
    description:
      "Illustration with green leaves and beige twigs against a light background. Illustration with a green and beige leaf pattern on a light background with text at the top and bottom. This classic design by William Morris will give your home a beautiful and timeless style, and this poster goes perfectly with William Morris - Larkspur.",
    image:
      "https://images.desenio.com/zoom/16099_2-52895.jpg?_gl=1*1e9n710*_ga*MTQ4NTA2NTE1OC4xNzA5NjMxMzAy*_ga_GH3FS7X5TH*MTcxMDE4MTM4NS4zLjEuMTcxMDE4MTQ0Ni4wLjAuMA..",
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
    title: "ARTFUL LINES NO2 POSTER",
    price: 299,
    description:
      "Abstract body. Abstract line art illustration of a body against a beige background with shapes in beige and white. Graphic line art illustration of an abstract body in black, with beige and white shapes behind, all on a light beige background. With this poster in your home, it will have a modern look. Match it with Artful Lines No1 for a perfect pair. The poster is printed with a white border all around which neatly frames the motif.",
    image:
      "https://images.desenio.com/zoom/14386_2-75758.jpg?_gl=1*1ldl47g*_ga*MTQ4NTA2NTE1OC4xNzA5NjMxMzAy*_ga_GH3FS7X5TH*MTcxMDE4MTM4NS4zLjEuMTcxMDE4MTkxNi4wLjAuMA..",
  },
  {
    url: "product",
    id: "6",
    title: "COTTONGRASS POSTER",
    price: 109,
    description:
      "White cotton grass. Photograph of cotton grass with white flowers. Photograph of white cotton grass against a beige, blurred background. Posters in neutral colors give your home a calm and cozy atmosphere, and this style is perfect for a clean, Scandinavian interior. The poster is printed with a white border around the motif and has a grainy photo texture.",
    image:
      "https://images.desenio.com/zoom/16313_2-34096.jpg?_gl=1*1trnp95*_ga*MTQ4NTA2NTE1OC4xNzA5NjMxMzAy*_ga_GH3FS7X5TH*MTcxMDE4MTM4NS4zLjEuMTcxMDE4MTc1Mi4wLjAuMA..",
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
    title: "PRAIRIE ROSE POSTER",
    price: 99,
    description:
      "Abstract pink roses. Hand painted abstract art motif in pastel colors. 'Hand-painted abstract poster in pastel colors with the text: ''Prairie Rose - La collection de L' expressionnisme moderne'' Bring art to your bedroom or living room! Perfect pair with Rêves de Pivoine.'",
    image:
      "https://images.desenio.com/zoom/17001_1.jpg?_gl=1*1orex6i*_ga*MTQ4NTA2NTE1OC4xNzA5NjMxMzAy*_ga_GH3FS7X5TH*MTcxMDE4MTM4NS4zLjEuMTcxMDE4MTM5My4wLjAuMA..",
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
