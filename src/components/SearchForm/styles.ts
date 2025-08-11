'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xxlarge};
`;