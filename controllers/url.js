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
module.exports = {
    generateNewUrl,
    redirectbyUrl
}