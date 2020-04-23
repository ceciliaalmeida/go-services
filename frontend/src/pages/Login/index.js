import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { user });

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }

  return (
    <>
      <p>
        Faça seu login
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Usuário</label>
        <input 
          id="user" 
          type="text" 
          placeholder="Seu usuário"
          value={user}
          onChange={event => setUser(event.target.value)}
        />

        <label htmlFor="password">Senha</label>
        <input 
          id="password" 
          type="password" 
          placeholder="Sua senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  )
}