const URL = Cypress.env("URL");
const API = Cypress.env("API");
const CI_ENV = Cypress.env("ci");

describe("The New page", () => {
  before(() => {
    cy.visit(`${URL}/snacks/new`);
  });

  it("shows the header text", () => {
    cy.contains("Snacks");
    cy.contains("New");
  });

  describe("the form", () => {
    // pay attention the capitalization!
    // cypress needs accuracy to find elements on the DOM\

    it("has a form with correct labels and fields", () => {
      // for the form inputs we use label/input
      // in this first one its called "name"

      cy.get("label").contains("Name").should("have.attr", "for", "name");
      cy.get("#name").should("have.attr", "type", "text");
      cy.get("label").contains("Image").should("have.attr", "for", "image");
      cy.get("#image").should("have.attr", "type", "text");
      cy.get("label").contains("Fiber").should("have.attr", "for", "fiber");
      cy.get("#fiber").should("have.attr", "type", "number");
      cy.get("label").contains("Protein").should("have.attr", "for", "protein");
      cy.get("#protein").should("have.attr", "type", "number");
      cy.get("label")
        .contains("Added Sugar")
        .should("have.attr", "for", "added_sugar");
      cy.get("#added_sugar").should("have.attr", "type", "number");
    });

    it("can create a snack and then redirects back to index page", () => {
      cy.get("#name").type("Potato Chips");
      cy.get("#image").type(
        "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
      );
      cy.get("#fiber").type("3");
      cy.get("#protein").type("1");
      cy.get("#added_sugar").type("1");
      cy.get("form").submit();
      cy.url().should("eq", "http://localhost:3000/snacks");
      cy.visit("http://localhost:3000/snacks");
      cy.contains("Potato Chips").within(() => {
        cy.get("span img").should("have.attr", "alt", "unhealthy food");
      });
    });
  });
});
