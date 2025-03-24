// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.



Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Test failed:', err)
    return false
});