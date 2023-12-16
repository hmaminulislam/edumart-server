const courseModel = require('./course.model')
exports.getCourses = async (req, res) => {
  try {
    const courses = await courseModel.find();
    res.send({ courses });
  } catch(error){
    res.send({ status: 401 , error});
  }
};

exports.getCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await courseModel.findById(id);
    res.send(course);
  } catch (error) {
    res.send({ status: 401, error });
  }
};
