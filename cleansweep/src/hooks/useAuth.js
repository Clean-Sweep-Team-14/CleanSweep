import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as apiEndpoints from "../Endpoints";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) return;
    fetchUserData();
  }, [user]);

  const login = async (username, password) => {
    const body = {
      username,
      password,
    };

    setLoading(true);

    try {
      const response = await apiEndpoints.login(body);
      setLoading(false);

      if (response.status === 200) {
        const userData = {
          username,
          auth_token: response.data.auth_token,
        };

        setUser(userData);
        navigate("/chores");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await apiEndpoints.getListGlobalLeaderboard();
      setLoading(false);
      if (response.status === 200 && user) {
        const userData = response.data.results.find(
          (data) => data.username === user.username
        );
        const updatedUser = { ...user, totalPoints: userData.actual_points };
        setUser(updatedUser);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const register = async (username, email, password) => {
    const body = {
      username,
      email,
      password,
    };
    setLoading(true);
    try {
      const response = await apiEndpoints.register(body);
      setLoading(false);

      if (response.status === 201) {
        console.log(`Account created for ${username}, logging in...`);
        await login(username, password);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const loggedOut = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      login,
      register,
      loggedOut,
    }),
    [user, loading]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
