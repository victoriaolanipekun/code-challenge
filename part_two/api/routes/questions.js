const express = require('express')
const { retrieveAllQuestions, createNewQuestion, getOneQuestion, editQuestion, deleteQuestion } = require('../controllers/questionController')

const router = express.Router()


router.route('/all').get(retrieveAllQuestions)
router.route('/create').post(createNewQuestion)
router.route('/all/:id')
  .get(getOneQuestion)
  .put(editQuestion)
  .delete(deleteQuestion)

module.exports = router
