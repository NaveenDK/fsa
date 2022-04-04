import mongoose from 'mongoose'

const studentSchema = mongoose.Schema({
 
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    grade:{
        type:String,
        required:true
    },
    classesEnrolled:[String],
    dateOfBirth:{
        type:String,
        required:true
    }

},{
    timestamps:true
})


const Student = mongoose.model('Student',studentSchema)

export default Student

