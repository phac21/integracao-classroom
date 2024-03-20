const CronJob = require('cron').CronJob
const robots = {
     removeStudent: require('./robots/removeStudent.js'),
     insertStudent: require('./robots/insertStudent.js'),
}

 /**
 * [1] Execução Manual
 */
async function start(){
    await robots.removeStudent()
    await robots.insertStudent()
}
start()

 /**
 * [2] Por agendamento via cron
 */

// const job =  new CronJob('10 20 * * *', async () => {
//     await robots.removeStudent()
//     await robots.insertStudent()

// })
// job.start()

