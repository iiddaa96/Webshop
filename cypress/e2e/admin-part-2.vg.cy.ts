/// <reference types="cypress" />

beforeEach(() => {
  cy.clearLocalStorage();
  cy.visit("/admin");
});

// Ska kunna lägga till ny produkt via adminsidan
it("should be possible to add products", () => {
  cy.viewport("samsung-s10");
  cy.get('[data-cy="admin-add-product"]').click();
  cy.ensureNoHorizontalScroll();

  cy.location("pathname").should(
    "match",
    new RegExp("^/admin/(product|produkt)/(new|ny)")
  );
  cy.reload(); // to ensure routing is used!

  cy.addOrEditProduct({ title: "Cypress", defaults: true });
  cy.get('[data-cy="product"]').then(($list) => {
    cy.displaysProduct("Cypress", { element: $list.last() });
  });

  cy.viewport("ipad-2");
  cy.get('[data-cy="admin-add-product"]').click();
  cy.ensureNoHorizontalScroll();
  cy.addOrEditProduct({ title: "Sunflower", defaults: true });
  cy.get('[data-cy="product"]').then(($list) => {
    cy.displaysProduct("Sunflower", { element: $list.last() });
  });

  cy.viewport("macbook-15");
  cy.get('[data-cy="admin-add-product"]').click();
  cy.ensureNoHorizontalScroll();
  cy.addOrEditProduct({ title: "Spiderman", defaults: true });
  cy.get('[data-cy="product"]').then(($list) => {
    cy.displaysProduct("Spiderman", { element: $list.last() });
  });
  cy.displaysAllProducts({ id: true });
});

it("should be possible to edit a product", () => {
  // Change everything about the first product.
  const product = {
    title: "Renamed",
    image: imageUrl,
    description: "New description",
    price: "2000",
  };
  cy.viewport("samsung-s10");
  cy.get('[data-cy="product"]')
    .first()
    .find('[data-cy="admin-edit-product"]')
    .click();
  cy.ensureNoHorizontalScroll();

  cy.location("pathname").should(
    "match",
    new RegExp(`^/admin/(product|produkt)/.*`)
  );
  cy.reload(); // to ensure routing is used!

  cy.addOrEditProduct({ ...product, clear: true });
  cy.get('[data-cy="product"]').then(($list) => {
    cy.displaysProduct("Renamed", { element: $list.first(), product });
  });

  // Just ensure no scroll
  cy.viewport("ipad-2");
  cy.get('[data-cy="product"]')
    .first()
    .find('[data-cy="admin-edit-product"]')
    .click();
  cy.ensureNoHorizontalScroll();
  cy.addOrEditProduct();

  // Create a new product and change it without clearing anything.
  cy.viewport("macbook-15");
  cy.get('[data-cy="admin-add-product"]').click();
  cy.addOrEditProduct({ title: "Cypress", defaults: true });
  cy.get('[data-cy="product"]')
    .last()
    .find('[data-cy="admin-edit-product"]')
    .click();
  cy.ensureNoHorizontalScroll();
  cy.addOrEditProduct({ title: " with added text" });
  cy.get('[data-cy="product"]').then(($list) => {
    cy.displaysProduct("Cypress with added text", { element: $list.last() });
  });
});

// Samtliga fält för adminsidans formulär ska ha valideringsregler
it("should not be possible to add products with incorrect values", () => {
  cy.viewport("samsung-s10");
  cy.get('[data-cy="admin-add-product"]').click();

  // Title
  cy.addOrEditProduct();
  cy.shouldDisplayError("product-title-error", "product-form");
  cy.addOrEditProduct({ title: "Macbook Pro 16 2023" });
  cy.shouldNotDisplayError("product-title-error", "product-form");

  // Description
  cy.shouldDisplayError("product-description-error", "product-form");
  cy.addOrEditProduct({ description: "A description..." });
  cy.shouldNotDisplayError("product-description-error", "product-form");

  // Price
  cy.viewport("ipad-2");
  cy.shouldDisplayError("product-price-error", "product-form");
  cy.addOrEditProduct({ price: "0" });
  cy.shouldDisplayError("product-price-error", "product-form");
  cy.addOrEditProduct({ price: "120" });
  cy.shouldNotDisplayError("product-price-error", "product-form");

  // Image
  cy.viewport("macbook-15");
  cy.shouldDisplayError("product-image-error", "product-form");
  cy.addOrEditProduct({ image: "not-a-url" });
  cy.shouldDisplayError("product-image-error", "product-form");
  cy.addOrEditProduct({
    clear: true,
    image: imageUrl,
  });

  cy.get('[data-cy="product"]').then(($list) => {
    cy.displaysProduct("Macbook Pro 16 2023", { element: $list.last() });
  });
});

// Samtliga fält för adminsidans formulär ska ha valideringsregler
it("should not be possible to edit products with incorrect values", () => {
  cy.viewport("samsung-s10");
  cy.get('[data-cy="product"]')
    .get('[data-cy="admin-edit-product"]')
    .first()
    .click();

  // Title
  cy.addOrEditProduct({
    title: "",
    description: "",
    price: "",
    image: "",
    clear: true,
  });
  cy.shouldDisplayError("product-title-error", "product-form");
  cy.addOrEditProduct({ title: "Macbook Pro 14 2023", clear: true });
  cy.shouldNotDisplayError("product-title-error", "product-form");

  // Description
  cy.shouldDisplayError("product-description-error", "product-form");
  cy.addOrEditProduct({ description: "A description...", clear: true });
  cy.shouldNotDisplayError("product-description-error", "product-form");

  // Price
  cy.viewport("ipad-2");
  cy.shouldDisplayError("product-price-error", "product-form");
  cy.addOrEditProduct({ price: "0", clear: true });
  cy.shouldDisplayError("product-price-error", "product-form");
  cy.addOrEditProduct({ price: "120", clear: true });
  cy.shouldNotDisplayError("product-price-error", "product-form");

  // Image
  cy.viewport("macbook-15");
  cy.shouldDisplayError("product-image-error", "product-form");
  cy.addOrEditProduct({ image: "not-a-url", clear: true });
  cy.shouldDisplayError("product-image-error", "product-form");
  cy.addOrEditProduct({
    clear: true,
    image: imageUrl,
  });

  cy.get('[data-cy="product"]').then(($list) => {
    cy.displaysProduct("Macbook Pro 14 2023", { element: $list.first() });
  });
});

function validPriceFormats(price: number) {
  return new RegExp(
    `(${formatPrice(price, ",")}|${formatPrice(price, " ")}|${price})`
  );
}

function formatPrice(price: number, separator: string) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

const imageUrl = "http://127.0.0.1:5173/cypress/support/plugga-logo.png";
