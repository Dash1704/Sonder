const mongoose = require("mongoose")

require("../mongodb_helper");
const Mother = require("../../models/mother");


describe('Mother model', () => {
  beforeEach( async () => {
    await mongoose.connection.collections.mothers.deleteMany({});
  });
  describe("Mother schema", () => {
   
    it("has a name", async () => {
      const mother = new Mother({
        name: "Megan Markle",
        email: "someone@example.com",
        password: "password",
        city: "London"
      });
      await mother.save()
      expect(mother.name).toEqual("Megan Markle");
    });

    it("has a password", () => {
      const mother = new Mother({
        name: "Megan Markle",
        email: "someone@example.com",
        password: "password",
        city: "London"
      });
      expect(mother.password).toEqual("password");
    });

    it("has a city", () => {
      const mother = new Mother({
        name: "Megan Markle",
        email: "someone@example.com",
        password: "password",
        city: "London"
      });
      expect(mother.city).toEqual("London");
    });

    it("has an email", () => {
      const mother = new Mother({
        name: "Megan Markle",
        email: "someone@example.com",
        password: "password",
        city: "London"
      });
      expect(mother.email).toEqual("someone@example.com");
    });

    it("can list all users", async () => {
      let users = await Mother.find();
  
      expect(users).toEqual([]);
    });

    it("can save a user",  async () => {
      const mother = new Mother({ name: "Bob", email: "someone@example.com", password: "password", city: "London" });
  
      await mother.save();
      const data = await Mother.find()
  
      expect(data[0]).toMatchObject({
        name: "Bob",
        email: "someone@example.com",
        password: "password",
        city: "London"
        });
    });
    it("can't save a user with an email aready signed up", async () => {
      const mother1 = new Mother({
        name: "Bob",
        email: "someone@example.com",
        password: "password",
        city: "London"
      });
  
      const mother2 = new Mother({
        name: "Chris",
        email: "someone@example.com",
        password: "password1",
        city: "London"
      });
  
      await mother1.save()
      
      await mother2.save((err) =>{
        expect(err).toBeTruthy()
      })
  
      const data = await Mother.find() 
      
      expect(data.length).toEqual(1)
    
    }); 
  })
})