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