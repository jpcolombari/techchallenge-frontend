'use client';

import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  transition: box-shadow ${({ theme }) => theme.transitions.default};
  background: ${({ theme }) => theme.colors.background};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.default};
  }
`;

export const Summary = styled.div`
  margin-top: ${({ theme }) => theme.spacing.small};
`;