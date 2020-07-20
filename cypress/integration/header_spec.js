describe('Header', () => {
    before(() => {
        cy.visit('/')
    })
    it('brand', () => {
        cy.get('.navbar .navbar-brand').should('have.text', 'Cypress Example')
    });

    it('menu links', () => {
        const menuItems = ['Home', 'Counter', 'Users']
        cy.get('nav a').as('menu')
        cy.get('@menu').should('have.length', 3)
        cy.get('@menu').first().should('have.class', 'active')
        cy.get('@menu').each((item) => {
            expect(menuItems).contains(item.text())
        })
    });
})