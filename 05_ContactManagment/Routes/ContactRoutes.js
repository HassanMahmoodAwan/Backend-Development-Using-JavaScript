const express = require('express')
const {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
} = require("../Controllers/contactsController")
const router = express.Router()


// =========== Get Request ============
router.route('/').get(getContacts)

// =========== Get_ID Request ============
router.route('/:id').get(getContact)

// =========== POST Request ============
router.route('/').post(createContact)

// =========== PUT Request ============
router.route('/:id').put(updateContact)

// =========== Delete Request ============
router.route('/:id').delete(deleteContact)

// router.route('/').get(getContacts).router.route('/').post(createContact)
// router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)

module.exports = router