const asyncHandler=require("express-async-handler")
const Contact=require("../models/contactModel")
// description: get all contact  
// route: GET /api/contacts 
// access: private
const getContacts = asyncHandler(async(req, res) => {
    const contacts=await Contact.find({user_id:req.user.id})
    res.status(200).json(contacts)
})
// description: create contact  
// route: POST /api/contacts 
// access: private
const createContact = asyncHandler(async(req, res) => {
    const{name,email,phone}=req.body;
    console.log("requested body is",req.body);
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("fill all fields")
    } 
    const contact=await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id
    })
    res.status(201).json(contact);
    
})
// description: get  contact  
// route: GET /api/contacts/:id
// access: private
const getContact = asyncHandler(async(req, res) => {
    const contact=await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("could not found")
    }
    res.status(200).json(contact)
})
// description:update contact  
// route: PUT /api/contacts/:id
// access: private
const updateContact = asyncHandler(async(req, res) => {
        const contact=await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("could not found")
    }
    if (contact.user_id.toString()!=req.user.id) {
        res.status(403);
        throw new Error("you dont have permmision to update other user contact")
    }
    const updatedContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedContact)
})
// description:delete contact  
// route: DELETE /api/contacts/:id
// access: private
const deleteContact = asyncHandler(async(req, res) => {
            const contact=await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("could not found")
    }
        if (contact.user_id.toString()!=req.user.id) {
        res.status(403);
        throw new Error("you dont have permmision to update other user contact")
    }
    await Contact.deleteOne()
    res.status(200).json(contact)
})
module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }