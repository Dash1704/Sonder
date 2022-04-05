const mongoose = require('mongoose')
const User = require('../models/users')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const SessionsController = {
NewUser: asyncHandler(async (req, res) => {
 const {name, email, password} = req.body

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
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error ('invalid user data')
  }
}),

  Create: asyncHandler(async (req, res) => {
   const {email, password} = req.body

    //check for email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      })
    } else {
      res.status(400)
      throw new Error ('Invalid credentials')
    }
    res.json({message: "create session"});
  }),

  Delete: asyncHandler(async (req, res) => {
    res.json({message: "delete session"});
  }),
}

const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = SessionsController