import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/Api';

const LoginSignup = () => {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirmacao, setSenhaConfirmacao] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== senhaConfirmacao) {
      alert('As senhas não coincidem.');
      return;
    }

    // Aqui corrigimos o payload para coincidir com o backend
    const payload = { cpf, nome, email, endereco, senha };

    try {
      const response = await api.post('/usuarios', payload);
      alert('Usuário cadastrado com sucesso!');
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário.');
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Cadastre-se</div>
        <div className='underline'></div>
      </div>
      <form onSubmit={handleSubmit} className='inputs'>
        <div className='input'>
          <input type="text"
          placeholder='CPF'
          value={cpf} onChange={(e) => setCpf(e.target.value)} required />
        </div>

        <div className='input'>
          <input type="text"
          placeholder='Nome completo'
          value={nome} onChange={(e) =>
          setNome(e.target.value)} required />
        </div>
        
        <div className='input'>
          <input type="email" placeholder='Email'
          value={email} onChange={(e) =>
          setEmail(e.target.value)} required />
        </div>

        <div className='input'>
          <input type="text" placeholder='Endereço'
          value={endereco} onChange={(e) =>
          setEndereco(e.target.value)} required />
        </div>

        <div className='input'>
          <input type="password" placeholder='Insira sua senha'
          value={senha} onChange={(e) =>
          setSenha(e.target.value)} required />
        </div>
        
        <div className='input'>
          <input type="password" placeholder='Confirme sua senha' value={senhaConfirmacao} onChange={(e) => setSenhaConfirmacao(e.target.value)} required />
        </div>
        <div className="submit-container">
          <button type="submit">Criar Conta</button>
        </div>
      </form>
      <div className="submit">
        <span>Já possui uma conta?
          <Link to="/"> Entre aqui</Link>
        </span>
      </div>
    </div>
  );
};

export default LoginSignup;
