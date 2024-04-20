
import { User } from "@/models/user"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
// import store from "@/redux"
// import Actions from "@/redux/actions";

const iS_DEV: boolean = true
const BASE_URL_DEV: string = 'http://localhost:8000/'
const BASE_URL_LIVE: string = 'live' //TODO CHANGE!
const CURR_URL: string = iS_DEV ? BASE_URL_DEV : BASE_URL_LIVE;

const headers = {
    'Content-Type': 'application/json',
};

export async function apiRequest<T> (config: AxiosRequestConfig) {
    try {
        const response: AxiosResponse<T> = await axios(config);
        return response.data;
    } catch (error) {
        let errorMessage = "An error occurred";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        throw new Error(errorMessage);
      }
}

export async function createUser(user: User) {
    const config = {
        method: 'post',
        url: CURR_URL,
        data: user,
        headers: headers
    }

    return apiRequest<User>(config)
}
