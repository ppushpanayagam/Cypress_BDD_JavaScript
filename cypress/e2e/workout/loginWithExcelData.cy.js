/// <reference types="cypress" />

describe('Login Test', () => {

    var data;

    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        data = cy.task('readXlsx', {file: 'cypress/fixtures/loginData.xlsx', sheet: 'Sheet1'})
        .then(function (rows){
            data = rows
        })
    })

    it('Should be able to login successfully with valid credentials', function() {
        
        cy.get('[name="username"]').type(data[0].userName);
        cy.get('[name="username"]').should('have.value', data[0].userName);
        cy.get('[name="password"]').type(data[0].password);
        cy.get('[name="password"]').should('have.value', data[0].password);
        cy.get('[type="submit"]').click();
        
    })
})