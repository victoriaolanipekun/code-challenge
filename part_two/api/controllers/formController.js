const Form = require('../models/Form')


// display all forms
const retrieveAllForms = async (_req, res) => {
  try {
    const allForms = await Form.find().lean()
    console.log('ALL FORM', allForms)
    return res.status(200).json(allForms)
  } catch (err) {
    return res.status(422).json(err)
  }
}

// create new forms
const createNewForm = async (req, res) => {
  try {
    const newForm = await Form.create({ ...req.body })
    console.log('FORM TO ADD', newForm)
    return res.status(201).json(newForm)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}

// get one form by id
const getOneForm =  async (req, res) => {
  try {
    const { id } = req.params
    const singleForm = await Form.findById(id)
    if (!singleForm) throw new Error()
    console.log('single Form', singleForm)
    return res.status(200).json(singleForm)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'This form was not found' })
  }
}

// update a form 
const editForm =  async (req, res) => {
  const { id } = req.params
  try {
    const formToUpdate = await Form.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
    if (!formToUpdate) throw new Error()
    console.log('update Form', formToUpdate)
    return res.status(200).json(formToUpdate)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'This form was not found!' })
  }
}

// remove a form
const deleteForm =  async (req, res) => {
  try {
    const { id } = req.params
    const formToDelete = await Form.findById(id)
    if (!formToDelete) throw new Error()
    await formToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'This form was not found!' })
  }
}


module.exports = { retrieveAllForms, createNewForm, getOneForm, editForm, deleteForm }
