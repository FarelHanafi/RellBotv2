const { rellmduser } = require("./schema");
const moment = require('moment-timezone');
const fs = require('fs')
const chalk = require('chalk')

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

function addDays(date, days) {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

async function RellPrem(username, user, premium, days) {
  let currentDate = moment().tz("Asia/Jakarta");
  currentDate.add(days, 'days');
  let expired = currentDate.format('YYYY-MM-DDTHH:mm:ssZ');

  let obj = {
    username,
    user,
    premium,
    expired,
  };
  try {
    await rellmduser.create(obj);
    console.log("User created successfully");
  } catch (error) {
    console.error("Error creating user", error);
  }
}
module.exports.RellPrem = RellPrem;

async function removeUser(username) {
  try {
    const result = await rellmduser.deleteOne({ user: username });
    if (result.deletedCount === 1) {
      console.log("User removed successfully");
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.error("Error removing user", error);
  }
}
module.exports.removeUser = removeUser;

async function getExpired(userContact) {
  try {
    let user = await rellmduser.findOne({ user: userContact });
    if (!user) {
      throw new Error("User not found");
    }
    return user.expired;
  } catch (error) {
    console.error("Error fetching user", error);
    return null;
  }
}
module.exports.getExpired = getExpired;

async function ListPremium() {
  try {
    const users = await rellmduser.find({});
    if (users.length > 0) {
      return users.map(user => ({
        username: user.username,
        user: user.user,
        premium: user.premium,
        expired: user.expired
      }));
    } else {
      return "No users found";
    }
  } catch (error) {
    return `Error retrieving users: ${error.message}`;
  }
}
module.exports.ListPremium = ListPremium;

async function PerpanjangPrem(userContact, additionalDays) {
  try {
    const user = await rellmduser.findOne({ user: userContact });
    if (user) {
      let currentExpiryDate = moment.tz(user.expired, "Asia/Jakarta");
      currentExpiryDate.add(additionalDays, 'days');
      user.expired = currentExpiryDate.format('YYYY-MM-DDTHH:mm:ssZ');
      await user.save();
      return `User's expiration extended by ${additionalDays} days. New expiration date: ${user.expired}`;
    } else {
      return "User not found";
    }
  } catch (error) {
    return `Error extending expiration: ${error.message}`;
  }
}
module.exports.PerpanjangPrem = PerpanjangPrem;

async function cekExpired(sender) {
  try {
    let deletedUsers = []
    let currentDate = moment().tz("Asia/Jakarta");
    const user = await rellmduser.find({ expired: sender });
    if (user < currentDate) {
      await rellmduser.deleteOne({ username: user.username });
      deletedUsers.push(user.username);
    }
  } catch (error) {
    return `Error checking and deleting expired users: ${error.message}`;
  }
}
module.exports.cekExpired = cekExpired;

async function cekPrem(sender) {
  try {
    let user = await rellmduser.findOne({ user: sender });
    if (!user) {
      return "false";
    }
    return user.premium;
  } catch (error) {
    console.error("Error fetching user", error);
    return "false";
  }
}
module.exports.cekPrem = cekPrem;

async function cekPremUser(sender) {
  try {
    const users = await rellmduser.find({ user: sender });

    if (users.length > 0) {
      // Return users data as JSON
      return {
        status: "success",
        data: users.map(user => ({
          username: user.username,
          user: user.user,
          premium: user.premium,
          expired: user.expired
        }))
      };
    } else {
      // Return 'No users found' as JSON
      return {
        status: "error",
        message: "No users found"
      };
    }
  } catch (error) {
    // Return error message as JSON
    return {
      status: "error",
      message: `Error retrieving users: ${error.message}`
    };
  }
}
module.exports.cekPremUser = cekPremUser;

