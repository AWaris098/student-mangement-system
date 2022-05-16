const Joi = require('joi');
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
 
    name : {
        type : String,
        required : true,
        validate : {
            validator: function (v){
                v.length > 3
                return v
            },
            massage : 'Course length should be greatere than 3 character'
        }
    },
    courseDuraton: {
        type : String,
        required : true
    },
    startDate:{
        type : String,
        required : true
    },
    endDate : {
        type : String,
        required : true
    },
    
    intake : {
        type : Number,
        required : true
    },

});

const Course = mongoose.model('Course', courseSchema)

const validateCourse = function  (course){
    const schema= {
        name : Joi.string().required().label('Course Name'),
        startDate : Joi.string().required().label('Start Date'),
        courseDuration: Joi.string().required().label('Course Duration'),
        endDate : Joi.string().required().label('End Date'),
        intake : Joi.string().required().label('intake') 
    }
   
    return Joi.validate(course, schema)
}



exports.Course = Course
exports.validateCourse = validateCourse