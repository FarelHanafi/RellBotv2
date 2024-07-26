const mongoose = require('mongoose');
const fs = require('fs');
const chalk = require('chalk');

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

let rellmduser;

const rellmdUserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  user: { type: String, required: true },
  premium: { type: Boolean, required: true },
  expired: { type: Date, required: true },
});

rellmdUserSchema.statics.deleteUser = async function(username) {
  try {
    await this.findOneAndRemove({ username });
    console.log(chalk.green(`User ${username} deleted successfully!`));
  } catch (err) {
    console.error(chalk.red(`Error deleting user: ${err}`));
  }
};

rellmdUserSchema.statics.editUser = async function(username, updates) {
  try {
    const user = await this.findOne({ username });
    if (!user) {
      console.log(chalk.red(`User ${username} not found!`));
      return;
    }
    Object.assign(user, updates);
    await user.save();
    console.log(chalk.green(`User ${username} updated successfully!`));
  } catch (err) {
    console.error(chalk.red(`Error updating user: ${err}`));
  }
};

function createModel() {
  rellmduser = mongoose.model('RellmdUser', rellmdUserSchema);
  return rellmduser;
}

module.exports.rellmduser = createModel();

