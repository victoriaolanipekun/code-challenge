const express = require('express')
const { postResponse, retrieveAllResponses, getOneResponse } = require('../controllers/responseController')

const router = express.Router()


router.route('/all').get(retrieveAllResponses)
router.route('/create').post(postResponse)
router.route('/all/:id').get(getOneResponse)


module.exports = router
