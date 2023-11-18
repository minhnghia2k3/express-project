import jwt, { decode } from "jsonwebtoken";
import express from "express"

interface decoded {
    user: {
        _id: string,
        username: string,
        email: string
    },
    iat: number,
    exp: number
}

export const validateToken = async (req: any, res: express.Response, next: express.NextFunction) => {
    let token: string;
    let authHeader: string | undefined = req.headers.Authorization || req.headers.authorization

    if (!authHeader) return res.status(400).json({ "message": "User are not authorized!" })

    // Decode Headers - Authorization: Bearer `token`
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err: any, decoded: any) => {
            if (err) {
                return res.status(401).json({ "message": "User are not authorized!" })
            }
            if (decoded) {
                req.user = decoded.user;
            }
            return next();
        })
        if (!token) {
            return res.status(401).json({ "message": "User are not authorized or token is missing!" })
        }
    }
}