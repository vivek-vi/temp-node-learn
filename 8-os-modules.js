const os = require('os')

// info about current user by invoking builtin modul "os" & it's methods as follows

const user = os.userInfo()
console.log(user)

//method returns system uptime in seconds

console.log(`The system uptime is : ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS)