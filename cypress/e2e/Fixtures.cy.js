/// <reference types="cypress" />
import fixtureFile from './../fixtures/login.json';

// fixture test Dats is present in Fixture foulder.
  //Can reuse the Fixture file in multipple Test cases
  beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com')
  })
    before(function(){
    let data
    cy.fixture('../login.json').then(function(data){
      this.data=data
       })


describe('Test suite',function(){
   
  
   it('Fixtures',function(){

   // cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
   //cy.get('input[name="Email"]').type('admin@yourstore.com')
   //cy.get('input[name="Password"]').type('admin')
  // cy.get('.button-1').click()
cy.log("type somethomh")

   //cy.visit('https://opensource-demo.orangehrmlive.com')
  // cy.fixture('example.json').then(function(data){
   cy.get('input[id="txtUsername"]').type('this.data.Username')
   cy.get('input[name="txtPassword"]').type('this.data.password')
  cy.get('#btnLogin')
   //cy.get('[class="button hover"]')
   .click()
    

    })
  // it("Reg form",function(){
   
})
})
