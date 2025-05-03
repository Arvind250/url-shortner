const express = require("express")
const {generateNewUrl,redirectbyUrl,getAnalyticsById,}= require('../controllers/url')
const router = express.Router()

router.post('/',generateNewUrl)
router.get('/:shortid',redirectbyUrl)
router.get('/analytics/:shortId',getAnalyticsById)

module.exports = router;
