import express from "express";
import User from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'

/**
* @desc Register a user
* @route GET /api/user/register
* @access public
*/
export const registerUser = async (req: express.Request, res: express.Response) => {
    try {
        const { username, email, password } = req.body

        if (!username || !email || !password) {
            return res.status(400).json({ "message": "Missing field parameters!" })
        }

        const userAvailable = await User.findOne({ email: email })

        if (userAvailable) {
            return res.status(400).json({ "message": "User already registered!" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })
        return res.status(201).json({ _id: user.id, email: user.email });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "Error when register user!" })
    }
}


/**
* @desc Login user
* @route GET /api/user/login
* @access public
*/
export const loginUser = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ "message": "All fields are mandatory!" })
        }

        const user = await User.findOne({ email })

        // Compare password with hashed password
        const isValid = await bcrypt.compare(password, user.password)
        if (user && isValid) {
            // Encode to headers - authorization
            const accessToken = jwt.sign({
                user: {
                    _id: user._id,
                    username: user.username,
                    email: user.email
                }
            },
                process.env.ACCESS_TOKEN_SECRET as string,
                { expiresIn: "15m" })
            return res.status(200).json({ accessToken })
        } else {
            return res.status(401).json({ "message": "Email or password is not valid!" })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "Error when get all contacts!" })
    }
}

/**
* @desc Get current user info
* @route GET /api/user/current
* @access private
*/
export const currentUser = async (req: express.Request | any, res: express.Response) => {
    try {
        return res.status(200).json(req.user)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "Error when get all contacts!" })
    }
}