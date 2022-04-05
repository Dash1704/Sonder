const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User= require('../models/users')


const protect = asyncHandler(async (req, res, next) => {
  let token

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try{
      //get token from header
      token = req.headers.authorization.split('')[1]
      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      //get user from token
      req.user = await User.findById(decoded.id).select('-password')
    }catch (error){
    res.status(401)
    throw new Error('Not authorised')
    }
  }

  if(!token){
    res.status(401)
    throw new Error('Mot authorised')
  }
})
module.exports = {protect}