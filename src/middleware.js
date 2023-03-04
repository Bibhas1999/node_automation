import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const middleware = (req,res,next)=>{
    // const {web_url,email,password}=req.body
    // if(!web_url)return res.status(400).json({msg:"URL is required",status:400})
    // if(!email)return res.status(400).json({msg:"email is required",status:400})
    // if(!password)return res.status(400).json({msg:"password is required",status:400})
    if(fs.existsSync(__dirname+"/credentials/cred.json"))return res.redirect('/voice-asst')
    next()
}

export const middleware2 = (req,res,next)=>{
    if(!fs.existsSync(__dirname+"/credentials/cred.json"))return res.redirect('/')
    next()
}