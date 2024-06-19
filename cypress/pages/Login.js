
class LoginPage {
    // Selektory
    emailField = 'input[name="email"]';
    passwordField = 'input[name="password"]';
    loginButton = 'button[type="submit"]';
  
    // Metody
    visit() {
      cy.visit('https://www.edu.goit.global/account/login');
    }
  
    enterEmail(email) {
      cy.get(this.emailField).type(email);
    }
  
    enterPassword(password) {
      cy.get(this.passwordField).type(password);
    }
  
    clickLoginButton() {
      cy.contains('Log in').click();
    }
  
    login(email, password) {
      this.enterEmail(email);
      this.enterPassword(password);
      this.clickLoginButton();
    }
  }
  
  export default new LoginPage();
  