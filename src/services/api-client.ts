import axios, { AxiosRequestConfig } from "axios";

// export function fetchGroups(): Promise<Session[]> {
//     return axios.get('http://localhost:8000/sessions').then(response => response.data)
// }

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/'
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<T>(this.endpoint, config)
            .then(res => res.data)
    }

    getOne = (id: number | string) => {
        return axiosInstance
            .get<T>(this.endpoint + '/' + id)
            .then(res => res.data)
    }

}

export default APIClient;
