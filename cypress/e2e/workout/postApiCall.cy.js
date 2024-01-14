/// <reference types="cypress" />




describe('Verify POST request with hard coded request body', ()=>{

    it('Verify Post request', ()=>{

        cy.request({

            method:'POST',
            url: 'https://reqres.in/api/users',
            headers: {
                'Content-Type': 'application/json'
            },
            body:{
                name: 'raj',
                job: 'IT'
            }
        }).its('status').should('equal', 201)
    })

    it('Verify POST request static body in a const variable', ()=>{

        const requestBody = {
            name: 'Raj',
            job: 'IT'
        }
        cy.request({

            method: 'POST',
            url: 'https://reqres.in/api/users',
            headers:{
                'Content-Type': 'application/json'
            },
            body: requestBody
        })
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq('Raj')
            expect(response.body.job).to.eq('IT')
        })
    })

    it('Verify POST request with dynamic request body data', ()=>{

        const requestBody = {
            name: Math.random().toString(5).substring(2),
            job: 'IT'
        }
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        })
        .then((response) =>{
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq(requestBody.name)
        })
    })

    it('Verify POST request with fixture data', ()=>{

        cy.fixture('postRequestBody').then((data)=>{

            const requestBody = data
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            })
            .then((response) =>{
                expect(response.status).to.eq(201)
                expect(response.body.name).to.eq(requestBody.name)
            })
        })
    })

    it('Verify POST request and its properties', ()=>{

        cy.fixture('postRequestBody').then((data)=>{

            const requestBody = data
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                headers: {

                },
                body: requestBody
            })
            .then((response)=>{
                expect(response.body).has.property('name', requestBody.name)
                expect(response.body).have.property('job', requestBody.job)
            })
        })
    })
})