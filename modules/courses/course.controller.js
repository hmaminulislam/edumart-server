const courseModel = require("./course.model");

// get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await courseModel.find();
    res.send({ courses });
  } catch (error) {
    res.send({ status: 401, error });
  }
};

// get course by id
exports.getCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await courseModel.findById(id);
    res.send(course);
  } catch (error) {
    res.send({ status: 401, error });
  }
};

// get courses with filter 
exports.getCoursesFilter = async (req, res) => {

  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 9;
    const search = req.query.search || "";
    let category = req.query.category || "All";

    const categories = ["Business", "Design", "Development", "Programming"];
    category === "All" ? (category = [...categories]) : category = req.query.category.split(',')

    const courses = await courseModel.find({name: {$regex: search, $options: 'i'}}).where('category').in([...category]).skip(page * limit).limit(limit)
    
    res.send({page: page + 1, limit, category, search, courses})
  }
  catch (error) {
    res.send({status: 401, error})
  }
}
