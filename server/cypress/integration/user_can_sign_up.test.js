  describe("Signup", () => {
    it("A user signs up and is redirected to sign in", () => {
      // sign up
      cy.visit("http://localhost:3000/signup");
      
      cy.get('input[data-testid="name"]').type("someone");
      cy.get('input[data-testid="email"]').type("someone@test.com");
      cy.get('input[data-testid="password"]').type("1234");
      cy.get('input[data-testid="signup-button"]').click();
  
      cy.url().should("include", "/posts");
    });
  });