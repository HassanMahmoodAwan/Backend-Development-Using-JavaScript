const asyncHandler = require('express-async-handler')
const contacts = require('../Models/contact.model')

// @desc Get All Contacts
// @route  GET api/contacts
// access private
const getContacts = asyncHandler( async(req, res)=>{
    const allContacts = await contacts.find({user_id: req.user._id})
    res.status(200).json(allContacts)
})


// @desc Get Contact by ID
// @route  GET api/contacts/:id
// access Public
const getContact = asyncHandler ( async(req, res)=>{
    const contact = await contacts.findById(req.params.id)

    if(contact.user_id.toString() !== req.user._id){
        res.status(403)
        throw new Error('Contact doesnot belongs to this User')
    }
    if (!contact){
        res.status(404)
        console.log("Eror as not Found")
        throw new Error("Contact not Found")
    }
    res.status(200).json(contact)
})


// @desc Create new Contact
// @route  POST api/contacts
// access Public
const createContact = asyncHandler( async(req, res)=>{
    const {name, email, phone} = req.body
    if (!name || !email || !phone){
        res.status(400)
        throw new Error("All Field are Mandatory")
    }
    console.log("Working")
    const contact = await contacts.create({
        name:name,
        email:email,
        phone:Number(phone),
        user_id: req.user._id
    })
    res.status(201).json(contact)
})

// @desc update exsisting Contact
// @route  PUT api/contacts/:id
// access Public
const updateContact = asyncHandler( async(req, res)=>{
    const contact = await contacts.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if (contact.user_id.toString() !== req.user._id){
        res.status(403)
        throw new Error('Contact doesnot belongs to this User')
    }
    if (!contact){
        res.status(404)
        throw new Error("Contact not Found!")
    }
    res.status(200).json(contact)
})

/*
* @desc delete exsisting Contact
* @route  DELETE api/contacts/:id
* access Public
*/
const deleteContact = asyncHandler( async(req, res)=>{
    const contact = await contacts.findByIdAndDelete(req.params.id)
    if (contact.user_id.toString() !== req.user._id){
        res.status(403)
        throw new Error('Contact doesnot belongs to this User')
    }

    console.log(contacts)
    if(!contact){
        res.status(404)
        throw new Error("Contact not Found!")
    }
    
    // await contacts.remove();
    res.status(200).json(contact)
})


module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}



