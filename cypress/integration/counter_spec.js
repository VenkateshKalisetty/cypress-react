/// <reference types="Cypress" />

describe('Counter', () => {
    before(() => {
        cy.visit('/counter')
    })

    it('Add button', () => {
        cy.get('.mt-5.container .row button').as('btns').contains('+').dblclick()
        cy.get('.mt-5.container .row > h1').should('have.text', 2)
    })

    it('Subtract button', () => {
        cy.get('.mt-5.container .row button').as('btns').contains('-').dblclick()
        cy.get('.mt-5.container .row > h1').should('have.text', 0)
    })

    it('Enter value', () => {
        cy.get('.form-control').clear().type(5)
        cy.get('.input-group .input-group-append button').click()
        cy.get('.mt-5.container .row > h1').should('have.text', 5)
    });
})