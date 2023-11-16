/* eslint-disable react/prop-types */
import Cookies from "js-cookie";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import { notify } from "../../utils/toast";
import { UseLocalStorage } from "../../hooks/useLocalStorage";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = UseLocalStorage();
  const navigate = useNavigate();
  const login = useCallback(
    async (data) => {
      if (setUser) setUser(data);
      window.localStorage.setItem("user", JSON.stringify(data.user));
      Cookies.set("role", data.user.role_name);
      Cookies.set("token", data.token);
      notify("success", "مرحبا بك");
      navigate("/", { replace: true });
    },
    [navigate , setUser]
  );

  const logout = useCallback(async () => {
    if (setUser) setUser(null);
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    Cookies.remove("role");
    notify("success", "Visit Us Again");
    navigate("/login", { replace: true });
  }, [setUser, navigate]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [login, logout, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
