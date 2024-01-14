/// <reference types="cypress" />

describe('Verify PUT request', ()=>{

    it('Verify PUT request', ()=>{
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            headers:{
                'Content-Type': 'application/json'
            },
            body: {
                name: 'Raj',
                job: 'Test'
            }
        }).its('status')
        .should('equal', 200)
    })
})