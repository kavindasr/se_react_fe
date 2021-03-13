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

    it('Update progress', function(){
        cy.get('a').contains('Update progress of Complaints').click();
        cy.get('svg').first().click();
        cy.get('input[name="status"]').first().type('1');
        cy.get('svg').first().click();
        cy.get('td').contains('01').should('be.visible');
    });
})