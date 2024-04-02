
import { User } from "@/models/user"
import axios, { AxiosResponse } from "axios"

const iS_DEV: boolean = true
const BASE_URL_DEV: string = 'http://localhost:8000/'
const BASE_URL_LIVE: string = 'live' //TODO CHANGE!

export class ApiManager {

    private static postRequest = async (method: string, url: string, data?: any) => {
        const headers = {
            'Content-Type': 'application/json',
        };
        try {
            const res: AxiosResponse = await axios({method, url, data, headers})
            console.log('res: ', res);
            
            return res.data
        } catch (error) {
            throw error
        }
    }

    public static CreateUser = (userData: User) => {
        const endPoint: string = 'api/users' 
        const url = (iS_DEV ? BASE_URL_DEV : BASE_URL_LIVE) + endPoint
        return ApiManager.postRequest('POST', url, userData);
    }

    public static GetUser = () => {
        const endPoint: string = 'api/users' 
        const url = (!iS_DEV ? BASE_URL_DEV : BASE_URL_LIVE) + endPoint
        return ApiManager.postRequest('GET', url);
    }
}