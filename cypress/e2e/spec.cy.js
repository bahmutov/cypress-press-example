/// <reference types="cypress" />

describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('index.html')
  })

  it('should use tab to navigate through the form', () => {
    cy.get('#username').type('joe').press(Cypress.Keyboard.Keys.TAB)
    cy.get('#email')
      .should('be.focused')
      .type('joe@example.com')
      .press(Cypress.Keyboard.Keys.TAB)
    cy.get('#password')
      .should('be.focused')
      .type('pa$$w0rd')
      .press(Cypress.Keyboard.Keys.TAB)
    cy.get('#terms')
      .should('be.focused')
      .check()
      .press(Cypress.Keyboard.Keys.TAB)
    cy.get('.submit-button').should('be.focused').click()

    cy.get('.error-message').should('not.be.visible')
  })
})
