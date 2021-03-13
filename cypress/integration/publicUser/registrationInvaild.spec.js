/// <reference types="cypress" />
describe('User registration', function(){
    before(function(){
        cy.visit('http://localhost:3000');
    })
    it('Submit the form invaild', function(){
        cy.get('a.btn.btn-outline-light').contains('Register').click();
        cy.url().should('include','Register');
        cy.get('#inputName').type('KSR');
        cy.get('#inputID').type('980912221V');
        cy.get('#inputContactnumber').type('0714461798');
        cy.get('input[type="email"]').type('ksr@gmail.com');
        cy.get('#inputPassword').type('Password123');
        cy.get('input[type="submit"]').click();
        cy.on('window:alert',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('Somthing went wrong!');
         })
    })
})