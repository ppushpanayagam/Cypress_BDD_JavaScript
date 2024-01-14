/// <reference types="cypress" />

describe('Verify Get call', ()=> {

    it('Verify GET resources', ()=> {
        cy.request('GET', 'https://reqres.in/api/unknown/2')
        .its('status')
        .should('equal', 200)
    })

    it('Verify Status Text', ()=> {
        cy.request('GET', 'https://reqres.in/api/unknown/2')
        .its('statusText')
        .should('equal', 'OK')
    })

    it('Verify with Header', ()=> {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/unknown/2',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .its('statusText')
        .should('equal', 'OK')
    })

    it('Verify with Fixture file as a headers', ()=> {
        cy.fixture('getRequestHeaders').as('header')
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/unknown/2',
            headers: header
        })
        .its('statusText')
        .should('equal', 'OK')
    })
})