import { Request, Response } from "express"
import { getUserByEmail, createUser } from "../db/users"
import { authentication, random } from "../helpers"

export const login = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body
        if(!email || !password) {
            res.status(400).json({error: "Email or password are missing."})
        }

        const user = await getUserByEmail(email).select('+authentication.salt +authentication.password')
        const userData = user[0]
        console.log('user: ', user);
        
        if(!userData) {
            return res.status(400).json({error: "User doesn't exist."})
        }
        
        const expectedHash = authentication(user[0].authentication?.salt || '', password)

        if(userData.authentication?.password !== expectedHash) {
            return res.status(403).json({error: "Wrong password."})
        }

        const salt = random()
        userData.authentication.sessionToken = authentication(salt, userData._id.toString())
        await userData.save()
        res.cookie('UCHEF-AUTH', userData.authentication.sessionToken, {domain: process.env.DEV_DOMAIN})

        return res.status(200).json(user).end()
    } catch(e) {
        return res.status(400).json({error: e})
    }
}

export const signUp = async (req: Request, res: Response) => {
    try {
        const {firstName, lastName, email, password} = req.body
        if(!email || !password || !firstName || !lastName) {
            return res.status(400).json({error: "Missing parameters."})
        }
        
        const existingUser = await getUserByEmail(email)
        console.log('existingUser: ', existingUser);
        
        if(existingUser.length !== 0) {
            return res.status(400).json({error: "User already exists, try a different email."})
        }

        const salt = random()
        const user = await createUser({
            email,
            firstName,
            lastName,
            authentication: {
                salt,
                password: authentication(salt, password)
            }
        })
        return res.status(200).json(user).end()
    } catch(e) {
        return res.status(400).json({error: e})
    }
}