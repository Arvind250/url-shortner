const express = require("express")
const urlRoute = require('./routes/url')
const {connectMongoDb}= require('./connect')
const app = express()
PORT = 8001

app.use(express.json())
app.use('/url',urlRoute)

connectMongoDb('mongodb://localhost:27017/short-url')
.then(()=>console.log("mongoDb connected"))

app.listen(PORT,()=>{
    console.log(`Server runnning at http://localhost:${PORT}`)
})