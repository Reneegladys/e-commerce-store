import axios from "axios";

const API = axios.create({
  baseURL: "/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Auth
export const login = (data) => API.post("/auth/login", data);
export const register = (data) => API.post("/auth/register", data);

// Products
export const getProducts = (search) => API.get(`/products?search=${search}`);
export const getProductById = (id) => API.get(`/products/${id}`);

// Orders
export const placeOrder = (items) => API.post("/orders", { items });
export const getOrders = () => API.get("/orders");

export default API;
