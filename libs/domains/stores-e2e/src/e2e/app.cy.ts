describe('My First Test', () => {
    it('visits the app root url', () => {
      cy.visit('/stores');
      cy.contains('h1', 'Hello from Stores page!');
    });
  });