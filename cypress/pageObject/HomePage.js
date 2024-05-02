import AddRemoveElementPage from "../pageObject/AddRemoveElementPage";
class HomePage {
    constructor(){
        this.fullList="ul>li>a";
        this.addRemoveElementLink='ul > :nth-child(2)>a';
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
}

export default HomePage;


