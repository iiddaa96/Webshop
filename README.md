# Sand & Sjö

### Webbshop NextJS

Vi har skapat en webshop där vi säljer allt från strandspel till handdukar och badleksaker. Allt för att man ska vara redo för sommaren! Vi använder oss av DB för att dels hantera våra produkter, användare och funktioner.

#### Projektet innehåller:

- Next.js
- React
- TypeScript
- MUI
- NanoId
- Zod
- React-hook-form
- Prisma
- SQL
- Neon

## Länkar:

- [Next.js](https://nextjs.org/)
- [Material-UI](https://mui.com/)
- [Zod](https://zod.dev/)
- [Prisma](https://www.prisma.io/)

## Starta projekt:

- `npm install`
- `npm run dev`
- `npm run studio`

## Admin-konto

`npm run studio` för att komma till Prisma Studio där du kan göra dig till Admin efter att du en gång har loggat in som User på webbshoppen.

Alternativt lägg till din email du har kopplat till ditt GitHub konto i kodbasen. Lokalisera mappen Prisma, sedan Seed där du finner admin.ts.

## Kravspecifikation & bakgrund

### Bakgrund

Året är 1992, Waynes World och Charlie Moongår på biograferna. Janne Kemi är en finsk ultramiljonär som bestämt sig för att satsa på en ny e-handeln. Han vill investera i nya hemsidor. Han har anlitat er för att ta fram dessa sidor.Han har vissa specifika krav från sin IT avdelning som han bifogat som en kravspecifikation. Förutom det har ni fria händer att ta fram en grym idé och tjäna sjuka pengar (åt Janne).

### Krav:

•Alla sidor skall vara responsiva. (G)

•Arbetet ska implementeras med NextJS. (G)

•Backenden ska ha validering på samtliga endpoints (även Server Actions). (G)

•Skapa ett ER diagram som ska ha visats vid idégodkännandet (G)

•Beskriv er företagsidé i en kort textuell presentation, detta ska ha visats vid idégodkännandet (G)

•All data som programmet utnyttjar ska vara sparat i en SQL databas (produkter, beställningar, konton, mm) med undantaget av bilder. (G)

•Man ska kunna logga in som administratör i systemet (G)

•Inga Lösenord får sparas i klartext i databasen (G)

•En besökare ska kunna beställa produkter från sidan, detta ska uppdatera lagersaldot i databasen (G)

•Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan (G)

•Administratörer ska kunna se en lista på alla gjorda beställningar (G)

•Sidans produkter ska delas upp i kategorier, en produkt ska tillhöra minst en kategori, men kan tillhöra flera (G)

•Från hemsidan ska man kunna se en lista över alla produkter, och man ska kunna lista bara dom produkter som tillhör en kategori (G)

•Besökare ska kunna lägga produkterna i en kundkorg, som är sparad i local-storage på klienten (G)

•En besökare som gör en beställning ska få möjligheten att registrera sig samt logga in och måste vara inloggad som kund innan beställningen skapas (G)

•Checkoutflödet i frontendapplikationen ska ha validering på samtliga fält (G)

•När man är inloggad som kund ska man kunna se sina gjorda beställning och om det är skickade eller inte (G)

•Administratörer ska kunna redigera produkt (G)

•Administratörer ska kunna lägga till och ta bort produkter (G)

•Administratörer ska kunna markera beställningar som skickade (G)

Vi har uppfyllt Janne Kemis krav från kravspecifikationen genom att ha en webbshop som är komplett då det går att se produkter, beställa, se sina ordrar och som admin kunna redigera & radera produkter samt kontrollera ordrar och lagerstatus.

**Medverkande**

- [Ida Casperson](https://github.com/iiddaa96)
- [Jonatan Helander](https://github.com/Jonatanhx)
- [Sally Stenegärd](https://github.com/sallymaria99)
- [Philip Bendiksen](https://github.com/Philipbendiksen)
