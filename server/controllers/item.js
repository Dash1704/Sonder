const mongoose = require('mongoose')
const Item = require('../models/item')
const asyncHandler = require('express-async-handler')

const ItemController = {
  Create: asyncHandler(async (req, res) => {
    const {name, image} = req.body
   
    const item = new Item({name, image});
    console.log(item)
    item.save()
    return res.json(item)
   }),
 
   View: asyncHandler(async (req, res) => {
     const items = await Item.find()
     if(items) {
      res.status(201).json({
        items: items
      })
    }
   }),
}

module.exports = ItemController