import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    // Redirection vers la page d'accueil
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-white">Username:</label>
          <input type="text" id="username" className="mt-1 p-2 w-full border rounded-md text-black" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-white">Password:</label>
          <input type="password" id="password" className="mt-1 p-2 w-full border rounded-md text-black" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Se connecter</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;