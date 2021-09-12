const mongoose = require('mongoose')

const { Schema } = mongoose

const ResponseSchema = new Schema({

  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Form'
  },

  // userId: {
  //   type: String    
  // },

  response: [{
    questionId: String,
    answer: String
  }]
  
}, { timestamps: true })

module.exports = mongoose.model('Response', ResponseSchema)

