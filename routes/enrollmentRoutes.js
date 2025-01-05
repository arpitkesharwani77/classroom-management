const express=require('express')

const {enrollmentStudent}=require('../controllers/enrollmentStudent')


const router=express.Router()

router.route('/:classId/enroll').post(enrollmentStudent)

module.exports=router;