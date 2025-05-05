const {v4 :uuid4 } = require("uuid")
const User = require("../model/user")
const {setUser} = require("../service/auth")

async function userSignup (req,res){
    const {name,email,password} = req.body
    await User.create({
        name,
        email,
        password
    })
    return res.redirect("/")
}
async function userLogin (req,res){
    const {email,password} = req.body
    const user = await User.findOne({email,password})
    if(!user) return res.render("login",{
        err: "Username or Password not found"
    })
    const sessionId = uuid4()
    setUser(sessionId,user)
    res.cookie("uid",sessionId)
    return res.redirect('/')
}
module.exports ={
    userSignup,
    userLogin
}