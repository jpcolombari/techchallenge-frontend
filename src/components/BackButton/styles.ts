'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};

  button {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.small};
  }
`;