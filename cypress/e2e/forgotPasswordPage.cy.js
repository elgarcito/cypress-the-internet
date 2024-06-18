import ForgotPasswordPage from "../pageObject/ForgotPasswordPage";
import HomePage from "../pageObject/HomePage";

describe('Forgot password link test', () => {
    it('It retrieves a internal server error', () => {
        const homePage= new HomePage();
        cy.visit("/");
        const forgotPasswordPage = homePage.clickForgotPasswordLink();
        forgotPasswordPage.getPageTittle().should('equal','Forgot Password');
        forgotPasswordPage.typeEmail("elpaquito@gmail.com");
        forgotPasswordPage.clickRetrievePasswordButton();
        forgotPasswordPage.getInternalServerErrorMessage().should('equal','Internal Server Error');
    });
});