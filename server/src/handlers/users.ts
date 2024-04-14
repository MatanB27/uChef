import { Request, Response } from "express-serve-static-core"
import { CreaterUserDto } from "../dtos/CreateUser.tdo"
import { CreateUserQueryParams } from "../types/query-params"
import { User } from "../types/user-response"

// api/users
export function getUsers(req: Request, res: Response) {
    res.send({user: 'user123'})
}

// api/users/:id
export function getUserById(req: Request, res: Response) {
    res.send({})
}

export function createUser(req: Request<{}, {}, CreaterUserDto, CreateUserQueryParams>, 
    res: Response<User>) {
    const { firstName, lastName, email, password, phone } = req.body;
  
    const newUser: User = {
        id: '1',
        firstName,
        lastName,
        email,
        password,
        phone
    }
    
    return res.status(201).json(newUser)
}