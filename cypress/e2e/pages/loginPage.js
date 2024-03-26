class LoginPage{

    getUserName(){
        return '[name="username"]'
    }
    enterUserName(userName){
        cy.get(this.getUserName()).type(userName);
    }

    getPassword(){
        return '[name="password"]'
    }
    enterPassword(passWord){
        cy.get(this.getPassword()).type(passWord);
    }

    getSubmitButton(){
        return '[type="submit"]'
    }
    clickSubmitButton(){
        cy.get(this.getSubmitButton()).click();
    }
}

export default LoginPage;