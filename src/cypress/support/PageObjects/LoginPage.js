class LoginPage {
    getUsername(){
        return cy.xpath('//input[@id="identifierId"]');
    }

    getPassword(){
        return cy.xpath('//input[@name="password"]');
    }

    getNextButton(){
        return cy.xpath('//span[contains(.,"Next")]');
    }

    getForgotPasswordLink(){
        return cy.xpath('//span[contains(.,"Forgot password?")]');
    }

    getAddEmailMessage(){
        return cy.xpath('//div[2]/div[2]/div');
    }

    getForgotEmailLink(){
        return cy.get(':nth-child(3) > button');
    }

    getCreateAccountLink(){
        return cy.xpath('//span[contains(.,"Create account")]');
    }
 
    getLearnMoreLink(){
        return cy.xpath('//a[contains(text(),"Learn more")]');
    }
}

export default LoginPage;