/// <reference types="cypress" />

import { values } from "cypress/types/lodash"

describe("Date picker",function(){

it("test Calander", function(){
    cy.visit("https://demoqa.com/automation-practice-form")

    //cy.get('.react-datepicker-wrapper')
 cy.get('#dateOfBirth-wrapper')
   //// cy.get('#dateOfBirth')
    cy.get('.react-datepicker-wrapper')
    cy.get('#dateOfBirthInput').click()
   // 
    
    cy.get('.react-datepicker')
    cy.get('.react-datepicker__week').find('.react-datepicker__day--today')
    .click()
        //.contains('04 Aug 2022')

  // cy.get('.form-control react-datepicker-ignore-onclickoutside')
   // .should('have.'04 Aug 2022').click()


    //.should('have.class',.react-datepicker-wrapper)
    

  // cy.get('.react-datepicker-wrapper')
  //  cy.get('.react-datepicker__input-container').click()
  //cy.get('dateOfBirth-wrapper').click()
  //cy.get('userForm').click()
    //cy.get('[type="checkbox"]').check()
    //('value="04 Aug 2022"')

  })

  /* it.only('datepicker',function(){
    cy.visit('https://www.phptravels.net')
    cy.get('#checkin').click()   
  }) */
})
