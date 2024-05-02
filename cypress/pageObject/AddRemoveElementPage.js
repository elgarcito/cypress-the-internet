class AddRemoveElementPage{
    constructor(){
        this.pageTitle='h3';
        this.addElementButton='div[class="example"]>button'
        this.deleteButton='#elements>button'
    }
    getPageTittle(){
        return cy.get(this.pageTitle);
    }

    clickAddElementButton(){
        cy.get(this.addElementButton).should('exist');
        cy.get(this.addElementButton).click();
    }

    checkDeleteButtonAppears(){
        return cy.get(this.deleteButton).invoke('text');
    }

    clickDeleteButton(){
        cy.get(this.deleteButton).click();
    }

    getDeleteButton(){
        return cy.get(this.deleteButton);
    }

}

export default AddRemoveElementPage;