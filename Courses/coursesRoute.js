const express=require('express')
const { getCourses, createCourse, getCoursesCategory, post, getAllCorses } = require('./coursesController')
const router=express.Router()

router.get('/courses',getCourses)
router.get('/allcourses',getAllCorses)
router.post('/courses',createCourse)
router.get('/filterdata',getCoursesCategory)
router.post('/addpost',post)

module.exports=router