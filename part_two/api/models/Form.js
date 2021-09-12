const mongoose = require('mongoose')

const { Schema } = mongoose

// form Schema
const FormSchema = new Schema({
  // createdBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // }, 

  title: String,

  description: {
    type: String,
    default: ''
  }
 
}, { timestamps: true })


module.exports = mongoose.model('Form', FormSchema)