const Mother = require('../models/mother')
const Donor = require('../models/donor')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')


const UsersController = {
  CreateMother: asyncHandler (async (req, res) => {
    const {name, email, password, city } = req.body
  
    if (!name || !email || !password || !city) {
      res.status(400).json({error: "fill in all fields"})
      throw new Error('fill in all fields')
    }
    //  check user exists
    const userExists = await Mother.findOne({email})
    if(userExists) {
      res.status(400).json({error: "Mother already exists"})
      
    }
    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //create user
    const user = await Mother.create({
      name,
      email,
      password: hashedPassword,
      city
    })
    if(user) {
      res.status(201).json({message: "Mother registered"})
    } else {
      res.status(400).json({error: "invalid user data"})
      throw new Error ('invalid user data')
    }
  }),
  CreateDonor: asyncHandler (async (req, res) => {
    const {name, email, password, city } = req.body
  
    if (!name || !email || !password || !city) {
      res.status(400).json({error: "fill in all fields"})
      throw new Error('fill in all fields')
    }
    //  check user exists
    const userExists = await Donor.findOne({email})
    if(userExists) {
      res.status(400).json({error: "Donor already exists"})
      
    }
    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //create user
    const user = await Donor.create({
      name,
      email,
      password: hashedPassword,
      city
    })
    if(user) {
      res.status(201).json({message: "Donor registered"})
    } else {
      res.status(400).json({error: "invalid user data"})
      throw new Error ('invalid user data')
    }
  }),

  FindMother: asyncHandler (async (req, res) => {
    const mother = await Mother.findOne({"email": req.params.email})
    if(mother) {
      res.status(201).json({
        mother
      })
    }
  }),

  ShowMotherProfile: asyncHandler (async (req, res) => {
    console.log(req.params._id)
    const mother = await Mother.findById(req.params._id)
    if(mother) {
      res.status(201).json({
        mother
      })
    }
  }),

  UpdateMotherBio: asyncHandler (async (req, res) => {
    
    await Mother.findOneAndUpdate({"email": req.params.email}, {$set:{ "about_yourself":req.body.toSend.about_yourself, "languages":req.body.toSend.languages, "how_many_children":req.body.toSend.how_many_children}})
    const resMother = await Mother.find({email: req.params.email})
    console.log(resMother)

    
    // console.log(motherUpdate)
    if(resMother) {
      res.status(201).json({
        resMother,

        message: "Updated successfully"
      })
    }

  })


}
  
module.exports = UsersController;
