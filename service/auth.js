const serviceIdToUserMap = new Map()

function setUser(id,user){
    serviceIdToUserMap.set(id,user)
}
function getUser(id){
    return serviceIdToUserMap.get(id)
}

module.exports ={
    setUser,
    getUser
}