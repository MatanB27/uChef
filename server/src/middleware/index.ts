import {NextFunction, Request, Response} from 'express'
import {get, identity, merge} from 'lodash'
import { getUserBySessionToken } from '../db/users'

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sessionToken = req.cookies['UCHEF-AUTH']
        if(!sessionToken) {
            return res.status(403).json({error: 'No session token.'})
        }

        const existingUser = await getUserBySessionToken(sessionToken)

        if(!existingUser) {
            return res.status(403).json({error: 'No existing user.'})
        }

        merge(req, {identity: existingUser})
    } catch(e) {
        return res.status(400).json({error: e})
    }
}