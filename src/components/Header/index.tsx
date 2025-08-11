'use client';
import React, { useState } from 'react';
import * as S from './styles';
import Container from '../Container';
import { useAuth } from '@/contexts/AuthContext';
import Button from '../Button';
import Link from 'next/link';
import LoginModal from '../LoginModal';
import RegisterModal from '../RegisterModal';

const Header = () => {
  // Puxe o isLoading do contexto
  const { isAuthenticated, logout, isLoading } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <>
      <S.Wrapper>
        <Container>
          <S.Content>
            <Link href="/" passHref>
              <S.Title>Tech Challenge Blog</S.Title>
            </Link>

            <S.Nav>
              {/* Se estiver carregando, não mostre nada */}
              {isLoading ? null : isAuthenticated ? (
                <S.UserInfo>
                  <Link href="/admin" passHref>
                    <S.AdminLink>Painel</S.AdminLink>
                  </Link>
                  <span>Bem-vindo, Professor!</span>
                  <Button variant="ghost" onClick={logout}>
                    Sair
                  </Button>
                </S.UserInfo>
              ) : (
                <S.LoggedOutButtons>
                  <Button onClick={() => setIsLoginModalOpen(true)}>Login</Button>
                  <Button
                    variant="ghost"
                    onClick={() => setIsRegisterModalOpen(true)}
                  >
                    Registrar-se
                  </Button>
                </S.LoggedOutButtons>
              )}
            </S.Nav>
          </S.Content>
        </Container>
      </S.Wrapper>

      {/* Modais */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </>
  );
};

export default Header;