'use client';
import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import * as S from './styles';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { registerUser, loginUser } from '@/services/api';
import { useAuth } from '@/contexts/AuthContext';

// Defina o tipo para as props aqui
type RegisterFormProps = {
  onSuccess: () => void;
};

const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const { login } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Preencha todos os campos obrigatórios.');
      return;
    }

    if (password !== confirm) {
      setError('As senhas não conferem.');
      return;
    }

    setSubmitting(true);
    try {
      await registerUser({ name, email, password });
      
      // Login automático após o cadastro
      const { access_token } = await loginUser({ email, password });
      login(access_token);
      
      onSuccess(); // Chama a função de sucesso para fechar o modal
    } catch (e: any) {
      const msg =
        e?.response?.data?.message ||
        e?.message ||
        'Não foi possível criar sua conta. Tente novamente.';
      setError(String(msg));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <Input
        name="name"
        placeholder="Seu nome"
        icon={faUser}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        name="email"
        type="email"
        placeholder="Seu e-mail"
        icon={faEnvelope}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        name="password"
        type="password"
        placeholder="Crie uma senha"
        icon={faLock}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirme a senha"
        icon={faLock}
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />

      {!!error && <S.ErrorText>{error}</S.ErrorText>}

      <Button type="submit" disabled={submitting} aria-busy={submitting}>
        {submitting ? 'Criando conta...' : 'Criar conta'}
      </Button>
    </S.Wrapper>
  );
};

export default RegisterForm;