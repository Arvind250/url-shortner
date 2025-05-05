const express = require("express")
const path =require('path')
const cookieParser = require("cookie-parser")
const urlRoute = require('./routes/url')
const userRoute = require('./routes/user')
const {restrictToLoggedInUser,checkAuth} = require("./middleware/auth")
const {connectMongoDb}= require('./connect')
const staticRoute = require('./routes/staticRouter')
const app = express()
PORT = 8001

connectMongoDb('mongodb://localhost:27017/short-url')
.then(()=>console.log("mongoDb connected"))

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


app.use('/url',restrictToLoggedInUser,urlRoute)
app.use('/user',userRoute)
app.use('/',checkAuth,staticRoute)

app.listen(PORT,()=>{
    console.log(`Server runnning at http://localhost:${PORT}`)
})