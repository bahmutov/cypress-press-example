/// <reference types="cypress" />

describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('index.html')
  })

  it('should use tab to navigate through the form', () => {
    // check the visible error messages
    // the username field should have autofocus set
    // and then we type joe and press tab
    // the email field should be focused
    // and then we type joe@example.com and press tab
    // the password field should be focused
    // and then we type pa$$w0rd and press tab
    // the terms checkbox should be focused
    // and then we check it and press tab
    // there should be no visible error messages
    // we intercept the login request and response with some success JSON
    // we click the focused submit button
    // we wait for the login request to complete
    // if you want to validate the multipart/form-data submission
    // see online course https://cypress.tips/courses/network-testing
  })
})
