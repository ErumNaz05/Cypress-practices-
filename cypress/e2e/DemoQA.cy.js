/// <reference types="cypress" />
// import cypress from "cypress"
describe("this is DemoQA",function(){
  this.beforeEach('visit and resize the page',function(){
    cy.visit("https://demoqa.com/")
    cy.viewport(1710, 1166)
  })
    it("DemoQA Form",function(){
       
        // click on elements
        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg > path').click()
        //cy.get('#google_ads_iframe_\/21849154601\,22343295815\/Ad\.Plus-Anchor_0__container__').click()
        // click on arrow head
        cy.get(':nth-child(2) > .group-header > .header-wrapper > .header-right').click()
        // click on form
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()
        // type  first name 
        cy.get('#firstName').type("erum")
        // type lastname
        cy.get('#lastName').type("naz")
        // type email
        cy.get('#userEmail').type("test@test.com")
        // let Female = 'Female'
        cy.wait(4000)
        // select gender
        cy.get('.custom-control.custom-radio.custom-control-inline')// hit by class of div1 
        // don't forget to add . instead of space when using class
        cy.get('[class="custom-control custom-radio custom-control-inline"]')   
        cy.get('.custom-radio').contains('Female').click() // custom radio is common  
        // select number
        cy.get('#userNumber').type('0123456789')
        // date picker
        cy.get('#dateOfBirth-wrapper')
        // cy.get('#dateOfBirth')
        cy.get('.react-datepicker-wrapper')
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker')
        cy.get('.react-datepicker__week')
        .find('.react-datepicker__day--today')
        .click()
  
        cy.get('.subjects-auto-complete__value-container').type('sample text')
        // select checkbox
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click()
        // upload image
      cy.get('.form-file')
      cy.get('#uploadPicture')
        .attachFile('../fixtures/logo1.jpg')
       // cy.wait('@upload', { requestTimeout: 120000 });
        //current address
        cy.get('#currentAddress').type('sample text ')
        // select state
        cy.get('#state').click()
        cy.get('#state').type('NC')
        cy.wait(5000)
        cy.get('.css-1g6gooi')    //dropdown class 
        .each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            //if ($el.text().includes('NCR')){
              if ($el.text() === 'NCR'){
              // wrap this element so we can
              // use cypress commands on it
              cy.wrap($el).click()
            }    
        })
        
       cy.get('#stateCity-wrapper > :nth-child(3)').should('be.visible').click()
       cy.get('#stateCity-wrapper > :nth-child(3)').type('de')
       cy.get('[class=" css-1wy0on6"]')
        .each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.text() === 'Delhi') {
              // wrap this element so we can
              // use cypress commands on it
              cy.wrap($el).click()
            }   
          })
              // submit
              cy.get('#submit').click()
    }) 
    
    it("modal dialogs",function(){
      //practice with vartiables
    cy.visit('https://demoqa.com/modal-dialogs')
      it('return var',function(){
      // make a constant variable
      const SmallModelText = cy.get('#showSmallModal').text()  // get value of text in constant // .text is just a chainable command
      cy.log(SmallModelText) // pass value of constant to log 
      //this will cause type error
      })
    })
  it.only('Elements',function(){
    //text box
    cy.get('#app').click()
    cy.get(':nth-child(1) > .group-header > .header-wrapper').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
    cy.get('#userName').type('Erum Naz')
    cy.get('#userEmail').type('erum@test.com')
    cy.get('#currentAddress').type('Sample address here')
    cy.get('#permanentAddress').type('Sample address here')
    cy.get('#submit').click()
    cy.get('#name').contains('Erum Naz')
    // Checkboxes
    //Indeterminate Checkboxes ???
    /*cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
   // cy.get(':nth-child(2) > .rct-text > .rct-collapse > .rct-icon').click()
   cy.get('.rct-node-expanded > :nth-child(1)').click() // click on arrow to open tree
    
    cy.get('.rct-icon.rct-icon-check').click()
   // cy.get('[class="rct-options"]').find('[class="rct-checkbox"]').click()
    cy.get('.react-checkbox-tree rct-icons-fa4').find('.rct-icon.rct-icon-check').check()
    //radio buttons
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click()
    */
    //Radio buttons 
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click()
    //cy.get('input[id="yesRadio"]')
    cy.get(':nth-child(2) > .custom-control-label').click()
    cy.get('.mt-3').contains('You have selected Yes')
    cy.get('.custom-control.disabled').should('be.disabled')
  })
  
})