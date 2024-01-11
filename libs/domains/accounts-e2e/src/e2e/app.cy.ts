describe('My First Test', () => {
    it('visits the app root url', () => {
      cy.visit('/accounts');
      cy.contains('h1', 'Hello from Accounts page!');
    });
  });