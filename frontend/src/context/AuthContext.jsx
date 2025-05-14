import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      axios.get('/api/auth/profile', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => setUser(res.data))
      .catch(() => {
        setUser(null);
        setToken('');
        localStorage.removeItem('token');
      });
    }
  }, [token]);

  const login = async (email, password) => {
    const res = await axios.post('/api/auth/login', { email, password });
    setToken(res.data.token);
    localStorage.setItem('token', res.data.token);
  };

  const logout = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
