
const mongoose = require('mongoose')

const { Schema } = mongoose
  
// option schema
const OptionSchema = new Schema(
  { 
    title: String,
    dataType: String
  }
) 


module.exports = mongoose.model('Option', OptionSchema)