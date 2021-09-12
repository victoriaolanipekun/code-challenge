const Option = require('../models/Option')


// display all options
const retrieveAllOptions = async (_req, res) => {
  try {
    const allOptions = await Option.find().lean()
    console.log('ALL OPTIONS', allOptions)
    return res.status(200).json(allOptions)
  } catch (err) {
    return res.status(422).json(err)
  }
}

// create new options
const createNewOption = async (req, res) => {
  try {
    const newOption = await Option.create({ ...req.body })
    console.log('OPTION TO ADD', newOption)
    return res.status(201).json(newOption)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}


module.exports = { retrieveAllOptions, createNewOption }