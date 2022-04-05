const mongoose = require("mongoose")

require("../mongodb_helper");
const User = require("../../models/users");


describe('User model', () => {
  beforeEach( async () => {
    await mongoose.connection.collections.users.deleteMany({});
  });
  describe("User schema", () => {
   
    it("has a name", () => {
      const user = new User({
        name: "Megan Markle",
        email: "someone@example.com",
        password: "password",
      });
      expect(user.name).toEqual("Megan Markle");
    });

    it("has a password", () => {
      const user = new User({
        name: "Megan Markle",
        email: "someone@example.com",
        password: "password",
      });
      expect(user.password).toEqual("password");
    });

    it("has a email", () => {
      const user = new User({
        name: "Megan Markle",
        email: "someone@example.com",
        password: "password",
      });
      expect(user.email).toEqual("someone@example.com");
    });
    
  })
})