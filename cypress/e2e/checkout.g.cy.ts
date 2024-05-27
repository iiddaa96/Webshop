/// <reference types="cypress" />

beforeEach(() => {
  cy.clearLocalStorage();
  cy.visit('/');
});

// Det ska gå att ange leveransuppgifter i ett formulär.
it('should be possible to fill in customer form and place order', () => {
  cy.viewport('samsung-s10');
  cy.addProductToCart('first');
  cy.goToCheckout();
  cy.addCustomerDetails({ defaults: true });
  cy.location('pathname').should('not.include', 'checkout');
  cy.visit('/');
  cy.viewport('ipad-2');
  cy.addProductToCart('first');
  cy.goToCheckout();
  cy.addCustomerDetails({ defaults: true });
  cy.location('pathname').should('not.include', 'checkout');
  cy.visit('/');
  cy.addProductToCart('first');
  cy.goToCheckout();
  cy.viewport('macbook-15');
  cy.addCustomerDetails({ defaults: true });
  cy.location('pathname').should('not.include', 'checkout');
});

// Samtliga fält för checkoutsidans formulär ska ha valideringsregler
it('should not be possible to place order with incorrect or incomplete values', () => {
  cy.viewport('samsung-s10');
  cy.addProductToCart('first');
  cy.goToCheckout();

  // Namn
  cy.addCustomerDetails();
  cy.shouldDisplayError('customer-name-error', 'customer-form');
  cy.addCustomerDetails({ name: 'Ruben Fluffnos' });
  cy.shouldNotDisplayError('customer-name-error', 'customer-form');

  // Adress
  cy.shouldDisplayError('customer-address-error', 'customer-form');
  cy.addCustomerDetails({ address: 'Marsvinsgatan 2' });
  cy.shouldNotDisplayError('customer-address-error', 'customer-form');

  // Zipcode
  cy.viewport('ipad-2');
  cy.shouldDisplayError('customer-zipcode-error', 'customer-form');
  cy.addCustomerDetails({ zipcode: 'not-a-zipcode' });
  cy.shouldDisplayError('customer-zipcode-error', 'customer-form');
  cy.addCustomerDetails({ zipcode: '123', clear: true });
  cy.shouldDisplayError('customer-zipcode-error', 'customer-form');
  cy.addCustomerDetails({ zipcode: '12345678', clear: true });
  cy.shouldDisplayError('customer-zipcode-error', 'customer-form');
  cy.addCustomerDetails({ zipcode: '12345', clear: true });
  cy.shouldNotDisplayError('customer-zipcode-error', 'customer-form');

  // City
  cy.viewport('ipad-2');
  cy.shouldDisplayError('customer-city-error', 'customer-form');
  cy.addCustomerDetails({ city: 'Stockholm' });
  cy.shouldNotDisplayError('customer-city-error', 'customer-form');

  // Email
  cy.viewport('macbook-15');
  cy.shouldDisplayError('customer-email-error', 'customer-form');
  cy.addCustomerDetails({ email: 'ruben' });
  cy.shouldDisplayError('customer-email-error', 'customer-form');
  cy.addCustomerDetails({ email: '@marsvin.se' });
  cy.shouldNotDisplayError('customer-email-error', 'customer-form');

  // Telefonnummer
  cy.shouldDisplayError('customer-phone-error', 'customer-form');
  cy.addCustomerDetails({ phone: 'abc' });
  cy.shouldDisplayError('customer-phone-error', 'customer-form');
  cy.addCustomerDetails({ phone: '123', clear: true });
  cy.shouldDisplayError('customer-phone-error', 'customer-form');
  cy.addCustomerDetails({ phone: '0702334455', clear: true });
  // cy.shouldNotDisplayError('customer-address-error', 'customer-form');
  cy.getForm('customer-form').should('not.exist');
  cy.location('pathname').should('not.include', 'checkout');
});

// Formulären vid utcheckningen ska gå att automatiskt fyllas i.
it('should be possible to autofill customer details', () => {
  cy.addProductToCart('first');
  cy.goToCheckout();

  cy.getInput('customer-form', 'customer-name').should('have.attr', 'autocomplete', 'name');
  cy.getInput('customer-form', 'customer-address').should(
    'have.attr',
    'autocomplete',
    'street-address'
  );
  cy.getInput('customer-form', 'customer-zipcode').should(
    'have.attr',
    'autocomplete',
    'postal-code'
  );
  cy.getInput('customer-form', 'customer-city').should(
    'have.attr',
    'autocomplete',
    'address-level2'
  );
  cy.getInput('customer-form', 'customer-email').should('have.attr', 'autocomplete', 'email');
  cy.getInput('customer-form', 'customer-phone').should('have.attr', 'autocomplete', 'tel');
});

// Bekräftelsesidan ska visa orderdetaljer och leveransuppgifter
it('should show a confirmation page with order and delivery details', () => {
  cy.viewport('samsung-s10');
  cy.addProductToCart('first');
  cy.addProductToCart('last');
  cy.goToCheckout();
  cy.addCustomerDetails({ defaults: true });
  cy.location('pathname').should('match', new RegExp(`^/(confirmation|bekraftelse|)$`));

  cy.ensureNoHorizontalScroll();
  cy.checkOrderDetails();
  cy.viewport('ipad-2');
  cy.ensureNoHorizontalScroll();
  cy.checkOrderDetails();
  cy.viewport('macbook-15');
  cy.ensureNoHorizontalScroll();
  cy.checkOrderDetails();
});
