import { Request, Response } from "express"

// api/users
export function getUsers(req: Request, res: Response) {
    res.send({user: 'user123'})
}

// api/users/:id
export function getUserById(req: Request, res: Response) {
    res.send({user: 'user1234'})
}

export function createUser(req: Request, res: Response) {
    
}