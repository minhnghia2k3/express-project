import express from "express"
import { constants } from "../constants"

export const errorHandler = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('--- err: ', err)
    const statusCode = res.statusCode ? res.statusCode : 500
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Invalid parameters!", message: err.message, stackTrace: err.stack })
            break;

        case constants.UNAUTHORIZED:
            res.json({ title: "Unauthorized!", message: err.message, stackTrace: err.stack })
            break;

        case constants.FORBIDDEN:
            res.json({ title: "Forbidden!", message: err.message, stackTrace: err.stack })
            break;

        case constants.NOT_FOUND:
            res.json({ title: "Not found!", message: err.message, stackTrace: err.stack })
            break;

        case constants.SERVER_ERROR:
            res.json({ title: "Server error!!", message: err.message, stackTrace: err.stack })
            break;

        default:
            console.log("No error!");
            break;
    }
} 