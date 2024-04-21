import { Request, Response } from "express";
import { deleteUserById, getUserById, getUsers } from "../db/users";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsers()
        return res.status(200).json(users)
    } catch (e) {
        return res.status(400).json({error: e})
    }
}

 export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const deleteUser = await deleteUserById(id)
        
        return res.status(200).json(deleteUser)
    } catch (e) {
        return res.status(400).json({error: e})
    }
 }

 export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { firstName, lastName } = req.body
        if(!firstName || !lastName) { 
            return res.status(400).json({error: 'Empty first or last name'})
        }

        const user = await getUserById(id)
        console.log('user: ', user);
        
        if(user) {
            user.firstName = firstName
            user.lastName = lastName
            await user.save()
            return res.status(200).json(user).end()
        }
    } catch (e) {
        return res.status(400).json({error: e})
    }
 }