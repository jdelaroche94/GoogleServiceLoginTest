

import {
    Given, When, Then,
} from "cypress-cucumber-preprocessor/steps";

beforeEach(() => {
    Given("the user is on the Google Service Login account", function () {
        cy.visit('/ServiceLogin');
    });
});

When("the user clicks on the Learn More link", function () {
    cy.pending();
});

Then("they visualise the Learn more information", function () {
    cy.pending();
});

afterEach(() => {
    cy.window().then(win => {
        if(typeof win.gc=== 'function') {
            win.gc();
        }
    });
});