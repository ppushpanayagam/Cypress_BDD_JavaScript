/// <reference types="cypress" />

describe('Verify Dropdown Test', ()=>{

    it('Check Single item Dropwdown with select class', ()=>{

        cy.visit('https://seleniumbase.io/demo_page');
        cy.get('#mySelect').select('Set to 25%').should('have.value', '25%');
    })

    it('Check Dropwdown without select class', ()=>{

        cy.visit('https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx');
        cy.get('#ctl00_ContentPlaceholder1_RadDropDownProducts').click();
        cy.get('.rddlItem').contains('Alice Mutton').click();
    })

    it('Check Multiple items Dropwdown', ()=>{

        cy.visit('https://demo.mobiscroll.com/select/multiple-select');
        cy.get('#multiple-select-input').click({force: true});
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Electronics & Computers').click({force: true});
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Health & Beauty').click({force: true});
    })
})