
import { User } from "@/models/user"
import { ENDPOINT } from "./Endpoint"
import axios, { AxiosResponse } from "axios"

const iS_DEV: boolean = true
const BASE_URL_DEV: string = 'http://localhost:8000/'
const BASE_URL_LIVE: string = 'live' //TODO CHANGE!

class ApiManager {

    private static postRequest = async (url: string, data: any) => {
        const headers = {
            'Content-Type': 'application/json',
        };
        try {
            const res: AxiosResponse = await axios.post(url, data, {headers})
            return res.data
        } catch (error) {
            throw error
        }
    }

    static CreateUser = (userData: User) => {
        const url = (iS_DEV ? BASE_URL_DEV : BASE_URL_LIVE) + ENDPOINT.CREATE_USER(userData)
        return ApiManager.postRequest(url, userData);
    }
}