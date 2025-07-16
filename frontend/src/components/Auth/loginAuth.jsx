import React, { useState } from 'react';
import { login } from '../../api/Auth/authService';
import { Link } from 'react-router-dom';

const LoginAuth = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, senha);
      alert(response.data.mensagem);
    } catch (error) {
      alert(error.response?.data?.erro || 'Erro ao fazer login');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)} />
      
      <input type="password"
      placeholder="Senha"
      value={senha}
      onChange={(e) => setSenha(e.target.value)} />

      <button type="submit">Entrar</button>

      <span>Não tem uma conta?
          <Link to="/signup"> Cadastre-se aqui</Link>
        </span>

    </form>
  );
};

export default LoginAuth;
