// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Search from './components/Search';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Orders from './components/Orders';
import NotFound from './components/NotFound';
import { AuthProvider } from './context/AuthContext';
import  CartProvider  from './context/CartContext';
import ProductList from './components/Products';

const App = () => (
  <AuthProvider>
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </AuthProvider>
);

export default App;
