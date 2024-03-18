import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoutez votre logique de connexion ici
    // Redirection vers la page d'accueil
    navigate('/');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Username:</h3>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <h3>Password:</h3>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <br/>
        <br/>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default LoginForm;