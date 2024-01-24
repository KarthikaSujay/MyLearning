const { log } = require('console')
const os = require('os')

//info about current user
const user=os.userInfo()
//console.log(user)

//returns system uptime in sec
console.log(os.uptime())

const currentOS ={
    name:os.type(),
    release:os.release(),
    freeMem:os.freemem(),
}

console.log(currentOS)