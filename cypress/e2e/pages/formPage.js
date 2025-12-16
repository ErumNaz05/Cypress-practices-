export class formPage{
    form_fname = "#fname"

navigate(url){
    cy.visit(url)
}
fname(string){
    cy.get(form_fname).type(fname)
}


}
