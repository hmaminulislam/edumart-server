const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const cors = require("cors");
const dbConnection = require("./mongodb/dbConnection");
const eventRouter = require("./modules/events/event.routes");
const courseRouter = require("./modules/courses/course.routes")
const blogRouter = require("./modules/blogs/blog.routes")
const productRouter = require('./modules/products/product.routes')

// cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection 
dbConnection();

// all routers 
app.use(eventRouter);
app.use(courseRouter);
app.use(blogRouter);
app.use(productRouter);

// root route 
app.get("/", (req, res) => {
  res.send("edumart server starting...");
});

// app listen 
app.listen(port, () => {
  console.log(`edumart port: ${port}`);
});