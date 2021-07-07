/// <reference types = "cypress" />

context('Home Page Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should navigate to About Us page', () => {
    cy.get('[data-cy=nav-link-about]').contains('About').onclick;
    cy.url().should('include', '/about');
  });
});
