
describe('Typeahead Tests', () => {
    before(() => {
    });
    beforeEach(() => {

    });
    it.only('Angular Material without Debounce', () => {
        cy.server();
        cy.route("http://localhost:3000/books/", [
            {
                "id": 101,
                "name": "Book 1",
                "category": "cat123"
            }
        ]).as('books');

        // cy.clock()
        cy.visit('/typeahead');
        cy.location('pathname').should('eq', '/typeahead');
        // cy.get('[data-cy="searchApplication"]').clear();
        cy.get('[data-cy="searchBook"]').type('102');
        // cy.tick(3000);
        cy.wait('@books').then(text => {
            cy.log(text);

            cy.get('mat-option:eq(0)').should('be.visible').click();
            cy.get('[data-cy="listBooks"]').should('be.visible').and('have.length', 1);

        });
    });

    it.only('Angular Material with Debounce', () => {
        cy.server();
        cy.route("http://localhost:3000/books/", [
            {
                "id": 101,
                "name": "Book 1",
                "category": "cat123"
            }
        ]).as('books');

        cy.clock(Date.now, ['Date'])
        cy.visit('/typeahead');
        cy.location('pathname').should('eq', '/typeahead');
        // cy.get('[data-cy="searchApplication"]').clear();
        cy.get('[data-cy="searchBook2"]')
            .type('102')
            .tick(3000)
            .wait('@books').then(text => {
                cy.get('mat-option:eq(0)').should('be.visible').click();
                cy.get('[data-cy="listBooks2"]').should('be.visible').and('have.length', 1);

            });
    });
});