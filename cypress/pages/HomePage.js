
class HomePage {
    // Selektory
    menuButton = '[data-element-type="burger-menu"]';
    logoutButton = 'Log out'; // assuming it's a text in a button or link
  
    // Metody
    clickMenuButton() {
      cy.get(this.menuButton).click();
    }
  
    clickLogoutButton() {
      cy.contains(this.logoutButton).click();
    }
  
    logout() {
      this.clickMenuButton();
      this.clickLogoutButton();
    }
  }
  
  export default new HomePage();
  