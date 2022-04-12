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
    request.save()
    return res.json(request)
   }),
 
   View: asyncHandler(async (req, res) => {
     const requests = await Request.find().sort({createdAt:-1})
     const images = await Item.find()
     if(requests) {
      res.status(201).json({
        requests,
        images
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

   ViewMyRequests: asyncHandler(async (req, res) => {
    const searchId = req.params._id
    const myRequests = await Request.find({"userCreatedBy._id": `${searchId}`})
    console.log(myRequests)
    if(myRequests) {
     res.status(201).json({
       requests: myRequests
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
DeleteRequest: asyncHandler(async (req, res) => {
  const requestId = req.params._id
  console.log(requestId)
  const deleted = await Request.findOneAndRemove({"userCreatedBy._id": requestId})
  console.log(deleted)
  if (deleted) {
    res.status(201).json({message: "request deleted"})
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

