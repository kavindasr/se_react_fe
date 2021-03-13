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
    });

    it('Report complaint', function(){
        cy.get('a').contains('Report complaint').click();
        cy.url().should('include','complaint');
        cy.get('#inputName').type('Kavinda');
        cy.get('#inputID').type('98091221V');
        cy.get('#inputContactnumber').type('0772317095');
        cy.get('#inputLocation').type('My Location');
        cy.get('#exampleFormControlTextarea1').type('This is the complaint description');
        cy.get('input[type="submit"]').click();
        cy.on('window:alert',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('Successfully complaint');
         })
    });

})