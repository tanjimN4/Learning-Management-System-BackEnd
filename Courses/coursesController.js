const CourseSchema=require("./coursesSchema")

exports.getCourses =async(req,res)=>{
    try {
        const courses=await CourseSchema.find()
        res.status(200).send({courses})
    } catch (error) {
        res.status(500).send({ message: "Error fetching post", error })
    }
}
 exports.createCourse=async(req,res)=>{
    try {
        const course=new CourseSchema(req.body)
        await course.save()
        res.status(201).send({message:"Course created successfully",course})
    } catch (error) {
     res.status(500).send({ message: "Error creating post", error })
    }
 }
