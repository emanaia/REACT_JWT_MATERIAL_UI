import axios from 'axios';
import { getToken } from './user'

export const getApiUrl = (path) => {
    return `http://localhost:4000${path}`
}

export const getHeader = () => {                //HEADER TOKEN
    const token = getToken();

    if (!token) return {}

    return {
        Authorization: `Bearer ${token}`
    }
}

export const ApiPost = (path, data) => {                //POST

    const url = getApiUrl(path);

    const option = {
        headers: getHeader()
    }

    return axios.post(url, data, option)
}


export const ApiGet = (path) => {                    //GET

    const url = getApiUrl(path);

    const option = {
        headers: getHeader()
    }
    return axios.get(url, option)
}

