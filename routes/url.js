const express = require("express")
const {generateNewUrl,redirectbyUrl}= require('../controllers/url')
const router = express.Router()

router.post('/',generateNewUrl)
router.get('/:shortid',redirectbyUrl)

module.exports = router;
