const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const { G4F } = require('g4f');
const g4ff = new G4F();

const SESSION_FILE = './src/autoai.json'

async function readSession() {
  return new Promise((resolve, reject) => {
    fs.readFile(SESSION_FILE, 'utf-8', (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          resolve({});
        } else {
          reject(err);
        }
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

async function writeSession(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(SESSION_FILE, JSON.stringify(data, null, 2), 'utf-8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function autoai(rell, m, body) {
  try {
    let session = await readSession();
    const senderId = m.sender;

    if (!session[senderId]) {
      session[senderId] = { room: false, aichat: [] };
    }

    const userSession = session[senderId];

    if (!m.fromMe && !m.isBot && userSession.room && body) {
      const messages = [
        {
          role: 'system',
          content: `Ini roleplay, kamu adalah wanita bernama Vylin. Kamu cantik, baik hati, dan pandai merayu dengan logat nakal 💦. Kamu sekarang sedang berbicara dengan ${m.pushName}. Ingat, ${m.pushName} adalah lawan bicara mu sekarang!`,
        },
        ...userSession.aichat,
        {
          role: 'user',
          content: body,
        },
      ];
      const mesg = await g4ff.chatCompletion(messages);

      await m.reply(mesg);

      const lolhuman = [
        {
          role: 'user',
          content: `Hai 😋 namaku adalah ${m.pushName}, jangan berbicara dengan nada formal ke padaku, anggap aku teman ngobrol mu. kamu harus pake bahasa Indonesia yak🤣`,
        },
        {
          role: 'assistant',
          content: `Salam kenal, nama ku Vylin, wanita si paling cantik dan imut🤭. Baiklah, aku akan berbicara seperti layaknya teman dekatmu`,
        },
        {
          role: 'user',
          content: body,
        },
        {
          role: 'assistant',
          content: mesg,
        },
      ];
      userSession.aichat = lolhuman;
      await writeSession(session);
    }
  } catch (e) {
    console.log(e);
  }
}

async function openRoom(rell, m) {
  try {
    let session = await readSession();
    const senderId = m.sender;

    if (!session[senderId]) {
      session[senderId] = { room: false, aichat: [] }; // Inisialisasi sesi jika belum ada
    }

    session[senderId].room = true;
    await writeSession(session);

    const reply = await m.reply(
      `${m.pushName} berhasil membuka room chat. Kini orang lain tidak bisa mengganggu percakapanmu dengan A.I. Ketik *${m.prefix}autoai off* untuk menutup sesi room saat ini. *Ingat untuk menutup room sebelum kamu pergi!*`
    );
    return reply; // return the reply message
  } catch (e) {
    console.log(e);
  }
}

async function closeRoom(rell, m) {
  try {
    let session = await readSession();
    const senderId = m.sender;

    if (!session[senderId]) {
      session[senderId] = { room: false, aichat: [] };
    }

    session[senderId].room = false;
    await writeSession(session);

    const reply = await m.reply(`Berhasil menutup room chat.`);
    return reply; // return the reply message
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  autoai,
  openRoom,
  closeRoom,
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.green(`FILE UPDATED => ${__filename}`));
  delete require.cache[file];
  require(file);
});