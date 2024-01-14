/// <reference types="cypress" />

const Ajv = require('ajv')
const ajv = new Ajv()

describe('Verify Schema', ()=>{

    it('Should validate the schema', ()=>{

        cy.fixture('jsonSchema').then((schemas)=>{

            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users/2',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {

                const validate = ajv.compile(schemas)
                const isValid = validate(response.body)
                expect(isValid).to.be.true
            })
        })
    })
})