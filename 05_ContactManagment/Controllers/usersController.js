const asyncHandler = require('express-async-handler')
const Users = require('../Models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

/*
* @desc Register new User
* @route  POST api/users/register
* access Public
*/
const registerUser = asyncHandler( async(req, res)=>{
    const {userName, email, password} = req.body;
    if (!userName || !email || !password){
        res.status(404)
        throw new Error('All Field are Mandatory!')
    }
    const availableUser = await Users.findOne({email})
    if (availableUser){
        res.status(400)
        throw new Error('User already Exist!')
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = await Users.create({
        userName: userName,
        email: email,
        password: hashPassword
    })
    if (newUser){
        res.status(201).json({_id:newUser.id, email:newUser.email})
    }else{
        res.status(400)
        throw new Error("Error while Creating User")
    }
    
})


/*
* @desc login User
* @route  POST api/users/login
* access Public
*/
const loginUser = asyncHandler( async(req, res)=>{
    const {email, password} = req.body;
    if (!email || !password){
        res.status(400)
        throw new Error("All fields are Mandatory")
    }
    const user = await Users.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user:{
                email:user.email,
                userName:user.userName,
                _id:user.id
            }
        }, process.env.ACCESS_TOKEN_SECRET, {'expiresIn':'5m'})

        res.status(200).json({accessToken})
    }else{
        res.status(401)
        throw new Error('Login Credientials are wrong')
    }
    // res.status(200).json({msg:"User login Successfully"})
})


/*
* @desc Current User Info
* @route  POST api/users/current
* access private
*/
const currentUser = asyncHandler( async(req, res)=>{
    res.status(200).json(req.user)
})


module.exports = {registerUser, loginUser, currentUser}