import express from 'express'
import {isAuth} from '../middlewares/auth.js'
import {getCoursesView, getCourseForm, createCourse, deleteCourse} from '../controllers/course.controller.js'

const router = express.Router()

router.get('/', isAuth, getCoursesView)

router.get('/create', isAuth, getCourseForm)
router.post('/create', isAuth, createCourse)

router.get('/:id/edit', getCourseForm)
router.post('/:id/edit', createCourse)

router.post('/:id/delete', isAuth, deleteCourse)

export default router