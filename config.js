const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Winspertech.100@gmail.com"
global.location="Kisumu,Kenya."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Willis254:d5_!LpGM#i_w.U!@cluster0.hhbfqup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/WillisKE/Suhail";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d7b133573a5a3622775e6.jpg" ; // SET LOGO FOR IMAGE 
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.caption = process.env.CAPTION || global.caption || "ɢɛռɛʀǟȶɛɖ ᏰᎩ ᏇᎥᏝᏝᎥᏕ" 


global.devs = "254786273945" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254786273945,254702365210,254708336448,254762508828";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254786273945,254702365210,254708336448,254762508828";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.BUTTONS = process.env.BUTTON_MODE || "1";
menu. process.env.MENU_STYLE || "G2";
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "log" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" //"text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254786273945,254702365210,254708336448,254762508828";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://sessionpair.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "WILLIS_MD_2024_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VqcE1RcG1OMC81Z1NFL0czVHllNm5sSkZoVDN6a29QMjR3NXFwUHowdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlIxU1huZUF3WHlJY3k5aW03QnVJdEJTMU51Rld3a2V0YWtBQmZYWS9DST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJT0x5OUJTNW1ZQ1hENXF3RHI3enljY21XTmFnKzUxT3ZqK3dyV2dHK0cwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGcVZhTjhiWGloWUM2NkV1SWcyK0JyOWtmOHdSanV0aWlmUkxLcWJOMEFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklKbXN0UWlnQUJjZndPZ05aaitQWjdKMisyUDJLMzR3YThOL1Jkb3FBMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNza3RJWGRFV0k2OUpRRnNQVTFpVjlKWjZGL01VS09CSCtDd2VBVkt0V1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkplb1d6QXJuWnlrT1lYOTM5Z3RrN1dsT0VBcEdmMmhHdzVXMkMrWHYwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3J6UzRnSjVJT0orbDZXSHpBbTRKbTZkZG9oSThZUmZCb01ZRnRKbGNHdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ4VnYxMUhkZHpWREJEZk1jZ1ZlajRRS0ZGZTlrbVZGTnlpODFjeHRhMzFYSWpNeUIyc0hueUR6TUJGQVlVNFROaDNub3lPejgwVzVOTmRwYzBEYkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IlpZS00zV2R5RXN3bjFDLzRiQjdmSGkyL1d6M0pIa2tIVjU1TmdYYjhUNjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImpuWXFLQjVhUk0ySHcyUnR3bGg3YVEiLCJwaG9uZUlkIjoiN2ZiY2M5ZTQtOTU3Ny00Yzc5LTkyYWUtYjk1MjUwNTZhOWEzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InM2VHM2Qml6cmNGNzR6Zjg3WHZUMENkZ2RlUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGeGdxMGlGNW9BcmdmSWtib1daMWtsc3N0RWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOUhWTU1WTkUiLCJtZSI6eyJpZCI6Ijk0NzYwMDI3NjQ4OjI0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Iuu5hOyKiOyZgCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUN3NG93Q0VOUERqcllHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSDlrTGQ4OSsrUDZaRUpZR2FwQUFxQWVUb1RtdGtPbFN5T1RnekY5bjFDbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNWNjaU4wbmtpaW1KTWVDUzdJU1h5akk0RnBqclExWlQwaFFXRzg4TTYyeGRDeWk1R1BJZlZVZE44UWJMNExjUVJ0aDFob1VqQTZia2ZXckFIQ3BOaUE9PSIsImRldmljZVNpZ25hdHVyZSI6IlZ3UDFIcXcrTWpFSkoyTGZSeXBaMmhnNWVIT0E3eVd5MlpmYVR5OStEc3hGcjFoK2wydy9SV3FBVlZMc0NOYmpDb3ZickJ0WUVxQVVPNWkxTUMwcUNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjAwMjc2NDg6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUi9aQzNmUGZ2aittUkNXQm1xUUFLZ0hrNkU1clpEcFVzams0TXhmWjlRcSJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDA5Njk5M30="  // PUT your SESSION_ID WILLIS_MD_2024_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VqcE1RcG1OMC81Z1NFL0czVHllNm5sSkZoVDN6a29QMjR3NXFwUHowdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlIxU1huZUF3WHlJY3k5aW03QnVJdEJTMU51Rld3a2V0YWtBQmZYWS9DST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJT0x5OUJTNW1ZQ1hENXF3RHI3enljY21XTmFnKzUxT3ZqK3dyV2dHK0cwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGcVZhTjhiWGloWUM2NkV1SWcyK0JyOWtmOHdSanV0aWlmUkxLcWJOMEFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklKbXN0UWlnQUJjZndPZ05aaitQWjdKMisyUDJLMzR3YThOL1Jkb3FBMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNza3RJWGRFV0k2OUpRRnNQVTFpVjlKWjZGL01VS09CSCtDd2VBVkt0V1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkplb1d6QXJuWnlrT1lYOTM5Z3RrN1dsT0VBcEdmMmhHdzVXMkMrWHYwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3J6UzRnSjVJT0orbDZXSHpBbTRKbTZkZG9oSThZUmZCb01ZRnRKbGNHdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ4VnYxMUhkZHpWREJEZk1jZ1ZlajRRS0ZGZTlrbVZGTnlpODFjeHRhMzFYSWpNeUIyc0hueUR6TUJGQVlVNFROaDNub3lPejgwVzVOTmRwYzBEYkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IlpZS00zV2R5RXN3bjFDLzRiQjdmSGkyL1d6M0pIa2tIVjU1TmdYYjhUNjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImpuWXFLQjVhUk0ySHcyUnR3bGg3YVEiLCJwaG9uZUlkIjoiN2ZiY2M5ZTQtOTU3Ny00Yzc5LTkyYWUtYjk1MjUwNTZhOWEzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InM2VHM2Qml6cmNGNzR6Zjg3WHZUMENkZ2RlUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGeGdxMGlGNW9BcmdmSWtib1daMWtsc3N0RWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOUhWTU1WTkUiLCJtZSI6eyJpZCI6Ijk0NzYwMDI3NjQ4OjI0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Iuu5hOyKiOyZgCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUN3NG93Q0VOUERqcllHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSDlrTGQ4OSsrUDZaRUpZR2FwQUFxQWVUb1RtdGtPbFN5T1RnekY5bjFDbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNWNjaU4wbmtpaW1KTWVDUzdJU1h5akk0RnBqclExWlQwaFFXRzg4TTYyeGRDeWk1R1BJZlZVZE44UWJMNExjUVJ0aDFob1VqQTZia2ZXckFIQ3BOaUE9PSIsImRldmljZVNpZ25hdHVyZSI6IlZ3UDFIcXcrTWpFSkoyTGZSeXBaMmhnNWVIT0E3eVd5MlpmYVR5OStEc3hGcjFoK2wydy9SV3FBVlZMc0NOYmpDb3ZickJ0WUVxQVVPNWkxTUMwcUNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjAwMjc2NDg6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUi9aQzNmUGZ2aittUkNXQm1xUUFLZ0hrNkU1clpEcFVzams0TXhmWjlRcSJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDA5Njk5M30=


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style : process.env.STYLE || "3",  // put '1' & "2" here to check bot styles
  thumbimage: process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d7b133573a5a3622775e6.jpg",
  buttons : process.env.BUTTON_MODE || "1",
  menustyle : process.env.MENU_STYLE || "G2",

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "ɢɛռɛʀǟȶɛɖ ᏰᎩ ᏇᎥᏝᏝᎥᏕ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "〃Willis",
  packname: process.env.PACK_NAME || "〃",
  botname : process.env.BOT_NAME  || "ᴡɪʟʟɪꜱ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "≛ Willis",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ADAM"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "bb60b12577e6c25424883cc9f72ffe88";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
