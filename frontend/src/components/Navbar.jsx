import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    history.push('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/">Hem</Link>
      <Link to="/products">Produkter</Link>

      {user ? (
        <>
          <span>Hej, {user.email}</span>
          <button onClick={handleLogout}>Logga ut</button>
        </>
      ) : (
        <>
          <Link to="/login">Logga in</Link>
          <Link to="/register">Registrera</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
