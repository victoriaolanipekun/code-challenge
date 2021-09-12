const Question = require('../models/Question')
const Option = require('../models/Option')

// display all Questions
const retrieveAllQuestions = async (_req, res) => {
  try {
    const allQuestions = await Question.find()
    let results = {}

    if (allQuestions) {
      allQuestions.map(async question => {

        const option = Option.findById(question.optionId).then(function(result) {
          console.log('filter', result.title)
          return result.title
        })

        results = {
          title: question.title,
          optionId: question.optionId,
          option: await option,
          formId: question.formId,
          id_: question._id,
          active: question.active,
          createdAt: question.createdAt,
          updatedAt: question.updatedAt
        }

        //return results
        return res.status(200).json(results)
      })
    } else {
      return res.status(404).json({ error: 'No questions' })
    }
    
  } catch (err) {
    return res.status(422).json(err)
  }
}

// create new question
const createNewQuestion = async (req, res) => {
  try {
    const newQuestion = await Question.create({ ...req.body })
    console.log('Question TO ADD', newQuestion)
    return res.status(201).json(newQuestion)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}

// get one question by id
const getOneQuestion =  async (req, res) => {
  try {
    const { id } = req.params
    const singleQuestion = await Question.findById(id)
    if (!singleQuestion) throw new Error()
    console.log('single Question', singleQuestion)
    return res.status(200).json(singleQuestion)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'This question was not found' })
  }
}

// update a question 
const editQuestion =  async (req, res) => {
  const { id } = req.params
  try {
    const questionToUpdate = await Question.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
    if (!questionToUpdate) throw new Error()
    console.log('update Question', questionToUpdate)
    return res.status(200).json(questionToUpdate)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'This question was not found!' })
  }
}

// remove a question
const deleteQuestion =  async (req, res) => {
  try {
    const { id } = req.params
    const questionToDelete = await Question.findById(id)
    if (!questionToDelete) throw new Error()
    await questionToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'This question was not found!' })
  }
}


module.exports = { retrieveAllQuestions, createNewQuestion, getOneQuestion, editQuestion, deleteQuestion }
