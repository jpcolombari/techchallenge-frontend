'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.xxlarge} 0;
`;

export const Author = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-style: italic;
  margin-top: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Content = styled.div`
  line-height: 1.8;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;