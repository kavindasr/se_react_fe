/// <reference types="cypress" />
describe('Police officer login', function(){
    before(function(){
        cy.visit('http://localhost:3000');
    })
    it('User login', function(){
        cy.get('a.btn.btn-outline-light').contains('Login').click();
        cy.url().should('include','Login');
        cy.get('#formBasicEmail').type('983341366V');
        cy.get('#formBasicPassword').type('Police123');
        cy.get('button[type="submit"]').click();
        cy.url().should('eq','http://localhost:3000/police#/');
    });

    // it('Add suspect', function(){
    //     cy.get('a').contains('Update RIC').click();
    //     cy.get('input[placeholder="first name"]').type('Maru');
    //     cy.get('input[placeholder="Last name"]').type('Sira');
    //     cy.get('input[placeholder="Description"]').type('Last seen at nowhere');
    //     cy.get('input[placeholder="URL"]').type('http://someurl.com');
    //     cy.get('button').contains('ADD').click();
    //     cy.on('window:alert',(txt)=>{
    //         //Mocha assertions
    //         expect(txt).to.contains('Successfully added!');
    //     });
    // });

    it('Update RIC list', function(){
        cy.get('a').contains('Update RIC').click();
        cy.get('input[placeholder="Type ID you want to delete"]').type('61');
        cy.get('button').contains('DELETE').click();
        cy.on('window:alert',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('Deleted!');
        });
    });
})