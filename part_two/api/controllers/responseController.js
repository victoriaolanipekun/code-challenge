const Response = require('../models/Response')
const Form = require('../models/Form')


// to submit a response
const postResponse = async (req, res) => {
  try {
    const { id } = req.params
    const form = await Form.findById(id)
    if (!form) throw new Error('No form found')
    const formToSubmit = { ...req.body }
    const response = await Response.create(formToSubmit)
    console.log(response)
    return res.status(200).json(response)
  } catch (err) {
    console.log(err) 
    return res.status(404).json({ message: err.message })
  }
}

// display all responses
const retrieveAllResponses = async (_req, res) => {
  try {
    const allResponses = await Response.find().lean()
    console.log('ALL RESPONSES', allResponses)
    return res.status(200).json(allResponses)
  } catch (err) {
    return res.status(422).json(err)
  }
}

// get one response by id
const getOneResponse =  async (req, res) => {
  try {
    const { id } = req.params
    const singleResponse = await Response.findById(id)
    if (!singleResponse) throw new Error()
    console.log('single Response', singleResponse)
    return res.status(200).json(singleResponse)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'This response was not found' })
  }
}



module.exports = { postResponse, retrieveAllResponses, getOneResponse }
