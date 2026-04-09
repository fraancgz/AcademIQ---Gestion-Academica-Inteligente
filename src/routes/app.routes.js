import express from 'express'
import {isAuth} from '../middlewares/auth.js'
import {getHomeView, getStatus, userLogin, userRegister} from '../controllers/app.controller.js'

const router = express.Router()

// Ruta Modulo 6 - ServerStatus
router.get('/status', isAuth, getStatus)

// Ruta raiz
router.get('/', getHomeView)

router.post('/login', userLogin)
router.post('/register', userRegister)

export default router