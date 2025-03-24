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
}    

export default new loginPage();