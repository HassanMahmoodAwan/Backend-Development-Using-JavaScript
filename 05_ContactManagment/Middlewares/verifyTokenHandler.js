const asyncHandler = require('express-async-handler')
require('dotenv').config()
const jwt = require('jsonwebtoken')


const verifyToken = asyncHandler(async (req, res, next)=>{
    console.log('Inside token Handler')
    let token;
    const authHeader = req.headers.Authorization || req.headers.authorization
    if (authHeader && (authHeader.startsWith('Bearer'))){
        token = authHeader.split(' ')[1]

        console.log(token)
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
            if(err){
                
                res.status(401)
                throw new Error("User is not Authorized")
            }
            
            req.user = decoded.user;
            next()
        })

    }

})

module.exports = verifyToken