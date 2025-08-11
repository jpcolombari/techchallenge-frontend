'use client';
import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxlarge} 0;
`;

export const AuthRequiredWrapper = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxlarge} 0;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.large};
  border-collapse: collapse;

  th,
  td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding: ${({ theme }) => theme.spacing.medium};
    text-align: left;
    vertical-align: middle;
  }

  th {
    font-size: ${({ theme }) => theme.fontSizes.small};
    text-transform: uppercase;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const PostTitle = styled.div`
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
`;

export const LoginButtonWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
`;

export const Intro = styled.section`
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing.xxlarge} 0`};
`;

export const SearchRow = styled.div`
  margin: ${({ theme }) => theme.spacing.medium} 0
    ${({ theme }) => theme.spacing.large};
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;