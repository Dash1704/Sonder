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
        default: "Tell us a bit about yourself"
    }, 
    languages: {
        type: String,
        default: "What languages do you speak?"
    },
    how_many_children: {
        type: String,
        default: "Tell us about your children"
    }
    
},
    { timestamps: true }
);

const Mother = mongoose.model("Mother", motherSchema);
module.exports = Mother;
