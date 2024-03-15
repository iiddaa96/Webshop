# Webbshop Next.js

#### Projektet innehåller:

---

- Next.js
- React
- TypeScript
- MUI
- NanoId
- Zod
- React-hook-form

## Länkar:

- [Next.js](https://nextjs.org/)
- [Material-UI](https://mui.com/)
- [Zod](https://zod.dev/)

## Starta projekt:

- nmp install
- npm run dev

#### Beskrivning

---

Uppgiften är att använda sig av Next.js, Typescript och React och ett valfritt designverktyg. Det finns en mockad datafil med produkter som ska mappas ut. Det ska finnas en startsida, checkout, bekräftelsesida och en adminsida enligt CRUD. Tester sker via cypress.Se kravlista nedan.

### Krav för Godkänt

- [ ] Git & GitHub har använts
- [ ] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [ ] Uppgiften lämnas in i tid!

**Home**

- [ ] Ska ha en övergripande layout med header, main & footer.
- [ ] Startsidan ska lista samtliga produkter.
- [ ] Det ska gå att lägga till produkter i kundvagnen (header + toast + ls).
- [ ] Det ska gå att klicka på en produkt och komma till en detaljsida.
- [ ] Sidan ska vara responsiv och gå att använda på mobil, tablet & desktop.

**Produkt**

- [ ] Ska ha en övergripande layout med header, main & footer.
- [ ] Detaljsidan ska visa all info om en produkt.
- [ ] Det ska gå att lägga till produkten i kundvagnen (header + toast + ls).
- [ ] Sidan ska vara responsiv och gå att använda på mobil, tablet & desktop.

**Kundvagn & Checkout**

- [ ] Ska ha en övergripande layout med header, main & footer.
- [ ] Det ska gå att gå till checkoutsidan och se innehållet i kundvagnen (knapp & url).
- [ ] Det ska gå att se det totala priset i kundvagnen.
- [ ] Det ska gå att ändra produkterna i kundvagnen (header + vyn + pris + ls).
- [ ] Det ska gå att ange leveransuppgifter i ett formulär.
- [ ] Samtliga fält för checkoutsidans formulär ska ha valideringsregler.
- [ ] Formulären vid utcheckningen ska gå att automatiskt fyllas i.
- [ ] Bekräftelsesidan ska visa orderdetaljer och leveransuppgifter

**Admin**

- [x] Det finns en admin-sida för produkthantering
- [x] Det ska gå att se alla produkter på admin sidan
- [x] Det går att lägga till produkter via admin sidan + ls
- [x] Det går att ta bort produkter via admin sidan + ls
- [x] Det går att redigera produkter via admin sidan + ls
- [x] Samtliga fält för adminsidans formulär ska ha valideringsregler
