const mongoose = require("mongoose")

require("../mongodb_helper");
const Donor = require("../../models/donor");


describe('Mother model', () => {
  beforeEach( async () => {
    await mongoose.connection.collections.donors.deleteMany({});
  });
  describe("Mother schema", () => {
   
    it("has a name", async () => {
      const donor = new Donor({
        name: "Megan Markle",
        email: "someone@example.com",
        password: "password",
        city: "London"
      });
      await donor.save()
      expect(donor.name).toEqual("Megan Markle");
    });

    it("has a password", () => {
      const donor = new Donor({
        name: "Megan Markle",
        email: "someone@example.com",
        password: "password",
        city: "London"
      });
      expect(donor.password).toEqual("password");
    });

    it("has a city", () => {
      const donor = new Donor({
        name: "Megan Markle",
        email: "someone@example.com",
        password: "password",
        city: "London"
      });
      expect(donor.city).toEqual("London");
    });

    it("has an email", () => {
      const donor = new Donor({
        name: "Megan Markle",
        email: "someone@example.com",
        password: "password",
        city: "London"
      });
      expect(donor.email).toEqual("someone@example.com");
    });

    it("can list all users", async () => {
      let donors = await Donor.find();
  
      expect(donors).toEqual([]);
    });

    it("can save a user",  async () => {
      const donor = new Donor({ name: "Bob", email: "someone@example.com", password: "password", city: "London" });
  
      await donor.save();
      const data = await Donor.find()
  
      expect(data[0]).toMatchObject({
        name: "Bob",
        email: "someone@example.com",
        password: "password",
        city: "London"
        });
    });
    it("can't save a user with an email aready signed up", async () => {
      const donor1 = new Donor({
        name: "Bob",
        email: "someone@example.com",
        password: "password",
        city: "London"
      });
  
      const donor2 = new Donor({
        name: "Chris",
        email: "someone@example.com",
        password: "password1",
        city: "London"
      });
  
      await donor1.save()
      
      await donor2.save((err) =>{
        expect(err).toBeTruthy()
      })
  
      const data = await Donor.find() 
      
      expect(data.length).toEqual(1)
    
    }); 
  })
})