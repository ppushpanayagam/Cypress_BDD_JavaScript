/// <reference types="cypress" />

describe('verify alert and frame', ()=>{

    it('verify Iframe', ()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.get('mce_0_ifr').within(($iFrame) => {
            const element = $iFrame.contents().find('tinymce')
            cy.wrap(element).clear().type('Hello World!')
        })
    })

    it('verify basic alert', ()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Alert').click()

        cy.on('window:alert', (text) => {
            expect(text).to.equal('Click for JS Alert')
        })

    })

    it('verify confirm alert', ()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()

        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Click for JS Confirm')
        })
        
    })

    it('verify confirm alert', ()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('hello')
            cy.contains('Click for JS Prompt').click()
        })

        cy.on('window.prompt', (text)=>{
            

        })
        
    })


    it('GET call', ()=>{

        cy.request({
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: {
                name: 'raj',
                job: 'IT'
            }
        }).then((response)=>{
            expect(response.statusCode).to.eql(201)
        })
    })
})