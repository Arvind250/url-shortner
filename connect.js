const mongooose = require('mongoose')
async function connectMongoDb(url){
    mongooose.connect(url)
}
module.exports ={
    connectMongoDb,
}