// @desc Get All Contacts
// @route  GET api/contacts
// access Public
const getContacts = (req, res)=>{
    res.status(200).json({msg:`Get all Contacts`})
}

// @desc Get Contact by ID
// @route  GET api/contacts/:id
// access Public
const getContact = (req, res)=>{
    res.status(200).json({msg:`Get Contact by ${req.params.id}`})
}

// @desc Create new Contact
// @route  POST api/contacts
// access Public
const createContact = (req, res)=>{
    const {name, relation, country} = req.body
    if (!name || !relation || !country){
        res.status(400)
        throw new Error("All Field are Mandatory")
    }
    res.status(201).json({msg:`Create New Contact ${req.body.name}`})
}

// @desc update exsisting Contact
// @route  PUT api/contacts/:id
// access Public
const updateContact = (req, res)=>{
    res.status(200).json({msg:`Update Contact ${req.params.id}`})
}

/*
* @desc delete exsisting Contact
* @route  DELETE api/contacts/:id
* access Public
*/
const deleteContact = (req, res)=>{
    res.status(200).json({msg:`Deleted Contact ${req.params.id}`})
}


module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}



