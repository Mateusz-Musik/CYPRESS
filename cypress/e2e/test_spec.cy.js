describe('Test logowania na stronie edu.goit.global', () => {
  
    const baseUrl = 'https://www.edu.goit.global/account/login'
    
    beforeEach(() => {
      cy.visit(baseUrl)
    })
  
    it('Poprawne logowanie użytkownika user888@gmail.com', () => {
      // Logowanie użytkownika
      cy.login('user888@gmail.com', '1234567890')
      
      // Wylogowanie użytkownika
      cy.logout()
    })
  
    it('Poprawne logowanie użytkownika testowyqa@qa.team', () => {
      // Logowanie użytkownika
      cy.login('testowyqa@qa.team', 'QA!automation-1')
      
      // Wylogowanie użytkownika
      cy.logout()
    })
  
  })