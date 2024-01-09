/// <reference types="cypress" />

describe('Login Test', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    it('Should be able to login successfully with valid credentials', () => {
        
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="username"]').should('have.value', 'Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[name="password"]').should('have.value', 'admin123');
        cy.get('[type="submit"]').click();
        
    })
})