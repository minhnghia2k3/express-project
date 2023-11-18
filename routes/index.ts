import express from "express"
import contactRoutes from "./contactRoutes";
import userRoutes from "./userRoutes";
const router = express.Router();

export default (): express.Router => {
    userRoutes(router)
    contactRoutes(router)
    return router
}
