import { User } from "@/models/user";

export const ENDPOINT = {
    CREATE_USER: (user: User) => 
        `/api/users?firstName=${user.firstName}&lastName=${user.lastName}&email=${user.email}&password=${user.password}&phone=${user.phone}`
}