describe ('Sign in with email', ()=> {

    before("visit website",()=>{
        
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

    it("run fiter",()=>{
      
        cy.log('search for barcelona')
        //cy.get('[id="littleSearchLabel"]')
        // cy.get('[data-testid="little-search-icon]').click()
        cy.get('input[data-testid="structured-search-input-field-query"]')
        .type('barcelona',{force: true})
        // cy.get('[id="bigsearch-query-location-input"]').contains('Bercelona,Spain').click()
        cy.get('[data-testid="option-0"] > ._1825a1k').click()
        cy.log('select when ')
        //cy.get('[data-index="2"] > .f1xx50dm')
        cy.get('button[id="tab--tabs--1"]').click({force: true}) // select flexible
        cy.get('[id="flexible_trip_lengths-one_week"]').click({force: true}) //select week
        // cy.get('button[class="_1hyyr237"]').click() //select month
        cy.get('[data-testid="flexible_trip_dates-june"]').click({force: true})  // select june
       //   cy.get('[class="_1c87gyz"]').click({force: true}) // select june

        cy.log('select guests')
        cy.get('[data-index="2"] > .f1xx50dm').click()
        
        cy.get('[data-testid="stepper-adults-increase-button"] > ._8ovatg > svg').dblclick({force: true})
        cy.get('[data-testid="stepper-children-increase-button"] > ._8ovatg').dblclick({force: true})
        cy.get('[data-testid="stepper-pets-increase-button"] > ._8ovatg > svg').click({force: true})
        
        cy.get('._kaq6tx').click({force: true}) //search
        //price filter
        cy.wait(4000)
        cy.get('.t1o11edy').click({force: true})
        
        cy.wait(4000)
        cy.log('Run price filter')
        cy.get('[id="price_filter_max"]').clear().type('400')
        cy.get('input[name="Entire place"]').check()
        cy.get(':nth-child(1) > ._5mf19l > :nth-child(1) > ._t7tlos > ._3hmsj > ._w7zj3g').click() // change this to unique id or attribute or xpath
       

        cy.log("view details")

            cy.get('a[class="rfexzly dir dir-ltr"]').then(($el)=>{
             const link =$el.prop('href'); 
            //const link = $el.attr('href');
            cy.log(`Printing the URL: ${link}`);
            cy.visit(link,{
                headers: {
                    'accept': 'application/json, text/plain, */*',
                    'user-agent': 'axios/0.27.2'
                }
            })

            cy.wait(8000)
            // cy.get('._1piuevz > .czcfm7x').click()  // appears when user is not logged in
            cy.log("view all pictures")
            cy.get('._uhxsfg').click()
            cy.go('back') 
            cy.scrollTo('bottom')
            cy.log("view cancellation policy")
            cy.get(':nth-child(3) > :nth-child(1) > [style="margin-top: 24px;"] > .b1k5q1b3 > .c1d1a0n6 > .cn5lml1').click()
            //cy.xpath('.//span[@class="cn5lml1 dir dir-ltr"]'[4]).click()
            cy.get('div[class="_1b64dznw"] >[class="_d2kdnf"] > [class="czcfm7x dir dir-ltr"]').click()
            cy.wait(4000)
        
           cy.log("add to wish list")
           cy.get('[class="_1e5q4qoz"]').then(($btn)=>{
                if($btn.find('button[data-testid="pdp-save-button-unsaved"]')){  // not clicked
                    cy.get('button[data-testid="pdp-save-button-unsaved"]').click({force: true})
                    
                    cy.get('div[class="_rii3jc"]').then((wish) => {

                        if(wish.find('[id="loading-row-title"]').length>0) {
                            cy.log("if wish list already exist ")
                            // cy.get('._gfomxi > ._gw4xx4 > .length>0').click({ multiple: true })
                            // cy.contains('Create new wishlist').
                            cy.get('button[class="_11eqlma4"').contains('house').click({ multiple: true })
                            //button[@class="_11eqlma4"]
                            // cy.wait(4000)
                            }
                        else{
                            cy.wait(4000)
                            cy.log("else create new wish")
                            cy.get('div[class="_1b64dznw"]').find('input[id="name-list-input-save-to-list-modal"]').type('wish')
                            //   cy.get('button[class="_148dgdpk"]').click({ multiple: true })
                        }
                    })
                }
        
                else($btn.find('[data-testid="pdp-save-button-saved"]')) // if clicked
                    {
                        cy.log('place already saved in list')
                    }
            })
        
        })
        cy.log('Back to main page')
        cy.go('back')
        
    
    })
    
})