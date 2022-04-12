const mongoose = require('mongoose');
 
const requestSchema = new mongoose.Schema( {
    text: {
      type: String,
      required: true,
    },
    userCreatedBy: {
        type: Object
    },
    status: {
        type: String, 
        default: "NEW",
    },
    fulfilledBy: {
        type: Object,
        default: null,
    },
    basket: [{
        type: String
    }]
},
    { timestamps: true }
);

const Request = mongoose.model("Requests", requestSchema);
module.exports = Request;