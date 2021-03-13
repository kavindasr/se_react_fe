/// <reference types="cypress" />
describe('User login', function(){
    before(function(){
        cy.visit('http://localhost:3000');
    })
    it('User login with wrong credentials', function(){
        cy.get('a.btn.btn-outline-light').contains('Login').click();
        cy.url().should('include','Login');
        cy.get('#formBasicEmail').type('980912221V');
        cy.get('#formBasicPassword').type('Passwor123');
        cy.get('button[type="submit"]').click();
        cy.on('window:alert',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('nic or password incorrect!');
        });
    })
})