import express from 'express'
import {isAuth} from '../middlewares/auth.js'
import {getProfileView, logout, editProfile} from '../controllers/profile.controller.js'

const router = express.Router()

router.get('/', isAuth, getProfileView)
router.get('/logout', logout)

router.post('/update', isAuth, editProfile)

export default router
