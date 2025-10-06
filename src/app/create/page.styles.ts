'use client';
import styled from 'styled-components';

export const AuthRequiredWrapper = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxlarge} 0;
`;

export const LoginButtonWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
`;

export const FooterActions = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 20px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 40px;
`;

export const MainContent = styled.main`
  margin-top: 40px;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;