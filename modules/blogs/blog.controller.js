const blogModel = require('./blog.model')

// get all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find();
    res.send(blogs );
  } catch (error) {
    res.send({ status: 401, error });
  }
};

// get blog by id 
exports.getBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await blogModel.findById(id);
    res.send(blog);
  } catch (error) {
    res.send({ status: 401, error });
  }
};
