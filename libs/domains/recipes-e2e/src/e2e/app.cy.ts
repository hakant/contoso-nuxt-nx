describe('My First Test', () => {
    it('visits the app root url', () => {
      cy.visit('/recipes');
      cy.contains('h1', 'Hello from Recipes page!');
    });
  });