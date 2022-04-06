const mongoose = require('mongoose')
const Request = require('../models/requests')
const asyncHandler = require('express-async-handler')

const RequestController = {
  Create: asyncHandler(async (req, res) => {
    const {name, text } = req.body
    if (!name || !text) {
      res.status(400)
      throw new Error('fill in all fields')
    }

    const request = new Request({text, name});
    request.save()
    return res.json({message: "request submitted"})

    // const {email, password} = req.body
 
    //  //check for email
    //  const user = await User.findOne({email})
 
    //  if(user && (await bcrypt.compare(password, user.password))){
    //    res.json({
    //      _id: user.id,
    //      name: user.name,
    //      email: user.email,
    //      token: generateToken(user._id)
    //    })
    //  } else {
    //    res.status(400)
    //    throw new Error ('Invalid credentials')
    //  }
    //  res.json({message: "logged in successfully"});
   }),
 
   View: asyncHandler(async (req, res) => {
     res.json({message: "view requests"});
   }),
}

module.exports = RequestController

