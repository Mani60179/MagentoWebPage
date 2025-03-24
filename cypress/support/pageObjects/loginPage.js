class loginPage {
    sigInButton() {
        cy.contains('Sign In').eq(0).click();
        }

    enterCredentials(email, password) {
        cy.get('#email').type(email);
        cy.get('#pass').type(password);
    }

    submit() {
        cy.get('.actions-toolbar .action.login').click();
    }

    getWelcomeMessage() {
        return cy.contains('Welcome, Semba Selva!');
    }
    getErrorMessage() {
        return cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
    }
}    

export default new loginPage();