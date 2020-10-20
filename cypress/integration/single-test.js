

describe('single test', () => {
  describe('using clock/tick statement', () => {
    before(() => {
      cy.visit('/');
      cy.location('pathname').should('eq', '/');
    });
    beforeEach(() => {
      cy.clock();
      cy.get('[data-cy="search"]').clear();
    });

    it('search book 101', () => {
      cy.server();
      cy.route("http://localhost:3000", {
        "id": 101,
        "name": "Book 1",
        "category": "cat123"
      }).as('books');
      cy.get('[data-cy="search"]').type('101').wait('@books');
      cy.get('[data-cy="display"]').should('contain', 'Id: 101, Name: Angular by Krishna, Category: Angular');
    });

    it('search book 102 and clock-tick', () => {
      cy.server();
      cy.route("http://localhost:3000", {
        "id": 102,
        "name": "Book 2",
        "category": "cat123"
      }).as('books');
      cy.get('[data-cy="search"]').type('102').wait('@books');
      cy.get('[data-cy="display"]').should('contain', '102, Name: Core Java by Vishnu, Category: Java');

    });

    it.only('search book 103', () => {
      cy.server();
      cy.route("http://localhost:3000/books/*", {
        "id": 103,
        "name": "Book 2",
        "category": "cat321"
      }).as('books');
      cy.get('[data-cy="search"]').type('103');
      cy.tick(2000);
      cy.wait('@books');
      cy.get('[data-cy="display"]').should('contain', '103, Name: Book 2, Category: cat321');
    });
  })
})
