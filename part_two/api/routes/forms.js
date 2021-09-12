const express = require('express')
const { retrieveAllForms, createNewForm, getOneForm, editForm, deleteForm } = require('../controllers/formController')

const router = express.Router()


router.route('/all').get(retrieveAllForms)
router.route('/create').post(createNewForm)
router.route('/all/:id')
  .get(getOneForm)
  .put(editForm)
  .delete(deleteForm)


module.exports = router
