import { db } from "../db";

export async function seedCategories() {
  for (const categoryData of categoriesData) {
    await db.category.upsert({
      where: { name: categoryData.name },
      update: {},
      create: {
        name: categoryData.name,
        products: {
          create: categoryData.products,
        },
      },
    });
  }
}

type CategoriesData = {
  name: string;
  products?: {
    title: string;
    description: string;
    image: string;
    price: number;
  }[];
};

const categoriesData: CategoriesData[] = [
  {
    name: "Nyheter",
    products: [
      {
        title: "Handduk Saga",
        description:
          "Handduk i mjuk och skön bomullsfrotté med garnfärgade ränder. Perfekt för både stranden och badrummet, med en generös storlek på 70x140 cm. Högabsorberande och hållbar, ger en lyxig känsla efter varje dusch. Enkel att tvätta och behåller sina färger tvätt efter tvätt.",
        image:
          "https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1700979-09_Fm_M0087987&mw=468&fmt=webp",
        price: 299,
      },
      {
        image:
          "https://homeofess.com/pub_images/original/charlieston12.jpg?extend=copy&width=800&method=crop&height=800&type=webp",
        title: "Badring Sol",
        price: 259,
        description:
          "Badboll för stranden och poolen, perfekt för sommarens alla lekar. Tillverkad av slitstark plast och lätt att blåsa upp. Finns i flera färgglada mönster som gör den rolig att använda. Ger timmar av underhållning för både barn och vuxna.",
      },
      {
        image:
          "https://www.junglebird.se/cdn/shop/files/F7A1DCB0-32B6-49C4-81EB-06057DF363CE_670x.webp?v=1711202486",
        title: "Strand Tennis",
        price: 369,
        description:
          "Gör dig redo att spela dagen lång med stil. Rio Sun Foam Beach Bats är ultratrendiga och färgstarka mjuka paddlar som verkligen sticker ut. Tillverkade av hållbart och lätt material och levereras komplett med två paddlar, två SUNNYLiFE-bollar och ett praktiskt fodral med dragkedja. Ta med en vän, bege er till stranden och ha riktigt roligt. Dra blickarna till er och gör denna säsong minnesvärd med deras härliga pastellfärger.",
      },
      {
        image:
          "https://homeofess.com/pub_images/original/101408-255-002_4.jpg?extend=copy&width=800&method=crop&height=800&type=webp",
        title: "Badring Celiné",
        price: 179,
        description:
          "Ränder går med allt. Pool, hav, sjö, strand eller klippa – en randig badring passar alltid perfekt. Den är ett säkert kort för alla sommaräventyr.",
      },
    ],
  },
  {
    name: "Badleksaker",
    products: [
      {
        image:
          "https://homeofess.com/pub_images/original/charlieston12.jpg?extend=copy&width=800&method=crop&height=800&type=webp",
        title: "Badring Sol",
        price: 259,
        description:
          "Badboll för stranden och poolen, perfekt för sommarens alla lekar. Tillverkad av slitstark plast och lätt att blåsa upp. Finns i flera färgglada mönster som gör den rolig att använda. Ger timmar av underhållning för både barn och vuxna.",
      },
      {
        image:
          "https://homeofess.com/pub_images/original/101408-255-002_4.jpg?extend=copy&width=800&method=crop&height=800&type=webp",
        title: "Badring Celiné",
        price: 179,
        description:
          "Ränder går med allt. Pool, hav, sjö, strand eller klippa – en randig badring passar alltid perfekt. Den är ett säkert kort för alla sommaräventyr.",
      },
      {
        image:
          "https://www.junglebird.se/cdn/shop/files/F7A1DCB0-32B6-49C4-81EB-06057DF363CE_670x.webp?v=1711202486",
        title: "Strand Tennis",
        price: 369,
        description:
          "Gör dig redo att spela dagen lång med stil. Rio Sun Foam Beach Bats är ultratrendiga och färgstarka mjuka paddlar som verkligen sticker ut. Tillverkade av hållbart och lätt material och levereras komplett med två paddlar, två SUNNYLiFE-bollar och ett praktiskt fodral med dragkedja. Ta med en vän, bege er till stranden och ha riktigt roligt. Dra blickarna till er och gör denna säsong minnesvärd med deras härliga pastellfärger.",
      },
      {
        image:
          "https://min-lilla-sotnos.se/cdn/shop/files/S83aa0cf3fe9b4c92a0d4541c5913aac0p_1024x1024@2x.jpg?v=1685363963",
        title: "Återanvändbara Vattenballonger",
        price: 149,
        description:
          "Möt Reusable Water Balloons! Dessa återanvändbara vattenballonger ger oändligt med skoj under varma sommardagar i trädgården. Barnen kan roa sig med vattenkrig utan att behöva oroa sig för trasiga ballonger. Ballongerna är tillverkade av ett slitstarkt material och är lätta att fylla, så de tål tuffa tag och är roliga gång på gång.",
      },
    ],
  },
  {
    name: "Handdukar",
    products: [
      {
        title: "Handduk Saga",
        description:
          "Handduk i mjuk och skön bomullsfrotté med garnfärgade ränder. Perfekt för både stranden och badrummet, med en generös storlek på 70x140 cm. Högabsorberande och hållbar, ger en lyxig känsla efter varje dusch. Enkel att tvätta och behåller sina färger tvätt efter tvätt.",
        image:
          "https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1700979-09_Fm_M0087987&mw=468&fmt=webp",
        price: 299,
      },
      {
        title: "Handduk Hav",
        description:
          "En stilren och snabbabsorberande mikrofiberhandduk i en djupblå nyans. Perfekt för strand, träning och resor, torkar snabbt och tar minimal plats i väskan. Mjuk och lätt, idealisk för alla dina äventyr.",
        image:
          "https://cdn.shopify.com/s/files/1/0188/6063/8272/products/2_2_5f2a8ce2-e68e-4856-884e-1b924ca58e2d.jpg?v=1680510961&width=950",
        price: 199,
      },
      {
        title: "Handduk Sol",
        description:
          "Den ultimata strandhandduken i mjuk bomullsfrotté med garnfärgade ränder, inbjuder till avkoppling. Den är vävd med dubbelt garn och har ett omvänt mönster på båda sidor. Perfekt för härliga dagar vid havet.",
        image:
          "https://assets.ellosgroup.com/i/ellos/b?$jg$&$jm$&$jp$&$jd$&n=jot_1866256-03_Fm_M0091310&mw=644&fmt=webp",
        price: 199,
      },
      {
        title: "Handduk Eko",
        description:
          "Lyxigt strandbadlakan tillverkad av finkammad ekologisk bomull. Certifierad av GOTS (Global Organic Textile Standard). I en generös storlek, 100x180 cm, som passar lika bra på strandutflykten som i solstolen vid poolen. Vävd i ett tunnare tyg för att torka snabbt och för att ta mindre plats i packningen. Stilren design med vävda ränder och dekorativa fransar längs med kortsidorna. Mille Notti monogrammet broderat i det nedre vänstra hörnet.",
        image:
          "https://www.mille-notti.com/_next/image?url=https%3A%2F%2Fmillenotti.centracdn.net%2Fclient%2Fdynamic%2Fimages%2F549_57fd25bc67-70016057-2-1350x0.jpg&w=640&q=75",
        price: 299,
      },
    ],
  },
  {
    name: "Rea",
    products: [
      {
        title: "Handduk Saga",
        description:
          "Handduk i mjuk och skön bomullsfrotté med garnfärgade ränder. Perfekt för både stranden och badrummet, med en generös storlek på 70x140 cm. Högabsorberande och hållbar, ger en lyxig känsla efter varje dusch. Enkel att tvätta och behåller sina färger tvätt efter tvätt.",
        image:
          "https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1700979-09_Fm_M0087987&mw=468&fmt=webp",
        price: 299,
      },
      {
        title: "Handduk Hav",
        description:
          "En stilren och snabbabsorberande mikrofiberhandduk i en djupblå nyans. Perfekt för strand, träning och resor, torkar snabbt och tar minimal plats i väskan. Mjuk och lätt, idealisk för alla dina äventyr.",
        image:
          "https://cdn.shopify.com/s/files/1/0188/6063/8272/products/2_2_5f2a8ce2-e68e-4856-884e-1b924ca58e2d.jpg?v=1680510961&width=950",
        price: 199,
      },
      {
        title: "Handduk Sol",
        description:
          "Den ultimata strandhandduken i mjuk bomullsfrotté med garnfärgade ränder, inbjuder till avkoppling. Den är vävd med dubbelt garn och har ett omvänt mönster på båda sidor. Perfekt för härliga dagar vid havet.",
        image:
          "https://assets.ellosgroup.com/i/ellos/b?$jg$&$jm$&$jp$&$jd$&n=jot_1866256-03_Fm_M0091310&mw=644&fmt=webp",
        price: 199,
      },
      {
        title: "Handduk Eko",
        description:
          "Lyxigt strandbadlakan tillverkad av finkammad ekologisk bomull. Certifierad av GOTS (Global Organic Textile Standard). I en generös storlek, 100x180 cm, som passar lika bra på strandutflykten som i solstolen vid poolen. Vävd i ett tunnare tyg för att torka snabbt och för att ta mindre plats i packningen. Stilren design med vävda ränder och dekorativa fransar längs med kortsidorna. Mille Notti monogrammet broderat i det nedre vänstra hörnet.",
        image:
          "https://www.mille-notti.com/_next/image?url=https%3A%2F%2Fmillenotti.centracdn.net%2Fclient%2Fdynamic%2Fimages%2F549_57fd25bc67-70016057-2-1350x0.jpg&w=640&q=75",
        price: 299,
      },
    ],
  },
];
