/// <reference types="cypress" />
describe('User login', function(){
    before(function(){
        cy.visit('http://localhost:3000');
    })
    it('User login', function(){
        cy.get('a.btn.btn-outline-light').contains('Login').click();
        cy.url().should('include','Login');
        cy.get('#formBasicEmail').type('980912221V');
        cy.get('#formBasicPassword').type('Password123');
        cy.get('button[type="submit"]').click();
        cy.url().should('eq','http://localhost:3000/');
    })
})