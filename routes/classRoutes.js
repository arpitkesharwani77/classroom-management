const express=require('express')

const {createClass,getClasses}=require('../controllers/classController')

const router=express.Router();

router.route('/').post(createClass).get(getClasses);

module.exports=router;
