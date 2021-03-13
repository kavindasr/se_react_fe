/// <reference types="cypress" />
describe('Lawyer login', function(){
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
})