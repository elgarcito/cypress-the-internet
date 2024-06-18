class ForgotPasswordPage {
    constructor() {
        this.pageTitle='h2';
        this.emailInput='#email';
        this.retrievePasswordButton='#form_submit';
        this.internalServerErrorMessage='h1';
    }

    getPageTittle(){
        return cy.get(this.pageTitle).invoke('text');
    };

    typeEmail(email){
        cy.get(this.emailInput).type(email);
    }

    clickRetrievePasswordButton(){
        cy.get(this.retrievePasswordButton).click();
    }

    getInternalServerErrorMessage(){
        return cy.get(this.internalServerErrorMessage).invoke('text');
    };    
}

export default ForgotPasswordPage;