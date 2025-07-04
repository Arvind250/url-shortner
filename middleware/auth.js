const {getUser} = require("../service/auth")
async function restrictToLoggedInUser (req,res,next){
    const userUid = req.headers['Authorization']
    if (!userUid) return res.redirect('/login')
        const token  = userUid.split("Bearer ")[1]
    const user =getUser(token)
    if (!user) return res.redirect("/login")
    req.user = user
    next()
}
async function checkAuth (req,res,next){
    const userUid = req.headers['authorization']
    const token  = userUid.split("Bearer ")[1]
    const user =await getUser(token)
    
    req.user = user
    next()
}
module.exports ={
    restrictToLoggedInUser,
    checkAuth,
}