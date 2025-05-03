const URL = require('../model/url')
const shortid = require("shortid")

async function generateNewUrl(req,res){
    const shortID = shortid(8)
    const body = req.body
    if (!body.url) return res.status(400).json({err :"url is required"})
    await URL.create({
        shortId:shortID,
        redirectUrl: body.url,
        visitHistory:[],
    })
    return res.json({ id : shortID})
}

async function redirectbyUrl(req,res) {
    const shortId = req.params.shortid
    const entry = await URL.findOneAndUpdate({
        shortId},{$push: {visitHistory:{ timestamp :Date.now()}}}
    )
    res.redirect(entry.redirectUrl)
}

async function getAnalyticsById (req,res){
    const shortId = req.params.shortId
    const result = await URL.findOne({shortId})
    return res.json({
        totalclicks : result.visitHistory.length,
        analytics :result.visitHistory
    })
}

async function getAllUrl (req,res){
    const result = await URL.find()
    const finalresult = result.map((item)=>({
        originalUrl : item.redirectUrl,
        shortUrl: item.shortId
    }))
    res.json(finalresult)
}

module.exports = {
    generateNewUrl,
    redirectbyUrl,
    getAnalyticsById,
    getAllUrl
}