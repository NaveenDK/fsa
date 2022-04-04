import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import students from './data/students.js'



dotenv.config()

connectDB()
const app = express()


app.get('/',(req,res)=>{
    res.send('API is running...')
})

app.get('/api/students',(req,res)=>{
   
    res.json(students)
})

app.get('/api/students/:id',(req,res)=>{
    const student = students.find(p=>p._id===req.params.id)
    res.json(student)
})


const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))


