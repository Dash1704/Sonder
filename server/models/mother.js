const mongoose = require('mongoose');
 
const motherSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    about_yourself: {
        type: String,
        default: ""
    }, 
    languages: {
        type: String,
        default: ""
    },
    how_many_children: {
        type: String,
        default: ""
    }
    
},
    { timestamps: true }
);

const Mother = mongoose.model("Mother", motherSchema);
module.exports = Mother;
