import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import createAnAccountPage from "../../support/pageObjects/createAnAccountPage";

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

When('I enters valid details and click submit button',()=>{
        createAnAccountPage.fillFields(user.firstName, user.lastName, user.email, user.password);
        createAnAccountPage.submit();      })

Then('Success message should be displayed', ()=>{
        createAnAccountPage.getSuccessMessage().should('be.visible');
    })
