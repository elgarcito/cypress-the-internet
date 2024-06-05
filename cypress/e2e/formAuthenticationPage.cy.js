import HomePage from "../pageObject/HomePage";

describe('Form Authentication page', () => {

  it('Successful login test', () => {
    const homePage=new HomePage();
    cy.visit("/");
    const formAuthenticationPage = homePage.clickFormAuthenticationLink();
    formAuthenticationPage.getPageTitle();
    formAuthenticationPage.getPageTitle().invoke('text').should('equal','Login Page');

    //Take the password from the config file, we could make it safer in the future
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    
    formAuthenticationPage.typeUsername(username);
    formAuthenticationPage.typePassword(password);
    formAuthenticationPage.clickLoginButton();
    formAuthenticationPage.getPageTitle().invoke('text').should('equal'," Secure Area");
  })
})