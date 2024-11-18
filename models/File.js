const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    fileName : {type:String, required:true }, 
    filePath: { type: String, required: true },  
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    createdAt: { type: Date, default: Date.now },

}) 

module.exports = mongoose.model('File',fileSchema)