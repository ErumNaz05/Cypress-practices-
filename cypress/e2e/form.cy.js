/// <reference types="cypress" />

import{formPage}from "./pages/formPage"

let Page = new formPage

it('nev',function(){
Page.navigate('https://trytestingthis.netlify.app/')
    
    })
it (formPage,function(){
    Page.fname('Erum')
})