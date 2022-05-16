const express = require('express');
const router = express.Router();
const moment = require('moment');

// const {
//     Department
// } = require('../models/department');
const {
    Course,
    validateCourse

} = require('../models/course');

const {
    ensureAuthenticated,
    isAdmin,
    readAccessControl,
    creatAccessControl,
    updateAccessControl,
    deleteAccessControl,
} = require('../helpers/auth');


router.post("/add",  async (req, res) => {


const {
    error
} = validateCourse(req.body)

if(error){

    error.push({
        text : error.detail[0].message
    })
}

    const course = new Course({
        // departmentName : req.body.departmentName,
        name : req.body.name,
        courseDuration : req.body.courseDutation,
        startDate : req.body.startDate,
        endDate : req.body.endDate,
        intake : req.body.intake
    })
    
    try{
      const result = await course.save();
       res.json(result)
    }catch(e){
        res.json(e)
        console.log(e)
    }
});

router.get("/gets", async(req, res) => {
     try{
        res.json({message : "this is my tryial"})
     }catch(err){
         res.json(err)
     }
})











module.exports = router