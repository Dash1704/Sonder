const mongoose = require('mongoose')
const Request = require('../models/requests')
const asyncHandler = require('express-async-handler')
const { request } = require('express')

const RequestController = {
  Create: asyncHandler(async (req, res) => {
    const {text, userCreatedBy} = req.body
    if (!text) {
      res.status(400)
      throw new Error('fill in all fields')
    }

    const request = new Request({text, userCreatedBy});
    request.save()
    return res.json(request)
   }),
 
   View: asyncHandler(async (req, res) => {
     const requests = await Request.find().sort({createdAt:-1})
     if(requests) {
      res.status(201).json({
        requests: requests
      })
    }
   }),

   CityFilter: asyncHandler(async (req, res) => {
    const searchCity = req.params.city
    console.log(req.params.city)
    const filteredRequests = await Request.find({"userCreatedBy.city": `${searchCity}`})
    if(filteredRequests) {
     res.status(201).json({
       requests: filteredRequests
     })
   }
  }), 

ChangeToPending: asyncHandler(async (req, res) => {
  const requestId = req.params._id
  await Request.findOneAndUpdate({_id: requestId}, { $set:{ status: "PENDING", fulfilledBy: req.body.samaritan}})
  const changedRequest = await Request.find({_id: requestId})
  if(changedRequest) {
    res.status(201).json(changedRequest)
  }
}),

StatusFilter: asyncHandler(async (req, res) => {
  const filteredRequests = await Request.find({status: "NEW"})
    if(filteredRequests) {
     res.status(201).json({
       requests: filteredRequests
     })
}})

}

module.exports = RequestController

