import axios from "axios"
import { encodeUsername } from "./Components/utils"

const apiRoot = 'https://clean-sweep-team-14.herokuapp.com'

const urls = {
    login: () => `${apiRoot}/auth/token/login/`,
    register: () => `${apiRoot}/auth/users/`,
    logout: () => `${apiRoot}/auth/token/logout/`,
    listAllChores: () => `${apiRoot}/chores/`,
    listAllEasyChores: () => `${apiRoot}/chores/easy/`,
    listAllMediumChores: () => `${apiRoot}/chores/medium/`,
    listAllHardChores: () => `${apiRoot}/chores/hard/`,
    listAllBonusChores: () => `${apiRoot}/chores/bonus/`,
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

const getAllChores = async (limit=20) => {
    return axios.get(urls.listAllChores(), {limit:limit})
}

const getAllEasyChores = async () => {
    return axios.get(urls.listAllEasyChores())
}

const getAllMediumChores = async () => {
    return axios.get(urls.listAllMediumChores())
}

const getAllHardChores = async () => {
    return axios.get(urls.listAllHardChores())
}

const getAllBonusChores = async () => {
    return axios.get(urls.listAllBonusChores())
}

export {
    login,
    register,
    logout,
    urls,
    getAllChores,
    getAllEasyChores,
    getAllMediumChores,
    getAllHardChores,
    getAllBonusChores,
}