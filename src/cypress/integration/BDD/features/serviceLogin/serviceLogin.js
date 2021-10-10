import 'cypress-wait-until'

//Page Objects
import LoginPage from '../../../../support/PageObjects/LoginPage';
import RecoverEmailPage from '../../../../support/PageObjects/RecoverEmailPage';

import {
    Given, When, Then,
} from "cypress-cucumber-preprocessor/steps";

const loginPage = new LoginPage();
const recoverEmailPage = new RecoverEmailPage();

beforeEach(() => {
    //Scenario 1, 2, 3, 4, 5
    Given("the user is on the Google Service Login account", function () {
        cy.fixture('mockData').then(function(data){
            this.data=data;
        });
        cy.visit('/ServiceLogin');
    });
});

//Scenario 1
When("the user enters a valid email", function () {
    cy.waitUntil(() => loginPage.getUsername().type(this.data.Email));
});

//Scenario 1, 2
When("the user clicks on the Next button", function () {
    cy.waitUntil(() => loginPage.getNextButton().click());
});

//Scenario 1
Then("they visualise a screen to enters their password", function () {
    cy.wait(3000);
    loginPage.getPassword()
        .should('be.visible');
    loginPage.getForgotPasswordLink()
        .should('be.visible');
});

//Scenario 2
Then("they visualise an error message asking to add their email", function () {
    loginPage.getAddEmailMessage()
        .should('have.text','Enter an email or phone number');
});

//Scenario 3
When("the user clicks on the Forgot email link", function () {
    cy.waitUntil(() => loginPage.getForgotEmailLink().click());
});

//Scenario 3
Then("they visualise a screen to recover their email account", function () {
    recoverEmailPage.getRecoverEmailTitle().should('have.text', 'Find your email');
    recoverEmailPage.getRecoverMessage().should('have.text', 'Enter your phone number or recovery email');
    recoverEmailPage.getNextButton().should('have.text', 'Next');
});

//Scenario 4
When("the user clicks on the Create an account link", function () {
    cy.waitUntil(() => loginPage.getCreateAccountLink().click());
});

//Scenario 4
Then("they visualise a screen to create an account", function () {
    cy.wait(2000);
    cy.url().should('contain','/webcreateaccount');
});

//Scenario 5
Then("they can learn more using the link on the page", function () {
    loginPage.getLearnMoreLink().should('be.visible')
        .should('have.attr', 'href').and('include', 'https://support.google.com/');
});

afterEach(() => {
    cy.window().then(win => {
        if(typeof win.gc=== 'function') {
            win.gc();
        }
    });
});