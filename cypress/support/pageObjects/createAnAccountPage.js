class CreateAnAccountPage {
    visit(){
        cy.visit(Cypress.env('url'))
    }
    createAnAccountButton(){
        cy.get('a[href="https://magento.softwaretestingboard.com/customer/account/create/"]').eq(0).click();
    }

    fillFields(firstName, lastName, email, password, phone) {
        cy.get('#firstname').type(firstName);
        cy.get('#lastname').type(lastName);
        cy.get('#email_address').type(email);
        cy.get('#password').type(password);
        cy.get('#password-confirmation').type(password);
    }

    submit() {
        cy.get('.actions-toolbar .action.submit').contains('Create an Account').click();
    }

    getSuccessMessage() {
       cy.contains('Thank you for registering with Main Website Store.');
       return cy.contains('Semba Selva');
    }
}

export default new CreateAnAccountPage();
