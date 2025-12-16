/// <reference types="cypress" />

describe('CustomCommand',function(){

   it('Login',function(){

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('#txtUsername').type('Admin')
   // cy.get('#divPassword > .form-hint').type("admin123")
   cy.get('#txtPassword')
   .trigger('mouse.hover',{force: true})
   .type('admin123')
    cy.get('#btnLogin').click()

   // cy.get('#divUsername > .form-hint').type('Admin')
    //cy.get('#txtPassword').type('admin123')
    //cy.get('#btnLogin').click()
    //cy.wait(3000)
       
   })

   it('Navigation',function(){


    cy.visit("https://opensource-demo.orangehrmlive.com")
    cy.get('#txtUsername').type('Admin')
   // cy.get('#divPassword > .form-hint').type("admin123")
   cy.get('#txtPassword')
   .trigger('mouse.hover',{force: true})
   .type('admin123')
    cy.get('#btnLogin').click()


    cy.get('#menu_admin_viewAdminModule > b')
    .should('be.visible')
    .trigger('mouseover').click()
  /*  cy.wait(5000)
    cy.get('#menu_admin_UserManagement').click({force: true})
    cy.wait(3000)
    cy.get('#menu_admin_viewAdminModule > b').should('be.visible').trigger('mouseover').click()
    cy.wait(5000)
    cy.get('#menu_admin_UserManagement').click({force: true})
    // cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('#searchSystemUser_userName').type("Anthony.Nolan")
    cy.get('#searchSystemUser_userType').select('ESS')
   // cy.get('#searchSystemUser_status').select('Enabled')
    cy.get('#searchBtn').click()
   cy.wait(8000)
    cy.get('.odd > :nth-child(2) > a').click()
    cy.get('#btnSave').click()
    cy.get('#systemUser_status').select('Disabled')
    cy.get('#btnSave').click()
    cy.get('#searchSystemUser_userName').type("Anthony.Nolan")
    cy.get('#searchBtn').click()
*/
})
it('Add',function(){


    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get('#txtUsername').type('Admin')
   // cy.get('#divPassword > .form-hint').type("admin123")
   cy.get('#txtPassword')
   .trigger('mouse.hover',{force: true})
   .type('admin123')
    cy.get('#btnLogin').click()

    cy.get('#menu_admin_viewAdminModule > b')
    .should('be.visible')
    .trigger('mouseover').click()

    cy.get('#btnAdd').click()
    cy.get('#systemUser_employeeName_empName').type('Devsinc')
    cy.get('#systemUser_employeeName_empName').type('Erum')

   })
   
})