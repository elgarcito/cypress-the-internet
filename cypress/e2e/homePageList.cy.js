import HomePage from "../pageObject/HomePage";
describe('Home page all test', () => {

    it('Test each link with a previous saved fixture', () => {
        const homePage=new HomePage();
        homePage.visitHomePage();
        cy.fixture('links').then(links=>{
            let index=0;
            for (let key in links) {
                let link = links[key];
                homePage.getElementOfList().eq(index).then(element=>{
                    //console.log(element.text());
                    assert.equal(element.text(),link);
                   });
                   index++;
            }
        })
    });
});