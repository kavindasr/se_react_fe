/// <reference types="cypress" />
describe('Lawyer create article', function(){
    before(function(){
        cy.visit('http://localhost:3000');
    })
    it('User login', function(){
        cy.get('a.btn.btn-outline-light').contains('Login').click();
        cy.url().should('include','Login');
        cy.get('#formBasicEmail').type('983341365V');
        cy.get('#formBasicPassword').type('Lawyer123');
        cy.get('button[type="submit"]').click();
        cy.url().should('eq','http://localhost:3000/lawyer');
    })
//Submitted successfully
    it('Create article', function(){
        cy.get('input[placeholder="Title"]').type('UI e2e testing');
        cy.get('input[placeholder="Author\'s name"]').type('KSR');
        cy.get('p').type('This is the description about e2e teting using cypress');
        cy.get('button').contains('Submit').click();
        cy.on('window:alert',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('Submitted successfully');
        });
    })
})