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
    inventory: number;
  }[];
};

const categoriesData: CategoriesData[] = [
  {
    name: "nyheter",
    products: [
      {
        title: "Handduk Saga",
        description:
          "Handduk i mjuk och skön bomullsfrotté med garnfärgade ränder. Perfekt för både stranden och badrummet, med en generös storlek på 70x140 cm. Högabsorberande och hållbar, ger en lyxig känsla efter varje dusch. Enkel att tvätta och behåller sina färger tvätt efter tvätt.",
        image:
          "https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1700979-09_Fm_M0087987&mw=468&fmt=webp",
        price: 299,
        inventory: 5,
      },
      {
        image:
          "https://homeofess.com/pub_images/original/charlieston12.jpg?extend=copy&width=800&method=crop&height=800&type=webp",
        title: "Badring Sol",
        price: 259,
        inventory: 5,
        description:
          "Badboll för stranden och poolen, perfekt för sommarens alla lekar. Tillverkad av slitstark plast och lätt att blåsa upp. Finns i flera färgglada mönster som gör den rolig att använda. Ger timmar av underhållning för både barn och vuxna.",
      },
      {
        image:
          "https://www.junglebird.se/cdn/shop/files/F7A1DCB0-32B6-49C4-81EB-06057DF363CE_670x.webp?v=1711202486",
        title: "Strand Tennis",
        price: 369,
        inventory: 5,
        description:
          "Gör dig redo att spela dagen lång med stil. Rio Sun Foam Beach Bats är ultratrendiga och färgstarka mjuka paddlar som verkligen sticker ut. Tillverkade av hållbart och lätt material och levereras komplett med två paddlar, två SUNNYLiFE-bollar och ett praktiskt fodral med dragkedja. Ta med en vän, bege er till stranden och ha riktigt roligt. Dra blickarna till er och gör denna säsong minnesvärd med deras härliga pastellfärger.",
      },
      {
        image:
          "https://homeofess.com/pub_images/original/101408-255-002_4.jpg?extend=copy&width=800&method=crop&height=800&type=webp",
        title: "Badring Celiné",
        price: 179,
        inventory: 5,
        description:
          "Ränder går med allt. Pool, hav, sjö, strand eller klippa – en randig badring passar alltid perfekt. Den är ett säkert kort för alla sommaräventyr.",
      },
    ],
  },
  {
    name: "badleksaker",
    products: [
      {
        image:
          "https://homeofess.com/pub_images/original/charlieston12.jpg?extend=copy&width=800&method=crop&height=800&type=webp",
        title: "Badring Sol",
        price: 259,
        inventory: 5,
        description:
          "Badboll för stranden och poolen, perfekt för sommarens alla lekar. Tillverkad av slitstark plast och lätt att blåsa upp. Finns i flera färgglada mönster som gör den rolig att använda. Ger timmar av underhållning för både barn och vuxna.",
      },
      {
        image:
          "https://homeofess.com/pub_images/original/101408-255-002_4.jpg?extend=copy&width=800&method=crop&height=800&type=webp",
        title: "Badring Celiné",
        price: 179,
        inventory: 5,
        description:
          "Ränder går med allt. Pool, hav, sjö, strand eller klippa – en randig badring passar alltid perfekt. Den är ett säkert kort för alla sommaräventyr.",
      },
      {
        image:
          "https://www.junglebird.se/cdn/shop/files/F7A1DCB0-32B6-49C4-81EB-06057DF363CE_670x.webp?v=1711202486",
        title: "Strand Tennis",
        price: 369,
        inventory: 5,
        description:
          "Gör dig redo att spela dagen lång med stil. Rio Sun Foam Beach Bats är ultratrendiga och färgstarka mjuka paddlar som verkligen sticker ut. Tillverkade av hållbart och lätt material och levereras komplett med två paddlar, två SUNNYLiFE-bollar och ett praktiskt fodral med dragkedja. Ta med en vän, bege er till stranden och ha riktigt roligt. Dra blickarna till er och gör denna säsong minnesvärd med deras härliga pastellfärger.",
      },
      {
        image:
          "https://min-lilla-sotnos.se/cdn/shop/files/S83aa0cf3fe9b4c92a0d4541c5913aac0p_1024x1024@2x.jpg?v=1685363963",
        title: "Vattenballonger",
        price: 149,
        inventory: 5,
        description:
          "Möt Reusable Water Balloons! Dessa återanvändbara vattenballonger ger oändligt med skoj under varma sommardagar i trädgården. Barnen kan roa sig med vattenkrig utan att behöva oroa sig för trasiga ballonger. Ballongerna är tillverkade av ett slitstarkt material och är lätta att fylla, så de tål tuffa tag och är roliga gång på gång.",
      },
    ],
  },
  {
    name: "handdukar",
    products: [
      {
        title: "Handduk Saga",
        description:
          "Handduk i mjuk och skön bomullsfrotté med garnfärgade ränder. Perfekt för både stranden och badrummet, med en generös storlek på 70x140 cm. Högabsorberande och hållbar, ger en lyxig känsla efter varje dusch. Enkel att tvätta och behåller sina färger tvätt efter tvätt.",
        image:
          "https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1700979-09_Fm_M0087987&mw=468&fmt=webp",
        price: 299,
        inventory: 5,
      },
      {
        title: "Handduk Hav",
        description:
          "En stilren och snabbabsorberande mikrofiberhandduk i en djupblå nyans. Perfekt för strand, träning och resor, torkar snabbt och tar minimal plats i väskan. Mjuk och lätt, idealisk för alla dina äventyr.",
        image:
          "https://cdn.shopify.com/s/files/1/0188/6063/8272/products/2_2_5f2a8ce2-e68e-4856-884e-1b924ca58e2d.jpg?v=1680510961&width=950",
        price: 199,
        inventory: 5,
      },
      {
        title: "Handduk Sol",
        description:
          "Den ultimata strandhandduken i mjuk bomullsfrotté med garnfärgade ränder, inbjuder till avkoppling. Den är vävd med dubbelt garn och har ett omvänt mönster på båda sidor. Perfekt för härliga dagar vid havet.",
        image:
          "https://assets.ellosgroup.com/i/ellos/b?$jg$&$jm$&$jp$&$jd$&n=jot_1866256-03_Fm_M0091310&mw=644&fmt=webp",
        price: 199,
        inventory: 5,
      },
      {
        title: "Handduk Eko",
        description:
          "Lyxigt strandbadlakan tillverkad av finkammad ekologisk bomull. Certifierad av GOTS (Global Organic Textile Standard). I en generös storlek, 100x180 cm, som passar lika bra på strandutflykten som i solstolen vid poolen. Vävd i ett tunnare tyg för att torka snabbt och för att ta mindre plats i packningen. Stilren design med vävda ränder och dekorativa fransar längs med kortsidorna. Mille Notti monogrammet broderat i det nedre vänstra hörnet.",
        image:
          "https://www.mille-notti.com/_next/image?url=https%3A%2F%2Fmillenotti.centracdn.net%2Fclient%2Fdynamic%2Fimages%2F549_57fd25bc67-70016057-2-1350x0.jpg&w=640&q=75",
        price: 299,
        inventory: 5,
      },
    ],
  },
  {
    name: "rea",
    products: [
      {
        title: "Kasta ring",
        description:
          "Kasta ring är ett klassiskt spel för trädgården eller parken som roat generationer. Samla poäng. Kasta ring är ett roligt spel att spela på midsommar, på stranden eller på utflykten. Ta fram spelet på kalaset och utmana kompisarna. Spelet går ut på att du ska träffa pinnarna med ringarna och varje pinne är värd olika mycket poäng. Ni kommer överens om hur ni ska räkna eller kasta, flest poäng på tre kast eller gul ring på gul pinne – reglerna är väldigt flexibla! Tränar motoriken. Forskare har sett att det hjälper barn i deras utveckling av motoriska färdigheter och hand-ögon-samordning genom att träna på att kasta och sikta. Vad ingår? Spelet innehåller två träbrädor, 5 träpinnar och fem repringar. Från 3 år.",
        image:
          "https://images.clasohlson.com/medias/sys_master/h95/hde/68349037445150.jpg",
        price: 99,
        inventory: 5,
      },
      {
        title: "Boccia utomhusspel",
        description:
          "Boccia är ett utomhusspel som är lätt att ta med och som passar att spela ensam eller i lag. De vattenfyllda plastkloten levereras i en förvaringsväska med ett handtag. Boccia spelas utomhus i en trädgård, grusplan eller annan plats där en större yta finns. Precisionsspel för barn och vuxna. Bocciaspel går ut på att kasta sina klot så nära den lilla kulan som möjligt. Den som kommer närmast vinner. Variera gärna svårighetsgraden genom att anpassa avståndet från den som kastar till den lilla kulan.",
        image:
          "https://images.clasohlson.com/medias/sys_master/ha7/hdb/68349056942110.png",
        price: 129,
        inventory: 5,
      },
      {
        title: "Strandhandduk",
        description:
          "Mjuk och skön strandhandduk – hamaminspirerad med vävd framsida och baksida i frotté. Rulla ut den direkt i sanden eller använd den som ett extra skydd på solsängen. Den är enkel att ta med på resan, i gymväskan eller i picknickkorgen. Certifierad bomull. Badlakanet är tillverkat av Oeko-Tex-certifierad* bomull, är mjuk och smidig och torkar snabbt. Perfekt efter ditt dopp i poolen, att ha med på stranden eller att torka sig med efter duschen.",
        image:
          "https://images.clasohlson.com/medias/sys_master/h69/h2e/68350024679454.jpg",
        price: 99,
        inventory: 5,
      },
      {
        title: "Hopfällbar solstol",
        description:
          "Hopfällbar campingstol lättvikt, passar lika bra till picknicken och strandhänget som till campingen. Stolen har en bekväm sitthöjd. När den är hopfälld tar den extra liten plats i packningen. Campingstol för picknick, strand och camping. Lättskött och slitstarkt material – tåligt polyestertyg med en stomme av lackerade stålrör som tål väder och vind. Komfort – bekväm sitthöjd och armstöd för avlastning av armarna. Funktion – stolens design tillåter enkel hopfällning för smidig transport och förvaring.",
        image:
          "https://images.clasohlson.com/medias/sys_master/h7c/h9d/68384488063006.jpg",
        price: 179,
        inventory: 5,
      },
    ],
  },
];
