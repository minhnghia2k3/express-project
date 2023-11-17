import express from "express"
import contactRoutes from "./contactRoutes";
const router = express.Router();

export default (): express.Router => {
    contactRoutes(router)

    return router
}
