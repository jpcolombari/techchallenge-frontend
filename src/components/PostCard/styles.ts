'use client';

import styled from 'styled-components';

export const MetaInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  align-items: center;
  flex-wrap: wrap; // added to avoid overflow
  
  span, time {
    display: inline-flex;
    align-items: center;
  }
`;

export const AnsweredFlag = styled.span`
  background-color: ${({ theme }) => theme.colors.success + '20'}; // 20% opacity using alpha hex
  color: ${({ theme }) => theme.colors.success};
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.success + '50'};
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.bodyBackground};
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Wrapper = styled.article`
// ... mantendo o resto
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.large};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  background: ${({ theme }) => theme.colors.surface};
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Summary = styled.div`
  margin-top: ${({ theme }) => theme.spacing.small};
`;