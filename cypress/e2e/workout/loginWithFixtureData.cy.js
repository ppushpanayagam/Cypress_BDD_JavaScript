/// <reference types="cypress" />

describe('Login Test', () => {

    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.fixture('testData').as('loginData');
    })

    it('Should be able to login successfully with valid credentials', function() {
        
        cy.get('[name="username"]').type(this.loginData.userName);
        cy.get('[name="username"]').should('have.value', this.loginData.userName);
        cy.get('[name="password"]').type(this.loginData.password);
        cy.get('[name="password"]').should('have.value', this.loginData.password);
        cy.get('[type="submit"]').click();
        
    })
})