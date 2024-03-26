/// <reference types="cypress" />



describe('Handle iFrame', ()=>{

    it('should verify iFrame', ()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').within(($iFrame)=>{
            const element = $iFrame.contents().find('#tinymce')
            cy.wrap(element).clear().type('To all string')
        })
    })


    it('verify iFrame', ()=>{

        cy.visit('https://demoqa.com/frames')
        cy.get('frame1').within(($iFrame)=>{
            const element = $iFrame.contents().find('#sampleHeading')
            cy.wrap(element).should('have.text', 'This is a sample page')
        })
    })
})