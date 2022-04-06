describe("Signup", () => {
    it("A user signs up and is redirected to sign in", () => {
      // sign up
      cy.visit("http://localhost:3000/signup");
      cy.get("#Name").type("someone");
      cy.get("#Email").type("someone@someone.com");
      cy.get("#Password").type("password");
      cy.get("#Submit").click();
  
      cy.url().should("include", "/posts");
    });
  });