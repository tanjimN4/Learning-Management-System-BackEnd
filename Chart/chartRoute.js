const express=require('express')
const { getCharts, creatChart } = require('./chartController')
const router=express.Router()

router.get('/chart',getCharts)
router.post('/chart',creatChart)
module.exports=router