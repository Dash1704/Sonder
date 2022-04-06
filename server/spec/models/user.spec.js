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

    it("has an email", () => {
      const user = new User({
        name: "Megan Markle",
        email: "someone@example.com",
        password: "password",
      });
      expect(user.email).toEqual("someone@example.com");
    });

    it("can list all users", async () => {
      let users = await User.find();
  
      expect(users).toEqual([]);
    });

    it("can save a user",  async () => {
      const user = new User({ name: "Bob", email: "someone@example.com", password: "password" });
  
      await user.save();
      const data = await User.find()
  
      expect(data[0]).toMatchObject({
        name: "Bob",
        email: "someone@example.com",
        password: "password",
        });
    });
    it("can't save a user with an email aready signed up", async () => {
      const user1 = new User({
        name: "Bob",
        email: "someone@example.com",
        password: "password",
      });
  
      const user2 = new User({
        name: "Chris",
        email: "someone@example.com",
        password: "password1",
      });
  
      await user1.save()
      
      await user2.save((err) =>{
        expect(err).toBeTruthy()
      })
  
      const data = await User.find() 
      
      expect(data.length).toEqual(1)
    
    }); 
  })
})