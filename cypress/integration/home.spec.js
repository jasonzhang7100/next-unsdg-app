/// <reference types = "cypress" />

context('Home Page Test', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should find the home page tags and relevant contents', () => {
    cy.get('h1').contains('17 GOALS');
  });

  it('should get goal list through getStaticProps', () => {
    cy.get('[data-cy=goal-list]').should('have.length', 1).and('be.visible');
  });

  it('should navigate to About Us page', () => {
    cy.get('[data-cy=nav-link-about]').contains('About').click();
    cy.url().should('include', '/about');
  });
});
