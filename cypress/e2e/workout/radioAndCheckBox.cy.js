/// <reference types="cypress" />


describe('Verify Radio button and Checkbox components', () => {

    beforeEach('Visit Demo jquery Site', ()=> {
        cy.visit('https://demos.jquerymobile.com/1.4.5/');
    })

    it('Radio Button Test', () => {

        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/');
        cy.get('#radio-choice-0a').should('not.be.checked').click({force:true});
        cy.get('#radio-choice-0b').should('not.be.checked').click({force:true});

        
    })

    it('Checkbox Test', () => {

        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/');
        cy.get('#checkbox-v-2a').should('not.be.checked').check({force:true}).should('be.checked');
        cy.get('#checkbox-v-2b').should('not.be.checked').check({force:true}).should('be.checked');

        
    })


})