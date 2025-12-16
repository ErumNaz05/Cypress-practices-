/// <reference types="cypress" />

describe ('Sign in with email', ()=> {

    beforeEach("visit website",()=>
     {
        
         cy.visit('https://www.airbnb.com/?display_currency=EUR', {
             headers: {
                 'accept': 'application/json, text/plain, */*',
                 'user-agent': 'axios/0.27.2'
             }
         })  
         cy.wait(4000)
         cy.log("close the popup menu if appears")
         cy.get('body').then((body) => {
             if(body.find('.czcfm7x').length>0)
             {
                 cy.get('.czcfm7x').click()
                 cy.wait(4000)
                 cy.log("if command ran")
                 cy.get('[data-testid="cypress-headernav-profile"]').click()
                 
             }
             else
             {
                 cy.wait(4000)
                 cy.log("else command ran")
                 cy.get('[data-testid="cypress-headernav-profile"]').click()
             }
 
         })
    })
     it('Login form' , ()=> {
       
        cy.log("log in on the site")
        cy.get('[data-testid="cypress-headernav-login"]').click()
        cy.get('div[data-testid="login-pane"]')
        cy.wait(2000)
 
         cy.get('[data-testid="social-auth-button-email"]').click()
 
         cy.get('[aria-describedby="email-login-email-InputField-help"]').type("erumnaz05@gmail.com")
         cy.get('[data-testid="signup-login-submit-btn"]').click()
         cy.wait(1000)
         cy.get('[data-testid="email-signup-password"]').type("airbnb123")
         cy.get('[data-testid="signup-login-submit-btn"]').click()
         
         cy.log("logout from the site")
         cy.get('[data-testid="cypress-headernav-profile"]').click()
         cy.get('[data-testid="cypress-headernav-logout"]').click()
        
     })
 
     
 })