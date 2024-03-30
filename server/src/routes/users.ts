import { Router } from "express";
import { getUsers, getUserById, createUser } from "../handlers/users";

const router = Router()

router
    .get('/', getUsers)
    .get('/:id', getUserById)
    .post('/', createUser)

export default router