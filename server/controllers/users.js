const User = require('../models/users')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')

const UsersController = {
  Create: asyncHandler (async (req, res) => {
    const {name, email, password } = req.body
  
    if (!name || !email || !password) {
      res.status(400)
      throw new Error('fill in all fields')
    }
    //  check user exists
    const userExists = await User.findOne({email})
    if(userExists) {
      res.status(400)
      throw new Error('user already exists')
    }
    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    })
    if(user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email
      })
    } else {
      res.status(400)
      throw new Error ('invalid user data')
    }
  
    res.status(200).json({message: 'User registered'})
  })
}





  
module.exports = UsersController;