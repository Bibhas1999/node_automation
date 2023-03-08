import express from 'express'
import { home } from '../VoiceController.js'

const router = express.Router()

router.get('/',home)
export default router