"use client";
import styled from "styled-components";

export const AuthRequiredWrapper = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxlarge} 0;
`;

export const LoginButtonWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxlarge} 0;
`;

export const TitleWrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacing.xlarge} 0`};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.large};
`;
