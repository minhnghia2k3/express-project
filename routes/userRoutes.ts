import express from "express";
import { currentUser, loginUser, registerUser } from "../controllers/userController";
import { validateToken } from "../middlewares/validateTokenHandler";

export default (router: express.Router) => {
    router.post('/api/user/register', registerUser)

    router.post('/api/user/login', loginUser)

    router.get('/api/user/current', validateToken, currentUser)
    return router
}