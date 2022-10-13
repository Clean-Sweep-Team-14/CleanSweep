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
    listGlobalLeaders: () => `${apiRoot}/leaderboard/global/`,
    listFriendLeaders: () => `${apiRoot}/leaderboard/friends/`,
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

const getAllEasyChores = async (limit=100) => {
    return axios.get(urls.listAllEasyChores(), {limit:limit})
}

const getAllMediumChores = async (limit=100) => {
    return axios.get(urls.listAllMediumChores(), {limit:limit})
}

const getAllHardChores = async (limit=100) => {
    return axios.get(urls.listAllHardChores(), {limit:limit})
}

const getAllBonusChores = async () => {
    return axios.get(urls.listAllBonusChores())
}

const listGlobalLeaders = async (limit=20) => {
    return axios.get(urls.listGlobalLeaders(), {limit:limit})
}

const listFriendLeaders = async (limit=20) => {
    return axios.get(urls.listFriendLeaders(), {limit:limit})
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