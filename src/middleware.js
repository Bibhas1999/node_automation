import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// export const middleware = (req,res,next)=>{
//     if(fs.existsSync(__dirname+"/credentials/cred.json"))return res.redirect('/voice-asst')
//     next()
// }

// export const middleware2 = (req,res,next)=>{
//     if(!fs.existsSync(__dirname+"/credentials/cred.json"))return res.redirect('/')
//     next()
// }