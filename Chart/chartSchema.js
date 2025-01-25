const mongoose = require("mongoose");

const ChartSchema = new mongoose.Schema({
    course_id:{type: String,required:true},
    course_name: { type: String, required: true },
    course_image: { type: String, required: true },
    course_owner: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    ratings_by: { type: Number, required: true },
    lectures: { type: Number, required: true },
    original_price: { type: String, required: true },
    discounted_price: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
})

module.exports=mongoose.model('Chart',ChartSchema)