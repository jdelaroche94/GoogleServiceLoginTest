Feature: Google Service Login
As a user I want to login into my Google account so that I can access Google services

    Scenario: 1 - Entering a valid email account
        Given the user is on the Google Service Login account
        When the user enters a valid email
        And the user clicks on the Next button
        Then they visualise a screen to enters their password
    
    Scenario: 2 - Clicking on the Next button without adding an email account
        Given the user is on the Google Service Login account
        When the user clicks on the Next button
        Then they visualise an error message asking to add their email

    Scenario: 3 - Using forgot email link
        Given the user is on the Google Service Login account
        When the user clicks on the Forgot email link
        Then they visualise a screen to recover their email account

    Scenario: 4 - Using create accout link
        Given the user is on the Google Service Login account
        When the user clicks on the Create an account link
        Then they visualise a screen to create an account
    
    Scenario: 5 - Validating Learn More link
        Given the user is on the Google Service Login account
        Then they can learn more using the link on the page