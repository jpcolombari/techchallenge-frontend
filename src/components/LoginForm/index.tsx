'use client';
import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import * as S from './styles';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '@/contexts/AuthContext';
import { loginUser } from '@/services/api';

// Defina o tipo para as props aqui
type LoginFormProps = {
  onSuccess: () => void;
};

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    try {
      const response = await loginUser({ email, password });
      const token = response.access_token;

      if (token) {
        login(token);
        onSuccess(); // Chama a função para fechar o modal
      }
    } catch (err) {
      setError('Email ou senha inválidos.');
      console.error('Falha no login:', err);
    }
  };

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        placeholder="seu-email@exemplo.com"
        icon={faEnvelope}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        name="password"
        type="password"
        placeholder="Sua senha"
        icon={faLock}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {!!error && <S.ErrorText>{error}</S.ErrorText>}
      <Button>Entrar</Button>
    </S.Wrapper>
  );
};

export default LoginForm;