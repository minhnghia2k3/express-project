import express from "express";
/**
* @desc Get all Contacts
* @route GET /api/contacts
* @access public
*/
export const getContacts = (req: express.Request, res: express.Response) => {


    return res.status(200).json("get contacts");
}

/**
* @desc Create new contact
* @route POST /api/contacts
* @access public
*/
export const createContact = (req: express.Request, res: express.Response) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("Missing parameters!")
    }

    // 201: Resource created
    return res.status(201).json("get contacts");
}

/**
* @desc Get contact by id
* @route GET /api/contacts/:id
* @access public
*/
export const getContact = (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
    } catch (err) {

    }

    return res.status(200).json("get contacts");
}

/**
* @desc Update contact
* @route PUT /api/contacts/:id
* @access public
*/
export const updateContact1 = (req: express.Request, res: express.Response) => {


    return res.status(200).json("get contacts");
}

/**
* @desc Delete a contact
* @route Delete /api/contacts/:id
* @access public
*/
export const deleteContact = (req: express.Request, res: express.Response) => {


    return res.status(200).json("get contacts");
}
