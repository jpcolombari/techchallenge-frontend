'use client';
import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};

  button {
    margin-top: ${({ theme }) => theme.spacing.medium};
    align-self: flex-end; /* Alinha o botão à direita */
  }
`;