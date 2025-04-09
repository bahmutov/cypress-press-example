/// <reference types="cypress" />

describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('index.html')
  })

  it('should use tab to navigate through the form', () => {
    cy.focused().should('match', 'input#username')
  })
})
