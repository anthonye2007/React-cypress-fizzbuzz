context('FizzBuzz', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should show result when click Get Number', () => {
    cy.contains('Get Number').click();
    cy.contains('Fizz');
  });
});