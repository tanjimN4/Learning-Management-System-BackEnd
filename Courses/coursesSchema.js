const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  profile_image: { type: String, required: true },
  reviews: { type: String, required: true },
  students: { type: String, required: true },
  courses: { type: String, required: true },
  profession: { type: String, required: true },
});

const CourseSchema = new mongoose.Schema({
  course_name: { type: String, required: true },
  course_image: { type: String, required: true },
  course_owner: { type: String, required: true },
  instructor: { type: InstructorSchema, required: true },
  price: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  ratings_by: { type: Number, required: true },
  lectures: { type: Number, required: true },
  level: { type: String, required: true, enum: ["Beginner", "Intermediate", "Advanced", "Expert"] },
  duration: { type: String, required: true },
  description: { type: String, required: true },
  topics: { type: [String], required: true },
  syllabus: { type: [String], default: [] },
  enrolled: { type: Number, required: true },
  certificate: { type: String, required: true },
  last_updated: { type: Date, required: true },
  language: { type: String, required: true },
  prerequisites: { type: [String], required: true },
  original_price: { type: String, required: true },
  discounted_price: { type: String, required: true },
  category: { type: String, required: true },
  reviews: { type: [String], default: [] },
});

module.exports = mongoose.model('Courses', CourseSchema);
