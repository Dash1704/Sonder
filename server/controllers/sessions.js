const mongoose = require('mongoose')
const User = require('../models/users')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const SessionsController = {
  Create: asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({email})
    
    res.json({message: "create session"});
  }),

  Delete: asyncHandler(async (req, res) => {
    res.json({message: "delete session"});
  }),
}

module.exports = SessionsController