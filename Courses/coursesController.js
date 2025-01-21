const CourseSchema = require("./coursesSchema");
const filterSchema = require("./filterSchema");


exports.getCourses = async (req, res) => {
    try {
        // Get page and limit from query parameters
        const page = parseInt(req.query.page) || 1;  // Default to page 1 if not provided
        const limit = parseInt(req.query.limit) || 6; // Default to 6 items per page if not provided

        // Calculate the skip value
        const skip = (page - 1) * limit;

        const courses = await CourseSchema.find().skip(skip).limit(limit)

        // Get the total count of courses (to calculate total pages)
        const totalCourses = await CourseSchema.countDocuments();

        // Return the paginated courses along with total count for frontend pagination
        res.status(200).send({
            courses,
            total: totalCourses,
            totalPages: Math.ceil(totalCourses / limit), // Calculate total pages
            currentPage: page,
        });
    } catch (error) {
        res.status(500).send({ message: "Error fetching post", error })
    }
}
exports.getAllCorses=async(req,res)=>{
    try {
        const courses = await CourseSchema.find()
        res.status(200).send(courses)
    } catch (error) {
         res.status(500).send({ message: "Error fetching post", error })
    }
}
exports.createCourse = async (req, res) => {
    try {
        const course = new CourseSchema(req.body)
        await course.save()
        res.status(201).send({ message: "Course created successfully", course })
    } catch (error) {
        res.status(500).send({ message: "Error creating post", error })
    }
}

exports.getCoursesCategory = async (req, res) => {
    try {
        const data = await filterSchema.find();
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch data", error: error.message });
    }
};

exports.post = async (req, res) => {
  
    try {
      // Create a new course using the data from the request body
      const newCourse = new filterSchema(req.body)
      await newCourse.save()
      // Respond with the saved course data
      res.status(201).json({ message: "Course filter added successfully!",newCourse});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to add course", error: error.message });
    }
  };
  


