const mongoose = require('mongoose');
const  OpenSchema = new mongoose.Schema({
    project:String,
    level:String,
    LastDate:String,
    desc:[]
});



const Open = mongoose.model('Open', OpenSchema);
module.exports = Open;
