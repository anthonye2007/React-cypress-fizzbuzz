context('FizzBuzz', () => {
  beforeEach(() => {
    
  });

  it('should show result when click Get Number', () => {

    cy.server()           // enable response stubbing
    cy.route({
      method: 'GET',      // Route all GET requests
      url: 'http://localhost/users/*',    // that have a URL that matches '/users/*'
      response: []        // and force the response to be: []
    });

    cy.visit('http://localhost:3000', 
      { 
        onBeforeLoad: (win) => {
          cy.stub(win, 'fetch')
            .withArgs('http://localhost:3001/number')
            .returns( Promise.resolve({ "value": 6}) )
        }
      }
    );

    cy.contains('Get Number').click();
    cy.contains('Fizz');
  });
});