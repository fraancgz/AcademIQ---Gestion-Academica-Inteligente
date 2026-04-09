import express from 'express'
import { isAuth } from '../middlewares/auth.js'
import { getSubjectsView } from '../controllers/subject.controller.js'

const router = express.Router()

router.get('/', isAuth, getSubjectsView)

export default router



