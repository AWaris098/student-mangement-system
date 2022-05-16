const express = require('express');
const router = express.Router()
const Department = require('../models/department');

router.post('/add', async(req, res) => {
    const dept = {
        dName : req.body.name
    }
    try{
        const creatDept = await new Department.save() 
        res.json(creatDept)
    }catch(err){
        res.json(err)
    }
});

module.exports = router