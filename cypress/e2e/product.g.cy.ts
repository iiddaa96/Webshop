/// <reference types="cypress" />

beforeEach(() => {
  cy.clearLocalStorage();
  cy.visit('/');
  cy.get('[data-cy="product"]').first().click();
  cy.location('pathname').should('match', new RegExp(`^/(product|produkt)`));
});

it('should have a layout with a header, main and footer element', () => {
  cy.viewport('samsung-s10');
  cy.assertLayoutHasHeaderMainFooter();
  cy.ensureNoHorizontalScroll();
  cy.viewport('ipad-2');
  cy.assertLayoutHasHeaderMainFooter();
  cy.ensureNoHorizontalScroll();
  cy.viewport('macbook-15');
  cy.assertLayoutHasHeaderMainFooter();
  cy.ensureNoHorizontalScroll();
});

it('should display all information about the product', () => {
  cy.url().then((url) => {
    const productId = url.split('/').pop() || '';
    cy.viewport('samsung-s10');
    cy.displaysProduct(productId, { buyButton: true, description: true });
    cy.viewport('ipad-2');
    cy.displaysProduct(productId, { buyButton: true, description: true });
    cy.viewport('macbook-15');
    cy.displaysProduct(productId, { buyButton: true, description: true });
  });
});

it('should be possible to add products to the cart', () => {
  cy.viewport('samsung-s10');
  cy.addProductToCart('first');
  cy.assertProductWasAdded('first', 1, 1);
  cy.viewport('ipad-2');
  cy.addProductToCart('first');
  cy.assertProductWasAdded('first', 2, 1);
  cy.viewport('macbook-15');
  cy.addProductToCart('first');
  cy.assertProductWasAdded('first', 3, 1);
  cy.clearLocalStorage();
  cy.reload();
});
