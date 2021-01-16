/// <reference types="cypress" />
import "cypress-file-upload";
import '@4tw/cypress-drag-drop'

context("Navigation", () => {
  before(() => {
    cy.visit("https://s1.naxiom.com/");
  });

  Cypress.Commands.add("dragTo", { prevSubject: "element" }, (subject, targetEl) => {
    cy.wrap(subject).trigger("dragstart");
    cy.get(targetEl).trigger("drop");
  }
);

  it("Dodawanie umowy", () => {
    
    cy.get("#Input_UserName").type("admin-llcd");
    cy.get("#Input_Password").type("!Q2w3e4r");
    cy.get("#btn-login").click();
    cy.get(".sidebar-nav > .nav > :nth-child(4)").contains("Umowy").click();
    
    cy.get(".k-grid-toolbar").contains("Dodaj umowę").click();
    cy.get(".d-flex > :nth-child(1)").find("input").type("Umowa");
    cy.contains("Umowa").click();

    cy.get(".d-flex > :nth-child(2)").find("input").type("Wladim Jakuszew");
    cy.get(".d-flex > :nth-child(3)")
      .find("input")
      .type(
        "(Katedra Administracji i Prawa Administracyjnego) Katedra Administracji i Prawa Administracyjnego"
      );
    cy.contains(
      "(Katedra Administracji i Prawa Administracyjnego) Katedra Administracji i Prawa Administracyjnego"
    ).click();
    
    cy.get(".d-flex > :nth-child(4)")
      .find("input")
      .type("(1L) Studia I stopnia (licencjackie)");
    cy.get(".d-flex > :nth-child(6)")
      .find("input")
      .type("(1) studia stacjonarne");
    cy.get(".card-header-strong > .card-body").contains("Zapisz umowę").click();

    cy.fixture("file.txt").then((fileContent) => {
      cy.get(".ngx-file-drop__file-input").attachFile({
        fileContent: fileContent.toString(),
        fileName: "file.txt",
        mimeType: "text/txt",
      });
    });

    cy.get(".card-header-strong > .card-body").contains("Zapisz umowę").click();
    cy.get(".card-header-strong > .card-body").contains("Zamknij").click();
  });

  it("Sprawdź wniosek", () => {
    cy.get(".sidebar-nav > .nav > :nth-child(2)").contains("Wnioski").click();
    cy.get(".k-grid-toolbar").contains("Nowy dokument").click(); 
  });
});
