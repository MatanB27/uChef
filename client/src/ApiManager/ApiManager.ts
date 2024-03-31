
import { User } from "@/models/user"
import { ENDPOINT } from "./Endpoint"

const iS_DEV: boolean = true
const BASE_URL_DEV: string = 'http://localhost:8000/'
const BASE_URL_LIVE: string = 'live' //TODO CHANGE!

class ApiManager {
    static CreateUser = (userData: User) => {
        const url = (iS_DEV ? BASE_URL_DEV : BASE_URL_LIVE) + ENDPOINT.CREATE_USER(userData)
    }
}