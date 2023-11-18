import express from "express";
import { createContact, deleteContact, getContact, getContacts, updateContact } from "../controllers/contactController"
import { errorHandler } from "../middlewares/errorHandler"
export default (router: express.Router) => {
    router.get('/api/contacts', getContacts)

    router.post('/api/contacts', createContact, errorHandler)

    router.get('/api/contacts/:id', getContact)

    router.put('/api/contacts/:id', updateContact)

    router.delete('/api/contacts/:id', deleteContact)

    return router
}


