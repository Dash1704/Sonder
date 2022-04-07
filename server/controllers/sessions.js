const mongoose = require('mongoose')
const Mother = require('../models/mother')
const Donor = require('../models/donor')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const SessionsController = {
  CreateMother: asyncHandler(async (req, res) => {
   const {email, password} = req.body

    //check for email
    const user = await Mother.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
      res.json({user:{
        _id: user.id,
        name: user.name,
        email: user.email,
        bio: user.bio,
        token: generateToken(user._id)
      }})
    } else {
      res.status(400)
      throw new Error ('Invalid credentials')
    };
  }),

  CreateDonor: asyncHandler(async (req, res) => {
    const {email, password} = req.body
 
     //check for email
     const user = await Donor.findOne({email})
 
     if(user && (await bcrypt.compare(password, user.password))){
       res.json({user:{
         _id: user.id,
         name: user.name,
         email: user.email,
         city: user.city,
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