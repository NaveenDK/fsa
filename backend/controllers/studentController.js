import asyncHandler from 'express-async-handler'


import Student from '../models/studentModel.js'


//@desc Fetch all students
//@route GET /api/students
//@access public
const getStudents= asyncHandler(async (req,res)=>{

    const students =  await Student.find({})
    res.json(students)
})



//@desc Fetch singleStudent
//@route GET /api/student/:id
//@access public
const getStudentById= asyncHandler(async (req,res)=>{

    const student = await Student.findById(req.params.id)

    if(student){
        
         res.json(student)

    }
    else{
        res.status(404) 

        throw new Error('Product not found')
    }

})

export{
    getStudents,
    getStudentById
}