/// <reference types="cypress" />

import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";


describe('Orange HRM site test', ()=>{

    const loginPage = new LoginPage();
    const homePage = new HomePage();

    it('Should verify login page', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        loginPage.enterUserName('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickSubmitButton()
        expect(homePage.getDashBordHeaderText()).to.eq('Dashboard')
        
    })
})
