const Joi = require('joi');
const mongoose = require('mongoose');


const studentIdSchema = new mongoose.Schema({
    classRollNo : {
        type : String,
        required : true,
        validate : {
            validator: function(v){
                return v && v.length >3
            },
            message : 'Roll number should be more than 3 chracter'
        }
    },
    registrationNo : {
        type : String
    }
})

const StudentId =  mongoose.model('StudentId', studentIdSchema)


const studentSchema = new mongoose.Schema({
    StudentName : {
        FirstName : {
            type : String,
            required : true
        },
        LastName : {
            type : String,
            required : true
        }
    },
    Gender : {
        type : String,
        required : true,
        enum : ['male' , 'female']
    },
    DateOfBirth : {
        type : String,
        required : true
    },
    DateOfAdmission : {
        type : String,
        required : true
    },
    Category :{
        type : String,
        required : true,
        enum : ['General', 'OBC', 'SC', 'ST', 'Others']
    },
    Religion : {
        type : String,
        required : true,
        enum : ['Muslim', 'Hindhu', 'Sikh', 'Chirstian', 'Others']
    },
    FatherName : {
        type : String,
        required : true
    },
    MotherName : {
        type : String,
        required : true
    },
    FatherEducationalQualification : {
        type  : String,
        required : true
    },
    MotherEducationalQualification : {
        type : String,
        required : true
    },
    FatherOccupation : {
        type : String,
        required : true
    },
    MotherOccupation : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    PhoneNumber :{
        type : String,
        required : true
    },
    Address : {
        Address_Line_1 : {
            type : String,
            required : true
        },
        City : {
            type : String,
            required : true
        },
        State : {
            type : String,
            required : true
        },
        PostalCode : {
            type : String,
            required : true
        },
        Country : {
            type : String,
            required : true
        },
    },
    CourseName : {
        type : String,
        required : true
    },
    BranchName : {
        type : String,
        required : true
    },
    Class :  {
        type : String,
        required : true,
        enum : ['1st Semester', '2nd Semester', '3rd Semester', '4th Semester']
    },
    Section : {
        type : String,
        required : true,
        enum : ['a', 'b', 'c']
    },
    Session : {
        type : String,
        required : true
    },

    StudentId : studentIdSchema 

});

const Student = mongoose.model('Student', studentSchema)


function validateStudent(student) {
    const schema = {
        FirstName : Joi.string().alphanum().regex(/[a-zA-Z]/).required().label('First Name'),
        LastName : Joi.string().required(),
        Gender: Joi.string().required(),
        category: Joi.string().required(),
        DateOfBirth : Joi.string().required(),
        DateOfAdmission : Joi.string().required(),
        FatherName : Joi.string().required(),
        FatherEducationalQualification : Joi.string().required(),
        FatherOccupation : Joi.string().required(),
        MotherName : Joi.string().required(),
        MotherEducationalQualification : Joi.string().required(),
        MotherOccupation : Joi.string().required(),
        Email : Joi.string().email().required(),
        PhoneNumber : Joi.number().integer().positive().required(),
        Address : Joi.string().required(),
        City : Joi.string().required(),
        State : Joi.string().required(),
        PostalCode : Joi.number().required(),
        Country : Joi.string().required(),
        CourseName : Joi.string().required().label('Course Name'),
        BranchName : Joi.string().required().label('Branch Name'),
        ClassAdmittedto : Joi.string().required(),
        Section : Joi.string().required(),
        Session : Joi.string().required(),
        ClassRollNo  : Joi.string().required(),
        RegistationNo : Joi.string().required(),
        _method : Joi.string().empty()
    };
    return Joi.validate(student, schema)
}

exports.StudentId = StudentId
exports.Student = Student
exports.validate = validateStudent