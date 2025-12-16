export class LoginPage{
     
    // the object locators are still with the methods or functions
    // we can keep the seprate by making variables

      // these are objects
    LoginPage_username = "#uname"  //variable name is deciced by user .. this format is not syntx
    LoginPage_password_id= "test"  // can also add the locator name e.g. id for readability
    LoginPage_button='[type="submit"]'  //double qots are not necassary

     // these are actions

    navigate(url:string){ // in JS we can continue with the parameter name only

        cy.visit(url)

    }
    enterUsername(enterUsername:string){

        //cy.get('#uname').type('test')  // these values e.g. url , test are hard coaded
       // cy.get('#uname').type('enterUsername')
      // cy.get('LoginPage_username').type('enterUsername')
       cy.get('#uname').type('test')


    }
    enterPassword(Password:string){

        cy.get('#pwd').type('test')
        //cy.get(this.LoginPage_password_id).type('Password') //this refers to class variable
        // can also use this operator while passing variable containg Locator value


    }
    clickLogin(){

        //cy.get('[type="submit"]').click()
       // LoginPage_button
        cy.get(this.LoginPage_button).click()


    }
}