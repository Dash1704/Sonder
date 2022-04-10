const mongoose = require('mongoose')
const Request = require('../models/requests')
const Item = require('../models/item')
const asyncHandler = require('express-async-handler')

const RequestController = {
  Create: asyncHandler(async (req, res) => {
    const {text, userCreatedBy, basket} = req.body
    if (!text) {
      res.status(400)
      throw new Error('fill in all fields')
    }

    const request = new Request({text, userCreatedBy, basket});
    console.log(request)
    request.save()
    return res.json(request)
   }),
 
   View: asyncHandler(async (req, res) => {
     const requests = await Request.find().sort({createdAt:-1})
     const images = await Item.find()
     if(requests) {
      res.status(201).json({
        requests,
        images,
      })
    }
   }),
}

module.exports = RequestController

