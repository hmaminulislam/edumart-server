const { Schema, default: mongoose } = require("mongoose");

const coursesSchema = new Schema({
    name: {type:String, required: true},
    lessons: {type:String, required: true},
    img: {type:String, required: true},
    duration: {type:String, required: true},
    students: {type:Number, required: true},
    price: {type:Number, required: true},
    level: {type:String, required: true},
    enrolled: {type:Number, required: true},
    language: {type:String, required: true},
    lastUpdate: {type:String, required: true},
    instructorName: {type:String, required: true},
    instructorImg: {type:String, required: true},
    instructorDetails: {type:String, required: true},
    requirements: {type:String, required: true},
    info: {type:String, required: true},
    programs: [{title: {type:String, required: true}}],
    curriculum: [{moduleName: {type:String, required: true}, moduleItems:[{title: {type:String, required: true}}]}],
})

const Courses = mongoose.model("Courses", coursesSchema);

module.exports = Courses;
