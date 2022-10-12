import axios from "axios"
import { encodeUsername } from "./utils"

const apiRoot = 'https://clean-sweep-team-14.herokuapp.com'

const urls = {
    login: () => `${apiRoot}/auth/token/login/`,
    register: () => `${apiRoot}/auth/users/`,
    logout: () => `${apiRoot}/auth/token/logout/`,
    getChores: () => `${apiRoot}/chores/`,
}

const login = async (body) => {
    body.username = encodeUsername(body.username.trim())
    return axios.post(urls.login(), body)
}

const register = async (body) => {
    body.username = encodeUsername(body.username.trim())
    return axios.post(urls.register(), body)
}

const logout = async (token) => {
    return axios.post(urls.logout(), '', {
        headers: {
            Authorization: `Token ${token}`,
        },
    })
}

const getChores = async () => {
    const data = await axios.get(urls.getCards()).then(res => res.data)
    return data.results
}


export {
    login,
    register,
    logout,
    urls,
}