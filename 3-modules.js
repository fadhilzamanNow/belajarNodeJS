const { log } = require('console');
const os = require('os');
//log(os.cpus().find({},{model:1}));

//info about current user
const user = os.userInfo()
log(user)

console.log(`The information about server uptime is ; ${os.uptime()} seconds`)


const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS);