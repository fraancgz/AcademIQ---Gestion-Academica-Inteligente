import express from 'express'
import {isAuth} from '../middlewares/auth.js'
import {getProfileView, logout} from '../controllers/profile.controller.js'

const router = express.Router()

router.get('/', isAuth, getProfileView)
router.get('/logout', logout);

export default router
