const fs = require('fs')
const chalk = require('chalk')

//owner vcard
global.ytname = "YT: Rein"
global.socialm = "GH: FarelHanafi"
global.location = "indonesia"

//global settings
global.botname = 'Rell-MD'
global.ownernumber = '62881026950162'
global.ownername = 'Rell'
global.websitex = "https://特別な人"
global.wagc = "https://chat.whatsapp.com/JKzk65yY1b54uQujtmSQFg"
global.themeemoji = '🪀'
global.wm = "Rell-MD."
global.packname = "Sticker By"
global.author = "Rell-MD\n+62 823-3422-6291"
global.creator = "62881026950162@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["62881026950162"]
global.hituet = 0

global.lann = ''
global.lolkey = ""

global.APIKeys = { 
  'https://api.betabotz.eu.org': '',
  'https://api.lolhuman.xyz': ''
}
//database
global.MONGODB = "mongodb+srv://jerc0c:392uh@cluster0.44z1zvn.mongodb.net/?retryWrites=true&w=majority"
//bot sett
global.autoblocknumber = ''
global.antiforeignnumber = ''
global.welcome = true
global.antiswview = true
global.anticall = true
global.autoswview = true
global.adminevent = false
global.groupevent = false
global.thumb = fs.readFileSync('./RellMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.green(`FILE UPDATED => ${__filename}`));
  delete require.cache[file];
  require(file);
});
