/// <reference types="cypress" />

beforeEach(() => {
  cy.clearLocalStorage();
  cy.visit('/');
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

it('should display all products on the startpage', () => {
  cy.viewport('samsung-s10');
  cy.displaysAllProducts({ buyButton: true });
  cy.viewport('ipad-2');
  cy.displaysAllProducts({ buyButton: true });
  cy.viewport('macbook-15');
  cy.displaysAllProducts({ buyButton: true });
});

it('should be possible to click on a product card to view details about it', () => {
  cy.viewport('samsung-s10');
  cy.goToProductDetails(0);
  cy.go('back');
  cy.viewport('ipad-2');
  cy.goToProductDetails(2);
  cy.go('back');
  cy.viewport('macbook-15');
  cy.goToProductDetails(4);
});

it('should be possible to add products to the cart', () => {
  cy.get('[data-cy="added-to-cart-toast"]').should('not.exist');
  cy.viewport('samsung-s10');
  cy.addProductToCart('first');
  cy.assertProductWasAdded('first', 1, 1);
  cy.viewport('ipad-2');
  cy.reload();
  cy.wait(100);
  cy.addProductToCart('first');
  cy.assertProductWasAdded('first', 2, 1);
  cy.viewport('macbook-15');
  cy.reload();
  cy.wait(100);
  cy.addProductToCart('last');
  cy.assertProductWasAdded('last', 3, 2);
  cy.clearLocalStorage();
  cy.reload();
});
