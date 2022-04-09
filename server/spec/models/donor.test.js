const mongoose = require("mongoose")

require("../mongodb_helper");
const Donor = require("../../models/donor");


describe('Donor model', () => {
  beforeEach( async () => {
    await mongoose.connection.collections.donor.deleteMany({});
  });

  describe('Donor Schema', () => {
    it("has a city", () => {
      const donor = new Donor({
        name: "Good Samaritan",
        email: "anyone@example.com",
        password: "password",
      });
      expect(donor.city).toEqual("London");
    });


  })



})