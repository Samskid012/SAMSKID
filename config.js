//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349023267933";
global.owner = process.env.OWNER_NUMBER || "2349023267933";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0JnQUFLRG9xakJWa1hlT2x3ZnFtZkEvQWZLNklQVXJpTnVVQkpReXFGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUhKd1M5YlhVOHRQcm4yTXdtUERNcmhxZi9VTzh3YnpGVXYzMkdZb1VrTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrR1BFNVJEcmJSTG1BYmQzVWs3cG9heFlpeTZCdVhtNmlUU2R5YThrWUZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzaWNDcDFIanZlMXAwMHU0VlNXS1BxYTZvSU5aT1F6NndIWG5pY25HVUVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJEWXVObU5SeUFtWW1iV1BqOGllWUJhQ09XMGZKQ0x5dW55cUhkcXhBbUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNCa2VpdytZcnZXd0h4SkdEdmxnSlBKV3FHMDhTNmtqc29IOXAwMXlaam89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT01VYU9UTmp3cWVzYldWdGJ1UVEwUklsUkNxNnU0cWpRbGZ0VEpiKy8xZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFN1LzFhTVlNdkVNSjJTdUpCMUF4ci8wenZuSDY3cFk0NGcvelhhMkRHbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpRS1JEVndLNU9UQ2ZHdzdPaXh3U0dmbDdNc3YwK1dYV2dROHFTWmdtRldKYm1CWWxBdS93cU5WbU5EOElwbUxJckltUjVDVnp6ZUhLd25PazNkbkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDUsImFkdlNlY3JldEtleSI6IjZ2UmI3NDNYdmJFYXBYVkN6cjRaL3p1QkNTcW91THhLYmxvRXhsL0plWmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im5hSDhjbXJuU3RhRXNYcmVjT1dmYmciLCJwaG9uZUlkIjoiZGZhYTc1N2MtZjcxOC00ZTgyLTliMWUtZTg1ZTdkZWZlZTVhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtDUXVzVFhGUnRlWmlFb0JYd1k3dk83TkVGTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0dkxXVkdBbEFFMDc0aXFaWFgwbzJtL0g2aVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNkJDUE5GUUciLCJtZSI6eyJpZCI6IjIzNDkwMjMyNjc5MzM6ODhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2Ftc2tpZCBUdiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1NZbmY0REVKNkM2N3NHR0J3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZE56K0poQzZXcGlHR1RvMFZGTXdPUC9IVkRvbkh4RkFSVlBlMHBQQUJSUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMDJ0UE1aYmJZelVNTGxZbS8zRnhCT0g5RFBZb1V1ZXVjeTJTMWpwL2lKOWFCSFdtSnh4dGVWQXNpejhMSFMydDNUdTVkZHZXY2NLQU5UcE9yZGVlQnc9PSIsImRldmljZVNpZ25hdHVyZSI6ImVtb2JXRElOKzdKWTk5RjVCd3RxWE93eHNmSmhpdHRGMytzbDlhL2FyVHJTZ0VJSi84endrUkFod2VSZjNuODEwMmNsL0xEUjM4N3FqNlBoL2RlQkJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAyMzI2NzkzMzo4OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYVGMvaVlRdWxxWWhoazZORlJUTURqL3gxUTZKeDhSUUVWVDN0S1R3QVVVIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2MDk4MDkxfQ=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`SAMSKID_TV™`",
  author: process.env.PACK_AUTHER || "SAMSKID",
  packname: process.env.PACK_NAME || "SAMKID",
  botname: process.env.BOT_NAME || "SAMSKID_TV",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
