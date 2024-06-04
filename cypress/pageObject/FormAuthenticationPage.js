class FormAuthenticationPage{
    constructor(){
        this.pageTitle='h2';
        this.usernameInput='#username';
        this.passwordInput='#password';
        this.secureAreaMessage='#flash';
    }

    getPageTitle(){
        return cy.get(this.pageTitle);
    }

    typeUsername(username){
        cy.get(this.usernameInput).type(username);
    }
    
    typePassword(password){
        cy.get(this.passwordInput).type(password);
    }

    clickLoginButton(){
        cy.get('.radius').click();
    }

    getSecureAreaMessage(){
        cy.get(this.secureAreaMessage);
    }


}
export default FormAuthenticationPage;