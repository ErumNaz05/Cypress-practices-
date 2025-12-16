
import{LoginPage}from "./pages/LoginPage"

//let LoginPage= new LoginPage  //can also use var instead of let
const loginPage= new LoginPage  // better use const so the value cant be changed

it("login",function(){
    loginPage.navigate('https://trytestingthis.netlify.app') // now the values are not hardcoaded
    loginPage.enterUsername('test')
    loginPage.enterPassword('test')
    loginPage.clickLogin()
        // The above code replaces the previous 
    /*
    cy.visit("https://trytestingthis.netlify.app/")
    cy.get('#uname').type('test')     // still these values e.g test are hard coaded
    cy.get('#pwd').type('test')
    cy.get('[type="submit"]').click()
    */
})