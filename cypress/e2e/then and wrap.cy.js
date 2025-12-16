
// Cypress commands are Asynchronous
// that means we cannot stor the result 
/* it creates a command queue that always run 
sequentially and in the expected order /*
//Using .then() allows you to use the yielded subject in a callback function
// and should be used when you need to manipulate some values or do some actions.


cy.get('form').within(($form) => {
  // ... more commands

  cy.wrap($form).should('have.class', 'form-container')
})
*/
// invoke 
// grab some text store it in a parameter and then we can esily do some assertion on it
/*
let message = 'hello'
const english = {
  greeting() {
    return message
  },
}

setTimeout(() => {
  message = 'bye'
}, 1000)

// initially the english.greeting() returns "hello" failing the assertion.
// .invoke('greeting') tries again and again until after 1 second
// the returned message becomes "bye" and the assertion passes
cy.wrap(english).invoke('greeting').should('equal', 'bye')
*/