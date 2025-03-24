Feature: End to end Login and Create an Account validation

    User can Login and create an account in the LUMA application

Background:
    Given User in the luma homepage

Scenario: Verify user can create an account
   When User in the create an account page
   And I enters valid details and click submit button
   Then Success message should be displayed

Scenario: Verify user can login with correct credentials
    When User in the login page
    And I enter valid login credentials and submit
    Then Welcome message should be displayed 
