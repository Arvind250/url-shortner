const express = require("express")
const {generateNewUrl,redirectbyUrl,getAnalyticsById,getAllUrl}= require('../controllers/url')
const router = express.Router()

router.post('/',generateNewUrl)
router.get('/',getAllUrl)
router.get('/:shortid',redirectbyUrl)
router.get('/analytics/:shortId',getAnalyticsById)

module.exports = router;
