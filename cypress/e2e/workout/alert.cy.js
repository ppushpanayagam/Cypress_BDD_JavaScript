/// <reference types="cypress" />



describe('Verify Alert', () => {

    it('Should verify basic alert', () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('Click for JS Alert').click();
        cy.on('window:alert', (text) => {

            expect(text).to.equal('I am a JS Alert');
        })
        cy.get('#result').should('contain', 'You successfully clicked an alert');
    })

    it('Should verify Confirm OK alert', () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm', (text) => {

            expect(text).to.equal('I am a JS Confirm');
        })
        cy.get('#result').should('contain', 'You clicked: Ok');
    })
    it('Should verify Confirm Cancel alert', () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm', (text) => {

            expect(text).to.equal('I am a JS Confirm');
            return false;
        })
        cy.get('#result').should('contain', 'You clicked: Cancel');
    })

    it('Should verify Prompt alert', () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');
        
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('hello')
            cy.contains('Click for JS Prompt').click();
        })
        cy.on('window:prompt', (text) => {

            expect(text).to.equal('I am a JS prompt');
        })
        cy.get('#result').should('contain', 'You entered: hello');
    })
})