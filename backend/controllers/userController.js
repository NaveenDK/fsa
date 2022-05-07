import asyncHandler from 'express-async-handler'


import User from '../models/userModel.js'


//@desc Fetch all users
//@route POST /api/users/login
//@access public
const authUser= asyncHandler(async (req,res)=>{
 
    const {email,password} = req.body
    
    res.send({email,password})
})

export {authUser}

