// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Test 1
describe('Test logowania na stronie edu.goit.global', () => {
  it('Poprawne logowanie użytkownika user888@gmail.com', () => {
    cy.visit('https://www.edu.goit.global/account/login')
    
    // Logowanie użytkownika
    cy.get('input[name="email"]').type('user888@gmail.com')
    cy.get('input[name="password"]').type('1234567890')
    cy.contains('Log in').click()
    
    // Wylogowanie użytkownika
    cy.get('[data-element-type="burger-menu"]').click()
    cy.contains('Log out').click()
    cy.url().should('include', '/account/login')
  })
})
 

  //Test 2
  describe('Test logowania na stronie edu.goit.global', () => {
    it('Poprawne logowanie użytkownika testowyqa@qa.team', () => {
      cy.visit('https://www.edu.goit.global/account/login')
      
      // Logowanie użytkownika
      cy.get('input[name="email"]').type('testowyqa@qa.team')
      cy.get('input[name="password"]').type('QA!automation-1')
      cy.contains('Log in').click()
      
      // Wylogowanie użytkownika
      cy.get('[data-element-type="burger-menu"]').click()
      cy.contains('Log out').click()
      cy.url().should('include', '/account/login')
    })
  })