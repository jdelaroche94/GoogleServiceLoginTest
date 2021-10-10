class RecoverEmailPage {
    getRecoverEmailTitle(){
        return cy.get("#headingText > span");
    }

    getRecoverMessage(){
        return cy.get("#headingSubtext > span");
    }

    getNextButton(){
        return cy.xpath("//button/span");
    }
}

export default RecoverEmailPage;