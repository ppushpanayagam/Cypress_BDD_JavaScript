/// <reference types="cypress" />

describe('verify custom command test', () => {

    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.fixture('testData').as('loginData');
    })

    it('Should login successfully', function() {

        cy.login(this.loginData.userName, this.loginData.password);
    })
})