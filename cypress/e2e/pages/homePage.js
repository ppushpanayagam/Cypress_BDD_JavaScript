class HomePage{

    getDashBoardText(){
        return '.oxd-topbar-header-breadcrumb'
    }

    getDashBordHeaderText(){
        let getText = '';
        cy.get(this.getDashBoardText()).then((value)=>{
            getText = value.text()
        })
        return getText;
    }
}