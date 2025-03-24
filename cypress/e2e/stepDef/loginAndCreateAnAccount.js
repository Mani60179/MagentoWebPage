import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import createAnAccountPage from "../../support/pageObjects/createAnAccountPage";
import loginPage from "../../support/pageObjects/loginPage";

const user = {
    firstName: 'Semba',
    lastName: 'Selva',
    email: 'Semba.selva' + Math.random().toString(36).substring(2, 15) + '@gmail.com',
    password: 'Add@891237',
  };  

Given('User in the luma homepage',()=>{
    createAnAccountPage.visit();
})

When('User in the create an account page',()=>{
        createAnAccountPage.createAnAccountButton();
})

When('I enter valid details and click submit button',()=>{
        createAnAccountPage.fillFields(user.firstName, user.lastName, user.email, user.password);
        createAnAccountPage.submit();      
})

Then('Success message should be displayed', ()=>{
        createAnAccountPage.getSuccessMessage().should('be.visible');
    })

When('User in the login page', ()=>{
        loginPage.sigInButton();
})


When('I enter valid login credentials and submit', ()=>{
        loginPage.enterCredentials(user.email, user.password);
        loginPage.submit();
})
    
Then('Welcome message should be displayed',()=>{
        loginPage.getWelcomeMessage();
})

When('I enters invalid login credentials and submit',()=>{
        loginPage.enterCredentials('johninvalid@domain.com', 'Abdga@12345');
        loginPage.submit();
})

Then('An error message should be displayed',()=>{
        loginPage.getErrorMessage();
})

When('I enter already registered details and click submit button', ()=>{
        cy.get('#firstname').type('Semba');
        cy.get('#lastname').type('Selva');
        cy.get('#email_address').type('Semba.selvardu61hebz2@gmail.com');
        cy.get('#password').type('Add@891237');
        cy.get('#password-confirmation').type('Add@891237');
        createAnAccountPage.submit();
})

Then('An error message should be displayed and email uniqueness confirmed', ()=>{
        createAnAccountPage.getErrorMessageEmail();
})