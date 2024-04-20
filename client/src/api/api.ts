
import { User } from "@/models/user"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
// import store from "@/redux"
// import Actions from "@/redux/actions";

const iS_DEV: boolean = true
const BASE_URL_DEV: string = 'http://localhost:8000/'
const BASE_URL_LIVE: string = 'live' //TODO CHANGE!
const BASE_URL: string = iS_DEV ? BASE_URL_DEV : BASE_URL_LIVE;

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

export async function createUser(data: {email: string, password: string}) {
    const endPoint = 'auth/login'
    const config = {
        method: 'post',
        url: `${BASE_URL}${endPoint}`,
        data: data,
        headers: headers
    }
    return apiRequest<User>(config)
}

export async function loginUser(data: User) {
    const endPoint = 'auth/signup'
    const config = {
        method: 'get',
        url: `${BASE_URL}${endPoint}`,
        data: data,
        headers: headers
    }
    return apiRequest<User>(config)
}

export async function getUsers() {
    const endPoint = 'users'
    const config = {
        method: 'post',
        url: `${BASE_URL}${endPoint}`,
        headers: headers
    }
    return apiRequest<User>(config)
}