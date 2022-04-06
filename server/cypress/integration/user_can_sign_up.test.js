describe("Signup", () => {
    it("A user signs up and is redirected to sign in", () => {
      // sign up
      cy.visit("/signup");
      cy.get("#name").type("someone");
      cy.get("#email").type("someone@someone.com");
      cy.get("#password").type("password");
      cy.get("#submit").click();
  
      cy.url().should("include", "/posts");
    });
  });