/// <reference types="cypress" />

describe('Verify AUTH requests', ()=>{

    it('Should verify the request with basic AUTH',  ()=>{

        cy.request({
            method: 'GET',
            auth:{
                username: 'postman',
                password: 'password'
            },
            url: 'https://postman-echo.com/basic-auth',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((resposnse)=>{

            expect(resposnse.status).to.eq(200)
            expect(resposnse.statusText).to.eq('OK')
        })
    })

    it('Should verify the request with Digest AUTH',  ()=>{

        cy.request({
            method: 'GET',
            auth:{
                username: 'postman',
                password: 'password',
                method: 'digest'
            },
            url: 'https://postman-echo.com/basic-auth',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((resposnse)=>{

            expect(resposnse.status).to.eq(200)
            expect(resposnse.statusText).to.eq('OK')
        })
    })

    it('Should verify the request with Digest AUTH',  ()=>{

        cy.request({
            method: 'GET',
            auth:{
                username: 'postman',
                password: 'password',
                method: 'digest'
            },
            url: 'https://postman-echo.com/basic-auth',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((resposnse)=>{

            expect(resposnse.status).to.eq(200)
            expect(resposnse.statusText).to.eq('OK')
        })
    })

    it('Should verify the request with Bearer AUTH',  ()=>{

        const token = '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'
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers:{
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' +token
            }
        })
        .then((resposnse)=>{

            expect(resposnse.status).to.eq(200)
            expect(resposnse.statusText).to.eq('OK')
        })
    })

    it.skip('shouldShould verify the request with API Token',  ()=>{


        cy.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/forecast/daily?q=Delhi',
            qs: {
                appid: '09df98307fad52b509d0429b604e3c8d'
            },
            headers:{
                'Content-Type': 'application/json',
            }
        })
        .then((resposnse)=>{

            expect(resposnse.status).to.eq(200)
            expect(resposnse.statusText).to.eq('OK')
        })
    })

    it('shouldShould verify the request with OAUTH',  ()=>{


        cy.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/forecast/daily?q=Delhi',
            qs: {
                appid: '09df98307fad52b509d0429b604e3c8d'
            },
            headers:{
                'Content-Type': 'application/json',
            }
        })
        .then((resposnse)=>{

            expect(resposnse.status).to.eq(200)
            expect(resposnse.statusText).to.eq('OK')
        })
    })
})