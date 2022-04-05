const mongoose = require('mongoose')

const SessionsController = {
  Create: (req, res) => {
    res.json({message: "create session"});
  },

  Delete: (req, res) => {
    res.json({message: "delete session"});
  },
}

module.exports = SessionsController