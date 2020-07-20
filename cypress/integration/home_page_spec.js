/// <reference types="Cypress" />

describe('Home Page', () => {
    it('header', () => {
        cy.visit('/')
        cy.get('.justify-content-md-center .col-md-auto h1').should('have.text', 'Cypress Example')
        cy.get('.justify-content-md-center .col-md-auto').should('contain.text', '(Counter and Users List)')
    });
})