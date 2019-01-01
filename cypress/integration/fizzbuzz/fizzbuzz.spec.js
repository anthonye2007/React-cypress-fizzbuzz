context('FizzBuzz', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should have a Submit button', () => {
    cy.get('button').should('be.visible');
  });
});