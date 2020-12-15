describe("Blog app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3001/api/testing/reset");
    cy.visit("http://localhost:3000");
  });
  it("login form is shown", function () {
    cy.contain("blogs");
    cy.contain("login");
  });
});