import express from 'express'
import {isAuth} from '../middlewares/auth.js'
import {activities, } from '../controllers/activity.controller.js'

const router = express.Router()

router.get('/', isAuth, activities)

export default router