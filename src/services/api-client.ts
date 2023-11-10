import axios, { AxiosRequestConfig } from "axios";
import { Session } from "../models/session";

export function fetchGroups(): Promise<Session[]> {
    return axios.get('http://localhost:8000/sessions').then(response => response.data)
}

// export type FetchResponse<T> = {
//     count: number;
//     next: string | null;
//     results: T[];
// }

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:8000/'
// })

// class APIClient<T> {
//     endpoint: string;

//     constructor(endpoint: string) {
//         this.endpoint = endpoint;
//     }

//     getAll = (config: AxiosRequestConfig) => {
//         return axiosInstance
//             .get<FetchResponse<T>>(this.endpoint, config)
//             .then(res => res.data)
//     }

//     getOne = (id: number | string) => {
//         return axiosInstance
//             .get<T>(this.endpoint + '/' + id)
//             .then(res => res.data)
//     }

// }

// export default APIClient;

// export async function get(url: string) {
//     const response = await fetch(url)
//     if (!response.ok) throw new Error('Failed to fetch data.')

//     const data = await response.json() as unknown

//     return data;
// }