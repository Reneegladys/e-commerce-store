import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);  // Spara token i localStorage
      history.push('/profile');  // Om dirigeras till en profil-sida
    } catch (err) {
      setError('Felaktig inloggning. Försök igen.');
    }
  };

  return (
    <div>
      <h2>Logga in</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-post"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Lösenord"
          required
        />
        <button type="submit">Logga in</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
