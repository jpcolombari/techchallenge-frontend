'use client';
import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';


export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => `${theme.spacing.medium} 0`};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all 0.2s ease-in-out;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${breakpointsMedia({
  xs: css`
      flex-direction: column;
    `,
  md: css`
      flex-direction: row;
    `,
})}
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 0;
  cursor: pointer;
  font-weight: 800;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryHover} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.025em;
`;

export const Nav = styled.nav`
${breakpointsMedia({
  xs: css`
      margin-top: ${({ theme }) => theme.spacing.small};
    `,
  md: css`
      margin-top: 0;
    `,
})}
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};

  span {
    display: none;
    ${breakpointsMedia({
  md: css`
        display: inline;
      `,
})}
  }
`;

export const AdminLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bodyBackground};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ScoreBadge = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.surface || '#fff'};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  ${breakpointsMedia({
  xs: css`
      display: none; // opcional: esconder ou mostrar no mobile
    `,
  sm: css`
      display: flex;
    `,
})}
`;

export const LoggedOutButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
`;