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
         
    return res.status(201).send(
        {id: 1, firstName: 'matan', lastName: 'baruch', email: 'mmmmm@gmail.com', phone:'0521111111'}
        )
}