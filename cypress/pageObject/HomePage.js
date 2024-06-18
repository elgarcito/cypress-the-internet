import AddRemoveElementPage from "../pageObject/AddRemoveElementPage";
import FormAuthenticationPage from "../pageObject/FormAuthenticationPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
class HomePage {
    constructor(){
        this.fullList="ul>li>a";
        this.addRemoveElementLink='ul > :nth-child(2)>a';
        this.formAuthenticationLink=':nth-child(21) > a';
        this.forgotPasswordLink=':nth-child(20) > a';
    }

    visitHomePage(){
        cy.visit("/");
    }

    getElementOfList(){
        return cy.get(this.fullList);
    }
//Codigo para crear un archivo txt con los elementos de la lista
//Debimos crear primero la task en el cypress config
    outputFile(){
        let texts = [];
        homePage.getElementOfList().each(($el, index, $list) => {
            texts.push($el.text());
        }).then(() => {
            cy.task('writeToFile', { fileName: 'output.txt', content: texts.join('\n') });
        });
    }

    clickAddRemoveElementLink(){
        cy.get(this.addRemoveElementLink).click();
        const addRemoveElementPage= new AddRemoveElementPage();
        //return new AddRemoveElementPage();
        return addRemoveElementPage;
    }

    clickFormAuthenticationLink(){
        cy.get(this.formAuthenticationLink).click();
        const formAuthenticationPage= new FormAuthenticationPage();
        //return new FormAuthenticationPage();
        return formAuthenticationPage;
    }

    clickForgotPasswordLink(){
        cy.get(this.forgotPasswordLink).click();
        const forgotPasswordPage= new ForgotPasswordPage();
        //return new ForgotPasswordPage();
        return forgotPasswordPage;
    }
}

export default HomePage;


