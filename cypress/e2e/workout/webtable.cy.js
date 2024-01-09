/// <reference types="cypress" />


describe('verify webtable', ()=>{

    it('Should verify webtable', ()=>{

        cy.visit('http://the-internet.herokuapp.com/tables');

        //specific value within the webtable
        cy.get('#table1').contains('td', 'http://www.jdoe.com').should('be.visible');

        //specific value in a specified location of the webtable
        cy.get('#table1 > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(3)').contains('td', 'jsmith@gmail.com').should('be.visible')
        
        // check the value based on a condition
        
    })
})