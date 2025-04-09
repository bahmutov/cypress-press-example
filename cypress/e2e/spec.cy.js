/// <reference types="cypress" />

describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('index.html')
  })

  it('should use tab to navigate through the form', () => {
    cy.get('.error-message:visible').should('have.length', 3)
    cy.get('#username')
      .should('have.attr', 'autofocus', 'autofocus')
      .type('joe')
      .press(Cypress.Keyboard.Keys.TAB)
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

    cy.get('.error-message').should('not.be.visible')
    cy.intercept('POST', '/login', { body: { success: true } }).as(
      'login',
    )
    cy.get('.submit-button').should('be.focused').click()
    cy.wait('@login')
    // if you want to validate the multipart/form-data submission
    // see online course https://cypress.tips/courses/network-testing
  })
})
