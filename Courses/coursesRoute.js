const express=require('express')
const { getCourses, createCourse } = require('./coursesController')
const router=express.Router()

router.get('/courses',getCourses)
router.post('/courses',createCourse)

module.exports=router