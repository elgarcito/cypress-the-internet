class HomePage {
    constructor(){
        this.fullList="ul>li>a";
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
}

export const homePage=new HomePage();


