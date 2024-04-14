import { Router } from "express";
import { deleteUser, getAllUsers } from "../controllers/users";
import { isAuthenticated, isOwner } from "../middleware";

export default (router: Router) => {
    router.get('/users', isAuthenticated, getAllUsers)
            .delete('/users/:id', isOwner, deleteUser)
}