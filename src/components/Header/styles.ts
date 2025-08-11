'use client';
import styled from 'styled-components';

// ... Wrapper, Content, Title, Nav (sem alterações) ...
export const Wrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => `${theme.spacing.medium} 0`};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 0;
  cursor: pointer;
`;

export const Nav = styled.nav``;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};

  button {
    border-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const AdminLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 600;
  transition: opacity ${({ theme }) => theme.transitions.default};

  &:hover {
    opacity: 0.8;
  }
`;

export const LoggedOutButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
`;