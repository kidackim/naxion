/// <reference types="cypress" />

const { canvasToBlob } = require("blob-util")

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://s1.naxiom.com/')
  })

  it('Login to application and create document', () => {
    cy.get("#Input_UserName").type("admin-llcd")
    cy.get('#Input_Password').type('!Q2w3e4r')
    cy.get("#btn-login").click()
    cy.get(".sidebar-nav").contains("Umowy").click()
    cy.get(".k-grid-toolbar").contains("Dodaj umowę").click()
    cy.get(".d-flex > :nth-child(1)").find(".k-select").select("Umowa")
    cy.get(".d-flex > :nth-child(2)").find("input").type("Wladim Jakuszew")
    cy.get(".d-flex > :nth-child(3)").find("input").type("(Katedra Administracji i Prawa Administracyjnego) Katedra Administracji i Prawa Administracyjnego{enter}")
    cy.get(".d-flex > :nth-child(4)").find("input").type("(1L) Studia I stopnia (licencjackie)")
    cy.get(".d-flex > :nth-child(6)").find("input").type("(1) studia stacjonarne")
    cy.get("button").contains("Zapisz umowę").click()
    cy.get("button").contains("Zamknij").click()
  })
})

