const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId:{
        required: true,
        type: String,
        unique: true,
    },
    redirectURL:{
        required: true,
        type: String,
        unique: false,
    },
    visitHistory:[{timestamp:{type:Number}}],

},  {timestaps:true}
);

const URL = mongoose.model('url', urlSchema);

module.exports = URL;
