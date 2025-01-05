const express=require("express")
const connectDB=require('./config/db')
const app=express()
require('dotenv').config()
const errorHandler=require('./middlewares/errorHandler')
const logger=require('./middlewares/logger')

const classRoutes=require('./routes/classRoutes')
const studentRoutes=require('./routes/studentRoutes')
const enrollmentRoutes=require('./routes/enrollmentRoutes')

connectDB()

app.use(express.json());
app.use(logger)

app.use('/api/classes',classRoutes)
app.use('/api/students',studentRoutes)
app.use('/api/enrollments',enrollmentRoutes)

app.use(errorHandler)

const PORT=process.env.PORT ||3000

app.listen(PORT,()=>{
    console.log('server running on port',PORT)
})