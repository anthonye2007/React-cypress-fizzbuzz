context('FizzBuzz - Integration', () => {
  it('should show display Fizz when response returns 6', () => {
    cy.visit('http://localhost:3000', 
      { 
        onBeforeLoad: (win) => {
          cy.stub(win, 'fetch')
            .withArgs('http://localhost:3001/number')
            .returns( Promise.resolve(
              { 
                json: () => { 
                  return { value: 6 } 
                }
              })
            );
        }
      }
    );

    cy.contains('Get Number').click();
    cy.get('#result').should('have.text', 'Fizz');
  });

  it('should show display Buzz when response returns 10', () => {
    cy.visit('http://localhost:3000', 
      { 
        onBeforeLoad: (win) => {
          cy.stub(win, 'fetch')
            .withArgs('http://localhost:3001/number')
            .returns( Promise.resolve(
              { 
                json: () => { 
                  return { value: 10 } 
                }
              })
            );
        }
      }
    );

    cy.contains('Get Number').click();
    cy.get('#result').should('have.text', 'Buzz');
  });
});

context('FizzBuzz - e2e', () => {
  it('should display Fizz when response returns 6', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Get Number').click();
    cy.get('#result').should('have.text', 'Fizz');
  });
});
