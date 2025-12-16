describe('airbnb ', () => {

    before('Visit ', () => {

     cy.clearLocalStorage()
    
      cy.visit('https://www.airbnb.com/', {
        headers: {
            'accept': 'application/json, text/plain, */*',
            'user-agent': 'axios/0.27.2'
        }
      })

      new Cypress.Promise((resolve) => {
        cy.wait(8000)
        cy.get('[data-testid="modal-container"]')
        .find('._i5m7e6w').then(()=>{
         // cy.wait(10000)
          cy.get('span[class="i1h5tsj6 dir dir-ltr"]').click()
          })  
          resolve
         })
    })
          /*
         cy.get('body').then((body) => {
            if(body.find('.czcfm7x').length>0)
            {
                cy.get('.czcfm7x').click()
                cy.wait(4000)
                cy.log("if command ran")
                cy.get('[data-testid="cypress-headernav-profile"]').click({force: true})
                
            }
            else
            {
                cy.wait(4000)
                cy.log("else command ran")
                cy.get('[data-testid="cypress-headernav-profile"]').click({force: true})
            }
          })
      })
          */
  

  it('Login',()=>{
     cy.log("log in on site ");
     cy.wait(4000)
     cy.get('button[class="c1grjlav crawnjq dir dir-ltr"]').click()
     cy.get('[data-testid="cypress-headernav-login"]').click()
    //cy.get('div[class="_12kfhdn"]')
    // cy.wait(5000)
    // cy.get('div[data-testid="login-pane"]')
      // cy.scrollTo('bottom')
    cy.get('div[class="_12kfhdn"]').contains("Continue with email").click()
     
     cy.get('#email-login-email').type('erumnaz05@gmail.com')

     cy.get('button[data-testid="signup-login-submit-btn"]').click()
     cy.wait(3000)
     cy.get('input[id="email-signup-password"]').type('airbnb123')
     cy.get('button[data-testid="signup-login-submit-btn"]').click({ force: true })
    
    cy.get('[data-testid="cypress-headernav-profile"]').click()
    cy.get('[data-testid="cypress-headernav-logout"]').click()

  })  

 
  it.skip('log out',()=>{
    cy.log("logout from site ");
    cy.wait(10000)
    cy.get('[data-testid="cypress-headernav-profile"]').click({force: true})
 
    //cy.get('[data-testid="cypress-headernav-profile"]', { timeout: 10000 }).click()
    cy.get('[data-testid="cypress-headernav-logout"]').click()
    cy.get('.fnky2vc').click() //cypress
  /* 
    //cy.get('[class="fp36fst dir dir-ltr"]').find('[class="fnky2vc dir dir-ltr"]').click()
    //.find('[data-testid="cypress-headernav-profile"]').click( {force: true})
    cy.get( '[data-section-id="EXPLORE_HEADER_NAV"]').find('._3hmsj')
    .find('button[class="c1grjlav crawnjq dir dir-ltr"]').click()
    //cy.get('body')//
    cy.get('[data-testid="cypress-headernav-profile"]').click()
   // cy.get('div[class="_167wsvl"]')
   // .find('img[class="fnky2vc dir dir-ltr"]').click()
  */
  
  })
})
     
    
