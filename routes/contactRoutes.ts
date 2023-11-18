import express from "express";
import { createContact, deleteContact, getContact, getContacts, updateContact } from "../controllers/contactController"
import { validateToken } from "../middlewares/validateTokenHandler";
export default (router: express.Router) => {
    // Validate before give actions
    router.use(validateToken)

    router.get('/api/contacts', getContacts)

    router.post('/api/contacts', createContact)

    router.get('/api/contacts/:id', getContact)

    router.put('/api/contacts/:id', updateContact)

    router.delete('/api/contacts/:id', deleteContact)

    return router
}


