/// <reference types="cypress" />

describe ('Filter the places for Barcelona', ()=> {

    beforeEach("visit website",()=>
     {
        
         cy.visit('https://www.airbnb.com/?display_currency=EUR', {
             headers: {
                 'accept': 'application/json, text/plain, */*',
                 'user-agent': 'axios/0.27.2'
             }
         })  
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
          })
     })

     
     it('Find Barcelona' , ()=> {
        
         cy.wait(2000)
         //to Type BArcelona in Anywhere tab
         cy.get('[data-testid="little-search-icon"]').click()
         cy.get('[data-testid="structured-search-input-field-query"]').type('Barcelona',{force:true})
         cy.get('[data-testid="option-0"]').click({force:true})
         cy.wait(1000)
         //to select Flexible July date
         cy.get("#tab--tabs--1").click({force:true})
         cy.get('._d6w4k9 > ._kmf45x > ._1elq749').click({force:true})
         cy.get('button[aria-label="Next"]').click({force:true}).then(function()
            {
                //cy.get('[data-testid="flexible_trip_dates-july"]').click({force:true})
                cy.get('[data-testid="flexible_trip_dates-july"] > ._5mf19l > :nth-child(1) > ._ko9bki').click({force:true})
                //cy.get('[data-testid="flexible_trip_dates-july"] ').click({force:true})

            }
         )
                 //To select number of guests
            cy.get('[data-testid="structured-search-input-field-guests-button"]').click({force:true})
            cy.get('[data-testid="stepper-adults-increase-button"]').dblclick({force:true})
            cy.get('[data-testid="stepper-children-increase-button"]').dblclick({force:true})
         
         cy.wait(2000)
         cy.get('[data-testid="stepper-pets-increase-button"]').click({force:true})
        //cy.get('[data-testid="structured-search-input-search-button"]').click({force:true})
        //trying to click search button after all filters have been placed
         cy.get("._kaq6tx").click({force:true})
        //cy.get('[data-testid="little-search-icon"]').click()
         cy.get('[data-testid="structured-search-input-search-button"]').click({force:true})
        //cy.get(".c8th90").click()
         
      //  cy.get(':nth-child(1) > .c4mnd7m > .c1l1h97y > [itemprop="itemListElement"] > :nth-child(4) > :nth-child(1) > .cy5jw6o > .lwy0wad > .m1v28t5c > .c14dgvke > .cnjlbcx > .s1yvqyx7 > :nth-child(1) > .awuxh4x > .cw9aemg > .c14whb16 > :nth-child(1) > .cjv59qb > ._1h6n1zu > picture > #FMP-target').trigger('mouseover')
       // cy.get(' picture > #FMP-target').trigger('mouseover')
        cy.get('div[@itemprop="itemListElement"] >div[@class="cy5jw6o  dir dir-ltr"] > a[@class="rfexzly dir dir-ltr"]').trigger('mouseover')
        cy.get('div[class="s134m7bb swcqrz4 dir dir-ltr"]').dblclick().dblclick()
     })
  
 })