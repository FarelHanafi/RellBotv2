const chalk = require('chalk')
const fs = require('fs')

global.animemenu = (prefix) => {
return `
『 Anime 』
> ${prefix}anime <prompt> 🅕
> ${prefix}anim <prompt> 🅟
> ${prefix}waifu 🅕
> ${prefix}animequote 🅕
`}

global.ownermenu = (prefix) => {
return `
『 Owner Menu 』
> ${prefix}autoread <on/off> 🅞
> ${prefix}autobio <on/off> 🅞
> ${prefix}autotype <on/off> 🅞
> ${prefix}unavailable <on/off> 🅞
> ${prefix}autorecord <on/off> 🅞
> ${prefix}autorecordtype <on/off> 🅞
> ${prefix}autoswview <on/off> 🅞
> ${prefix}autoblock <on/off> 🅞
> ${prefix}onlygc <on/off> 🅞
> ${prefix}onlypc <on/off> 🅞
> ${prefix}anticall <on/off> 🅞
> ${prefix}self 🅞
> ${prefix}public 🅞
> ${prefix}join 🅞
> ${prefix}bc <text>🅞
> ${prefix}bcgroup <text>🅞
> ${prefix}setprefix <text>🅞
> ${prefix}addlimit <number|amount>🅞
> ${prefix}dellimit <number|amount>🅞
> ${prefix}resethit 🅞
> ${prefix}resetuser 🅞
> ${prefix}creategc 🅞
> ${prefix}setexif 🅞
> ${prefix}setbotbio <text>🅞
> ${prefix}delppbot 🅞
> ${prefix}shutdown 🅞
> ${prefix}setppbot 🅞
> ${prefix}addprem <number>🅞
> ${prefix}delprem <number>🅞
> ${prefix}addowner <number>🅞
> ${prefix}delowner <number>🅞
> ${prefix}upswtext <text>🅞
> ${prefix}upswvideo 🅞
> ${prefix}upswimage 🅞
> ${prefix}upswaudio 🅞
> ${prefix}block 🅞
> ${prefix}unblock 🅞
> ${prefix}leavegc 🅞
> ${prefix}post 🅞
> ${prefix}clearall 🅞
`}

global.othermenu = (prefix) => {
return `
『 Other Menu 』
> ${prefix}ping 🅕
> ${prefix}menu 🅕
> ${prefix}myip 🅕
> ${prefix}ip 🅕
> ${prefix}ticket 🅕
> ${prefix}idgroup 🅕
> ${prefix}owner 🅕
> ${prefix}rentbot 🅕
> ${prefix}donate 🅕
> ${prefix}akun 🅕
`}

global.downloadmenu = (prefix) => {
return `
『 Download Menu 』
> ${prefix}play 🅕
> ${prefix}ytmp3 🅕
> ${prefix}ytmp4 🅕
> ${prefix}tiktok 🅕
> ${prefix}tiktokaudio 🅕
> ${prefix}tiktokvideo 🅕
> ${prefix}tiktokslide 🅕
> ${prefix}igvideo 🅕
> ${prefix}igimage 🅕
> ${prefix}facebook 🅕
> ${prefix}twitter 🅕
> ${prefix}mega 🅕
> ${prefix}mediafire 🅕
> ${prefix}google 🅕
> ${prefix}gimage 🅕
> ${prefix}weather 🅕
> ${prefix}spotify 🅟
> ${prefix}gitclone 🅕
> ${prefix}gdrive 🅕
> ${prefix}pinterest 🅕
`}

global.groupmenu = (prefix) => {
return `
『 Group Menu 』
> ${prefix}antibot 🅖
> ${prefix}readviewonce 🅖
> ${prefix}antiviewonce 🅖
> ${prefix}welcome 🅖
> ${prefix}adminevent 🅖
> ${prefix}groupevent 🅖
> ${prefix}antiforeign 🅖
> ${prefix}antimedia 🅖
> ${prefix}antiaudio 🅖
> ${prefix}antivideo 🅖
> ${prefix}antiimage 🅖
> ${prefix}antidocument 🅖
> ${prefix}antilocation 🅖
> ${prefix}anticontact 🅖
> ${prefix}antisticker 🅖
> ${prefix}antipoll 🅖
> ${prefix}antilink 🅖
> ${prefix}antilinkgc 🅖
> ${prefix}antipromotion 🅖
> ${prefix}antivirtex 🅖
> ${prefix}grouplink 🅖
> ${prefix}listadmin 🅖
> ${prefix}invite 🅖
> ${prefix}ephemeral 🅖
> ${prefix}delete 🅖
> ${prefix}setppgroup 🅖
> ${prefix}delppgroup 🅖
> ${prefix}setnamegc 🅖
> ${prefix}setdesc 🅖
> ${prefix}add 🅖
> ${prefix}kick 🅖
> ${prefix}promote 🅖
> ${prefix}demote 🅖
> ${prefix}contactag 🅞
> ${prefix}hidetag 🅖
> ${prefix}totag 🅖
> ${prefix}tagall 🅖
> ${prefix}resetlink 🅖
> ${prefix}antivirus 🅖
> ${prefix}antitoxic 🅖
> ${prefix}nsfw 🅖🅟
`}

global.funmenu = (prefix) => {
return `
『 Fun Menu 』
> ${prefix}readmore 🅕
> ${prefix}fact 🅕
> ${prefix}couple 🅕
> ${prefix}stupidcek 🅕
> ${prefix}uncleancek 🅕
> ${prefix}hotcek 🅕
> ${prefix}smartcek 🅕
> ${prefix}greatcek 🅕
> ${prefix}evilcek 🅕
> ${prefix}dogcek 🅕
> ${prefix}coolcek 🅕
> ${prefix}waifucek 🅕
> ${prefix}awesomecek 🅕
> ${prefix}gaycek 🅕
> ${prefix}cutecek 🅕
> ${prefix}lesbiancek 🅕
> ${prefix}hornycek 🅕
> ${prefix}prettycek 🅕
> ${prefix}lovelycek 🅕
> ${prefix}uglycek 🅕
> ${prefix}pick 🅕
> ${prefix}quotes 🅕
> ${prefix}can 🅕
> ${prefix}is 🅕
> ${prefix}when 🅕
> ${prefix}where 🅕
> ${prefix}what 🅕
> ${prefix}how 🅕
> ${prefix}cekkhodam 🅕
`}

global.stalkermenu = (prefix) => {
return `
『 Stalker 』
> ${prefix}tiktokstalk 🅕
> ${prefix}igstalk 🅕
> ${prefix}ghstalk 🅕
> ${prefix}ytstalk 🅕
`}

global.stickermenu = (prefix) => {
return `
『 Sticker 』
> ${prefix}gura 🅕
> ${prefix}ttp 🅕
> ${prefix}attp 🅕
`}

global.databasemenu = (prefix) => {
return `
『 Database 』
> ${prefix}setcmd 🅞
> ${prefix}delcmd 🅞
> ${prefix}listcmd 🅕
> ${prefix}lockcmd 🅞
`}

global.storemenu = (prefix) => {
return `
『 Store 』
> ${prefix}list 🅕
> ${prefix}store 🅕
> ${prefix}shop 🅕
> ${prefix}addlist 🅞
> ${prefix}dellist 🅞
`}

global.aimenu = (prefix) => {
return `
『 OpenAI 』 
> ${prefix}autoai 🅕
> ${prefix}photoleap 🅕
> ${prefix}openai 🅕
> ${prefix}dalle 🅕
> ${prefix}ai 🅕
> ${prefix}remini 🅕
> ${prefix}simi 🅕
> ${prefix}bingimg 🅕
> ${prefix}anim 🅕
`}

global.bugmenu = (prefix) => {
return `
『 Bug & War 』
> this feature is disabled
`}

global.randphotomenu = (prefix) => {
return `
『 Random Photo 』
> ${prefix}couplepp 🅕
`}

global.randvideomenu = (prefix) => {
return ``}

global.photooxymenu = (prefix) => {
return `
『 PhotoOxy Maker 』
> soon
`}

global.nsfwmenu = (prefix) => {
return `
『 Anime NSFW 』
> ${prefix}hentai 🅟
> ${prefix}gay 🅟
> ${prefix}ahegao 🅟
> ${prefix}ass 🅟
> ${prefix}bdsm 🅟
> ${prefix}blowjob 🅟
> ${prefix}cuckold 🅟
> ${prefix}cum 🅟
> ${prefix}ero 🅟
> ${prefix}femdom 🅟
> ${prefix}foot 🅟
> ${prefix}gangbang 🅟
> ${prefix}glasses 🅟
> ${prefix}gifs 🅟
> ${prefix}jahy 🅟
> ${prefix}manga 🅟
> ${prefix}masturbation 🅟
> ${prefix}neko 🅟
> ${prefix}neko2 🅟
> ${prefix}orgy 🅟
> ${prefix}panties 🅟
> ${prefix}pussy 🅟
> ${prefix}tentacles 🅟
> ${prefix}yuri 🅟
> ${prefix}thighs 🅟
> ${prefix}zettai 🅟
`}

global.gamemenu = (prefix) => {
return `
『 Game 』
> ${prefix}truth 🅕
> ${prefix}dare 🅕
> ${prefix}suit 🅕
> ${prefix}tictactoe 🅕
> ${prefix}math 🅕
`}

global.religionmenu = (prefix) => {
return `
『 Religon 』
> ${prefix}quran 🅕
> ${prefix}gita 🅕
> ${prefix}ayatkursi 🅕
`}

global.searchmenu = (prefix) => {
return `
『 Search 』
> ${prefix}google 🅕
> ${prefix}wikipedia 🅕
> ${prefix}yts 🅕
> ${prefix}imdb 🅕
> ${prefix}lyrics 🅕
> ${prefix}spotify 🅕
> ${prefix}pin 🅕
> ${prefix}gimg 🅕
`}

global.convertmenu = (prefix) => {
return `
『 Convert 』
> ${prefix}tts 🅕
> ${prefix}say 🅕
> ${prefix}toqr 🅕
> ${prefix}tovn 🅕
> ${prefix}toaudio 🅕
> ${prefix}tomp3 🅕
> ${prefix}tomp4🅕
> ${prefix}toimg 🅕
> ${prefix}toonce 🅕
> ${prefix}sticker 🅕
> ${prefix}smeme 🅕
> ${prefix}smeta 🅕
> ${prefix}take 🅟
> ${prefix}emojimix 🅕
> ${prefix}ssweb 🅕
> ${prefix}translate 🅕
`}

global.listmenu = (prefix) => {
return `
『 List 』
> ${prefix}listprem 🅕
> ${prefix}listowner 🅕
> ${prefix}listbadword 🅕
> ${prefix}listpc 🅕
> ${prefix}listgc 🅕
`}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.green(`FILE UPDATED => ${__filename}`));
  delete require.cache[file];
  require(file);
});