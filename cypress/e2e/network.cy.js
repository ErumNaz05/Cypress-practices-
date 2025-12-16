/// <reference types="cypress" />

//const { eq } = require("cypress/types/lodash");
//const { isTaggedTemplateExpression, isImportEqualsDeclaration } = require("typescript");

describe('NetworkRequest',function(){
    this.beforeEach('visit',function(){
        cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/intercept.html')

    })

    it.skip('SPY - INTERCePT via Server-Route XHR GET Request',function(){
        //cy.log("*** by SPY you are intercepting wather the request arte being made or not")
       // cy.log("*** by STUB  is when you re changing the behaviour of the request are being made or not")

       // cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/intercept.html')
       cy.server()
        cy.route("/users?*").as('users');
        cy.get('#loadThreeUsersXHR').click()
        cy.wait('@users')
       .then(xhr=>{
          expect(xhr.status).to.eq(200)
          cy.get("#xhrusers > tbody >tr").should('have.length',3)
        })
    })
    it.skip('SPY - INTERCePT via Server-Route XHR POST Request',function(){
        cy.server()
        cy.route("/users?*").as('users');
        const user ={
            name:"Erum",
            email: "erum@abc.com"
        };
        cy.get('#xhrname').type(user.name);
        cy.get('#xhremail').type(user.email);
        cy.get('#xhrbtn').click()
        cy.wait(5000)
        cy.wait('@users').then(xhr=>{
            expect(xhr.status).to.eql(201);
            expect(xhr.response.body.name).to.eqls('user.name')
            expect(xhr.response.body.email).to.eqls('user.email')
        })
        cy.get("#xhrspan").should("contain.text","$user.name - user.email")
    })
    it.skip('STUB- INTERCePT via Server-Route XHR GET Request',function(){


    })
})