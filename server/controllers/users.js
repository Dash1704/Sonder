const Mother = require('../models/mother')
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
  })
}





  
module.exports = UsersController;