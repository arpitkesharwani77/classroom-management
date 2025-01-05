const mongoose=require('mongoose')

const ClassSchema=new mongoose.Schema({
    name:{type:String,required:true},
    subject:{type:String,required:true},
    teacherName:{type:String,required:true},
    startDate:{type:Date,required:true},
    endDate:{type:Date,requred:true},

})

module.exports=mongoose.model('Class',ClassSchema)