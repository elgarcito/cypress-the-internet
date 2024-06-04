import HomePage from "../pageObject/HomePage";

describe('Form Authentication page', () => {

  it('Successful login test', () => {
    const homePage=new HomePage();
    cy.visit("/");
    const formAuthenticationPage = homePage.clickFormAuthenticationLink();
    formAuthenticationPage.getPageTitle();
    formAuthenticationPage.getPageTitle().invoke('text').should('equal','Login Page');
    formAuthenticationPage.typeUsername("tomsmith");
    formAuthenticationPage.typePassword("SuperSecretPassword!");
    formAuthenticationPage.clickLoginButton();
    formAuthenticationPage.getPageTitle().invoke('text').should('equal'," Secure Area");
  })
})