/// <reference types="cypress" />

describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('index.html')
  })

  it('should use tab to navigate through the form', () => {
    // check the visible error messages
    cy.get('.error-message:visible').should('have.length', 3)
    // the username field should have autofocus set
    cy.get('#username')
      .should('have.attr', 'autofocus', 'autofocus')
      .type('joe')
    // and then we type joe and press tab
    cy.press(Cypress.Keyboard.Keys.TAB)
    // the email field should be focused
    cy.get('#email').should('be.focused')
    // and then we type joe@example.com and press tab
    cy.get('#email').type('joe@example.com')
    cy.press(Cypress.Keyboard.Keys.TAB)
    // the password field should be focused
    cy.get('#password').should('be.focused')
    // and then we type pa$$w0rd and press tab
    cy.get('#password').type('pa$$w0rd')
    cy.press(Cypress.Keyboard.Keys.TAB)
    // the terms checkbox should be focused
    cy.get('#terms').should('be.focused')
    // and then we check it and press tab
    cy.get('#terms').check()
    cy.press(Cypress.Keyboard.Keys.TAB)
    // there should be no visible error messages
    cy.get('.error-message').should('not.be.visible')
    // we intercept the login request and response with some success JSON
    cy.intercept('POST', '/login', { body: { success: true } }).as(
      'login',
    )
    // we click the focused submit button
    cy.get('.submit-button').should('be.focused').click()
    // we wait for the login request to complete
    cy.wait('@login')
    // if you want to validate the multipart/form-data submission
    // see online course https://cypress.tips/courses/network-testing
  })
})
