import 'cypress-wait-until'
import {
    Given, When, Then,
} from "cypress-cucumber-preprocessor/steps";

beforeEach(() => {
    //Scenario 1, 2, 3, 4, 5
    Given("the user is on the Google Service Login account", function () {
        cy.visit('/ServiceLogin');
    });
});

//Scenario 1
When("the user enters a valid email", function () {
    cy.waitUntil(() => cy.xpath('//input[@id="identifierId"]').type('julian.cypress.testing@gmail.com'));
});

//Scenario 1, 2
When("the user clicks on the Next button", function () {
    cy.waitUntil(() => cy.xpath('//span[contains(.,"Next")]').click());
});

//Scenario 1
Then("they visualise a screen to enters their password", function () {
    cy.wait(3000);
    cy.xpath('//input[@name="password"]')
        .should('be.visible');
    cy.xpath('//span[contains(.,"Forgot password?")]')
        .should('be.visible');
});

//Scenario 2
Then("they visualise an error message asking to add their email", function () {
    cy.xpath('//div[2]/div[2]/div')
        .should('have.text','Enter an email or phone number');
});

//Scenario 3
When("the user clicks on the Forgot email link", function () {
    cy.waitUntil(() => cy.get(':nth-child(3) > button').click());
});

//Scenario 3
Then("they visualise a screen to recover their email account", function () {
    cy.get("#headingText > span").should('have.text', 'Find your email');
    cy.get("#headingSubtext > span").should('have.text', 'Enter your phone number or recovery email');
    cy.xpath("//button/span").should('have.text', 'Next');
});

//Scenario 4
When("the user clicks on the Create an account link", function () {
    cy.waitUntil(() => cy.xpath('//span[contains(.,"Create account")]').click());
});

//Scenario 4
Then("they visualise a screen to create an account", function () {
    cy.wait(2000);
    cy.url().should('contain','/webcreateaccount');
});

//Scenario 5
When("the user clicks on the For Myself link", function () {
    cy.waitUntil(() => cy.xpath('//span[contains(.,"For myself")]').click());
});

//Scenario 5
Then("they can learn more using the link on the page", function () {
    cy.xpath('//a[contains(text(),"Learn more")]').should('be.visible')
        .should('have.attr', 'href').and('include', 'https://support.google.com/');
});

afterEach(() => {
    cy.window().then(win => {
        if(typeof win.gc=== 'function') {
            win.gc();
        }
    });
});