const mongoose = require('mongoose')
const User = require('../models/mother')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const SessionsController = {
  Create: asyncHandler(async (req, res) => {
   const {email, password} = req.body

    //check for email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
      res.json({user:{
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      }})
    } else {
      res.status(400)
      throw new Error ('Invalid credentials')
    };
  }),

}

const generateToken = (id) => {
  return jwt.sign({id}, `${process.env.JWT_SECRET}`, {
    expiresIn: '1d',
  })
}

module.exports = SessionsController