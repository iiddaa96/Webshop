import { z } from "zod";

/**
 * Beskriver en produkt som ska säljas på sidan.
 **/
export const productSchema = z.object({
  id: z.number(),
  image: z.string().url(),
  title: z.string().min(5, { message: "Titel måste innehålla minst 5 tecken" }),
  price: z.coerce.number().positive({ message: "Skriv in ett nummer" }),
  description: z
    .string()
    .min(1)
    .max(400, { message: "Inlägget får vara 400 tecken långt" }),
});

export type Product = z.infer<typeof productSchema>;

export interface CartItem extends Product {
  quantity: number;
}

/* DATA: Våra mockade produkter, 12 stycken */
/* export const products: Product[] = [
  {
    id: "1",
    title: "BERLIN SHAPES",
    price: 109,
    description:
      "This artwork features abstract pink roses, delicately hand-painted in pastel hues, creating a captivating motif that exudes elegance and charm. The poster has mostly neutral tones that is eye captivating and would suit most living spaces. This is one of a kind piece that was hand crafted by JIMM",
    image:
      "https://images.desenio.com/zoom/15801_1.jpg?_gl=1*1lb5ytk*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNTYzNy4wLjAuMA..",
  },
  {
    id: "2",
    title: "ABSTRACT FIGURES",
    price: 99,
    description:
      "This enigmatic poster draws the eye with its central feature: a black, circlish shape that emanates an aura of mystery and intrigue. Set against a backdrop of muted tones, the shape commands attention, inviting viewers to ponder its significance",
    image:
      "https://images.desenio.com/zoom/can17123-8_1-82084.jpg?_gl=1*bwpdbi*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNTk1MC4wLjAuMA..",
  },
  {
    id: "3",
    title: "WILLIAM MORRIS",
    price: 105,
    description:
      "Illustration with green leaves and beige twigs against a light background. Illustration with a green and beige leaf pattern on a light background with text at the top and bottom. This classic design by William Morris will give your home a beautiful and timeless style, and this poster goes perfectly with William Morris - Larkspur.",
    image:
      "https://images.desenio.com/zoom/16099_2-52895.jpg?_gl=1*1e9n710*_ga*MTQ4NTA2NTE1OC4xNzA5NjMxMzAy*_ga_GH3FS7X5TH*MTcxMDE4MTM4NS4zLjEuMTcxMDE4MTQ0Ni4wLjAuMA..",
  },
  {
    id: "4",
    title: "NINE ARCH BRIDGE",
    price: 449,
    description:
      "A captivating photograph capturing a bridge traversing through a landscape enveloped in mist. This enchanting image showcases the Nine Arch Bridge in Sri Lanka, surrounded by lush trees and ethereal mist. Perfect for creating a stunning gallery wall at home, nature posters like this add warmth and vitality to your living space while maintaining a neutral style with an earthy color palette.",
    image:
      "https://images.desenio.com/zoom/can2562_4.jpg?_gl=1*1uadpyj*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNjE0NS4wLjAuMA..",
  },
  {
    id: "5",
    title: "PEYTIL",
    price: 149,
    description:
      "An elegant line art depiction of a person in black and beige tones against a light beige background. This trendy poster is perfect for complementing your home decor with its minimalist yet stylish design. Printed with a white border around the image, the artwork is neatly framed to enhance its aesthetic appeal.",
    image:
      "https://images.desenio.com/zoom/ps526508soulfabricrevised50x70-11139-5100.jpg?_gl=1*8wzjse*_ga*MTQ4NTA2NTE1OC4xNzA5NjMxMzAy*_ga_GH3FS7X5TH*MTcxMTAzNDM1Ny44LjEuMTcxMTAzNTA1OS4wLjAuMA..",
  },
  {
    id: "6",
    title: "COTTONGRASS",
    price: 209,
    description:
      "White cotton grass. Photograph of cotton grass with white flowers. Photograph of white cotton grass against a beige, blurred background. Posters in neutral colors give your home a calm and cozy atmosphere, and this style is perfect for a clean, Scandinavian interior. The poster is printed with a white border around the motif and has a grainy photo texture.",
    image:
      "https://images.desenio.com/zoom/16313_2-34096.jpg?_gl=1*1trnp95*_ga*MTQ4NTA2NTE1OC4xNzA5NjMxMzAy*_ga_GH3FS7X5TH*MTcxMDE4MTM4NS4zLjEuMTcxMDE4MTc1Mi4wLjAuMA..",
  },
  {
    id: "7",
    title: "CIRCLES",
    price: 145,
    description:
      "A graphic illustration featuring geometric shapes in beige and black against a gray-beige background. This artwork showcases a dynamic interplay of black and beige forms and circles, creating a striking contrast against the subdued gray-beige backdrop with an irregular color effect. Characterized by a modern, minimalist style, this illustration is an excellent fit for contemporary interiors.",
    image:
      "https://images.desenio.com/zoom/15550_1.jpg?_gl=1*i42h3e*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNzc5Ny4wLjAuMA..",
  },
  {
    id: "8",
    title: "RUSTIC ARCHES",
    price: 159,
    description:
      "Transport your home to a bohemian paradise with this captivating canvas featuring bohemian arches in rustic, warm tones. Infuse your space with the laid-back yet chic vibe of bohemian style, characterized by its eclectic mix of patterns and textures. The illustration showcases a harmonious blend of earthy browns and soothing beiges, depicting arches and circles that exude a sense of artistic flair.",
    image:
      "https://images.desenio.com/zoom/can16859_1.jpg?_gl=1*u7juis*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNzgzNi4wLjAuMA..",
  },
  {
    id: "9",
    title: "ABSTRACT TEXTURE",
    price: 125,
    description:
      "A chic canvas featuring blocks in a soothing beige hue, arranged to form an elegant pattern for a trendy aesthetic. This modern canvas showcases the beauty of simplicity, adding a touch of sophistication to any interior space. Its versatile design effortlessly complements various home decor styles, making it an ideal addition to your living space.",
    image:
      "https://images.desenio.com/zoom/can17134_1.jpg?_gl=1*1aqfbyj*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNzg4NC4wLjAuMA..",
  },
  {
    id: "10",
    title: "BERLIN SHAPES",
    price: 100,
    description:
      "A graphic illustration featuring geometric shapes in beige and black set against a gray-beige background. This artwork showcases a dynamic interplay of black and beige forms and circles, creating a striking contrast against the subdued gray-beige backdrop with an irregular color effect. Characterized by a modern, minimalist style, this illustration is an excellent fit for contemporary interiors.",
    image:
      "https://images.desenio.com/zoom/can15381_1.jpg?_gl=1*1eiab6k*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNzkxMC4wLjAuMA..",
  },
  {
    id: "11",
    title: "PRAIRIE ROSE",
    price: 199,
    description:
      "Abstract pink roses. Hand painted abstract art motif in pastel colors. 'Hand-painted abstract poster in pastel colors with the text: ''Prairie Rose - La collection de L' expressionnisme moderne'' Bring art to your bedroom or living room! Perfect pair with Rêves de Pivoine.'",
    image:
      "https://images.desenio.com/zoom/17001_1.jpg?_gl=1*1orex6i*_ga*MTQ4NTA2NTE1OC4xNzA5NjMxMzAy*_ga_GH3FS7X5TH*MTcxMDE4MTM4NS4zLjEuMTcxMDE4MTM5My4wLjAuMA..",
  },
  {
    id: "12",
    title: "BABY TURTLE",
    price: 135,
    description:
      "A captivating artwork featuring a baby sea turtle resting on a sandy shore against the backdrop of the vast ocean. This charming depiction captures the essence of serenity and wonderment. Perfect for adorning your living space, this poster invites the soothing vibes of coastal bliss into your home. Enhance your decor with this enchanting piece, an ideal complement to any beach-themed or nature-inspired setting.",
    image:
      "https://images.desenio.com/zoom/can16063-1_1.jpg?_gl=1*k2xjuc*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkxNTI2NC41LjEuMTcwOTkxNTI5NC4wLjAuMA..",
  },
];
 */
