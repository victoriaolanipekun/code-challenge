
const mongoose = require('mongoose')

const { Schema } = mongoose
  
// question schema
const QuestionSchema = new Schema(
  { 
    active: { type: Boolean, default: false },
    title: String,
    optionId: String,
    formId: String
  }, { timestamps: true })

module.exports = mongoose.model('Question', QuestionSchema)