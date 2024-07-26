const mongoose = require("mongoose");
const fs = require('fs')
const chalk = require('chalk')
require('../settings');

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.yellow(`< ============================== >\n`))
    console.log(chalk.green(`FILE UPDATED`))
    console.log(chalk.green(`=> In ${__filename}\n`))
    console.log(chalk.yellow(`< ============================== >\n`))
    delete require.cache[file]
    require(file)
})

function connectMongoDb() {
  mongoose.connect(global.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "The Connection Is Eror:"));
  db.once("open", () => {
    console.log("Succes connect to MONGODB ✅");
  });
}

module.exports.connectMongoDb = connectMongoDb;

