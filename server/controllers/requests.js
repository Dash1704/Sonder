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
   }),
 
   View: asyncHandler(async (req, res) => {
     const requests = await Request.find()
     if(requests) {
      res.status(201).json({
        requests: requests
      })
    }
   }),
}

module.exports = RequestController

