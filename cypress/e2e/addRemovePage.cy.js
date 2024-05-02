import HomePage from "../pageObject/HomePage";

describe('Add remove page following POM', () => {
    
    it('Check page appears', () => {
        const homePage=new HomePage();
        cy.visit("/");
        const addRemoveElementPage = homePage.clickAddRemoveElementLink();
        addRemoveElementPage.getPageTittle().invoke('text').should('equal','Add/Remove Elements');
        addRemoveElementPage.clickAddElementButton();
        addRemoveElementPage.checkDeleteButtonAppears().should('exist').should('equal','Delete');
        addRemoveElementPage.clickDeleteButton();
        addRemoveElementPage.getDeleteButton().should('not.exist');
    });
});