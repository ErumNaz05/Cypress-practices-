describe('Basic API request',()=>{
    it("Get Request",()=>{
        cy.request('GET',"https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            cy.log('this API request will get all the data present on the page')
            cy.log('response', response)
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(100)

           // expect(response.body.results).length.to.be.equals(8)
            
        })
    })
    it('Get single record Request',()=>{
        cy.request('GET',"https://jsonplaceholder.typicode.com/posts/1")
        .then((resp)=>{
            cy.log('this API request will only one record ')
            cy.log('response', resp)
            expect(resp.status).to.eq(200)
            expect(resp.body).to.have.property('id', 1) 
            expect(resp.body).to.have.property('userId', 1) 
            // expect(resp.body).to.have.text('')
        })
    })
    it('Post a new Record',()=>{
        cy.request('POST',"https://jsonplaceholder.typicode.com/posts",{
            title: 'Sample Title',
            body: 'Sample body',
            userId: 1,
        }).then((Response)=>{
            cy.log('Verify the POST request is sucessfully 201')
            expect(Response.status).to.eq(201)
        })
    })
    it('PUT Update a record',()=>{
        cy.request('PUT',"https://jsonplaceholder.typicode.com/posts/1",{
            title: 'Sample Title update',
            body: 'Sample bodyupdate',
            userId: 1,
        }).then((Response)=>{
            cy.log('Verify the PUT request is sucessfully updated the record 200')
            expect(Response.status).to.eq(200)
        })
    
    })
    
})