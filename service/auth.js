const jwt = require("jsonwebtoken")
const secret_key = "abcdef123"

function setUser(user){
    return jwt.sign(
        {
            _id:user._id,
            email :user.email
        },
        secret_key
    )
}
function getUser(token){
    if (!token) return null
    return jwt.verify(token,secret_key)
}

module.exports ={
    setUser,
    getUser
}