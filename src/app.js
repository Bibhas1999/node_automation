import express from 'express'
import ejs from 'ejs'
import routes from './routes/routes.js'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
// import path from 'path';
// import { fileURLToPath } from 'url';
import { automateClockIn } from './VoiceController.js'
import Job from 'node-cron'
dotenv.config()
const port = process.env.PORT || 5000
const app = express()
app.set("view-engine","ejs")
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
app.use(helmet());
app.use(cookieParser())
// app.use(express.static(__dirname+"/public"));
// console.log(__dirname)
app.use(express.urlencoded({ extended:true}));
app.use(express.json({extended: false}));
app.use(cors({ origin:"*", credentials:true }))
app.use('/',routes)
app.listen(port,()=>{
    console.log('App is running on port '+`${port}`)
})
let options = {
    timezone: "Asia/Kolkata"
}
Job.schedule("35 1 * * 0-5", async ()=>{
    console.log("hi")
    let ac = await automateClockIn()
    console.log(ac)
}, options);


