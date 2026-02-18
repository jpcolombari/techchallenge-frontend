'use client';
import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';
import { ButtonProps } from '.';

const buttonVariants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
    box-shadow: ${({ theme }) => theme.shadows.default};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primaryHover};
      transform: translateY(-1px);
      box-shadow: ${({ theme }) => theme.shadows.md};
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: ${({ theme }) => theme.shadows.sm};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.textSecondary};
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.sm};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text};
      border-color: ${({ theme }) => theme.colors.textSecondary};
            transform: translateY(-1px);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.error};
    color: white;
    
    &:hover:not(:disabled) {
      opacity: 0.9;
      transform: translateY(-1px);
      box-shadow: ${({ theme }) => theme.shadows.md};
    }
  `,
};

export const Wrapper = styled.button<{ $variant?: ButtonProps['variant'] }>`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 0.625rem 1.25rem;
  font-weight: 500;
  border: 0;
  font-size: ${({ theme }) => theme.fontSizes.small};
  transition: ${({ theme }) => theme.transitions.default};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small};
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${breakpointsMedia({
  md: css`
      font-size: ${({ theme }) => theme.fontSizes.medium};
    `,
})}
  
  ${({ $variant }) => $variant && buttonVariants[$variant]}
`;