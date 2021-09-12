const express = require('express')
const { retrieveAllOptions, createNewOption } = require('../controllers/optionController')

const router = express.Router()


router.route('/all').get(retrieveAllOptions)
router.route('/create').post(createNewOption)


module.exports = router
