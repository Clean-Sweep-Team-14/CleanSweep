import axios from "axios";

const apiRoot = "https://clean-sweep-team-14.herokuapp.com";

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
  choresTracker: () => `${apiRoot}/chores/tracker/`,
};

const formatAuthedHeader = (token) => ({Authorization: `Token ${token}`});

const login = async (body) => {
  return axios.post(urls.login(), body);
};

const register = async (body) => {
  return axios.post(urls.register(), body);
};

const logout = async (token) => {
  return axios.post(urls.logout(), "", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

const getAllChores = async (limit = 100) => {
  return axios.get(urls.listAllChores(), { params: {limit: limit }});
};

const getSelectedChores = async (limit = 100) => {
  return axios.get(urls.choresTracker(), { params: {limit: limit }});
};

const getAllEasyChores = async (limit = 100) => {
  return axios.get(urls.listAllEasyChores(), { params: {limit: limit }});
};

const getAllMediumChores = async (limit = 100) => {
  return axios.get(urls.listAllMediumChores(), { params: {limit: limit }});
};

const getAllHardChores = async (limit = 100) => {
  return axios.get(urls.listAllHardChores(), { params: {limit: limit }});
};

const getAllBonusChores = async () => {
  return axios.get(urls.listAllBonusChores());
};

const getListGlobalLeaderboard = async (limit = 100) => {
  return axios.get(urls.listGlobalLeaders(), { params: {limit: limit }});
};

const getListFriendLeaderboard = async (token) => {
  const authedHeader = formatAuthedHeader(token);
  return axios.get(urls.listFriendLeaders(), {headers: authedHeader});
};

const addChore = async (token, chore, day) => {
  const authedHeader = formatAuthedHeader(token);
  return axios.post(urls.choresTracker(), {chore, day}, {headers: authedHeader})
}

const getChores = async (token, limit = 100) => {
  const authedHeader = formatAuthedHeader(token);
  return axios.get(urls.choresTracker(), {headers: authedHeader, params: {limit: limit }})
}

const deleteChore = async (token, pk) => {
  const authedHeader = formatAuthedHeader(token);
  return axios.delete(urls.choresTracker() + `${pk}`, {headers: authedHeader})
}

const completeChore = async (token, pk, chore, day, completed = true) => {
  const authedHeader = formatAuthedHeader(token);
  return axios.put(urls.choresTracker() + `${pk}/`, {chore, day, completed}, {headers: authedHeader})
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
  getListGlobalLeaderboard,
  getListFriendLeaderboard,
  addChore,
  getChores,
  deleteChore,
  completeChore,
};
