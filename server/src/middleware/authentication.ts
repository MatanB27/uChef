import {NextFunction, Request, Response} from 'express'
import {get, merge} from 'lodash'
import { getUserBySessionToken } from '../db/users'

export const isOwner = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        
        const currentUserId = (get(req, 'identity._id') ?? '').toString()
        
        if(!currentUserId) {
            return res.status(403).json({error: 'Permission denied!'})
        }

        if(currentUserId !== id) {
            return res.status(403).json({error: 'Permission denied!'})
        }

        next()
    } catch(e) {
        return res.status(400).json({error: e})
    }
}

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sessionToken = req.cookies['UCHEF-AUTH']
        
        if(!sessionToken) {
            return res.status(403).json({error: 'No session token.'})
        }

        const existingUser = await getUserBySessionToken(sessionToken)
        
        if(!existingUser) {
            return res.status(403).json({error: 'No existing users.'})
        }

        merge(req, {identity: existingUser})
        return next()
    } catch(e) {
        return res.status(400).json({error: e})
    }
}

