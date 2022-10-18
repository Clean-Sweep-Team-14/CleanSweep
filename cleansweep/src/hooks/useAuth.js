import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as apiEndpoints from "../Endpoints";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const login = async (email, password) => {
    const body = {
      email,
      password,
    };

    setLoading(true);

    try {
      const response = await apiEndpoints.login(body);
      setLoading(false);
      console.log("resoponse", response.status);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      login,
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
