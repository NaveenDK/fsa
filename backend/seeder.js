import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import  students from './data/students.js'

import Student from './models/studentModel.js'

import connectDB from './config/db.js'
 
dotenv.config()

connectDB()

const importData =async() =>{
    try{

        await Student.deleteMany()

    
      console.log("printing students "+ students)
    // await Student.deleteMany()
     
    
     await Student.insertMany(students)
     console.log("Data imported".green.inverse)
     process.exit()
    
    }
    catch(error){
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async() =>{
    try{
        await Student.deleteMany()

       
    
    }
    catch(error){
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2]=== '-d'){
    destroyData()
} else{
    importData()
}