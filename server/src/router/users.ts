import { Router } from "express";
import { deleteUser, getAllUsers, updateUser } from "../controllers/users";
import { isAuthenticated, isOwner } from "../middleware";

export default (router: Router) => {
    router.get('/users', isAuthenticated, getAllUsers)
            .delete('/users/:id', isAuthenticated, isOwner, deleteUser)
            .patch('/users/:id', isAuthenticated, isOwner, updateUser)
}