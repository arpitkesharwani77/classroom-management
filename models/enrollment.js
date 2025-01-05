const mongoose=require('mongoose')

const EnrollmentSchema=new mongoose.Schema({
    class:{type:mongoose.Schema.Types.ObjectId,ref:'Class',required:true},
    student:{type:mongoose.Schema.Types.ObjectId,ref:'Student',required:true},
    dateEnrolled:{type:Date,default:Date.now}
})

module.exports=mongoose.model('Enrollment',EnrollmentSchema)    