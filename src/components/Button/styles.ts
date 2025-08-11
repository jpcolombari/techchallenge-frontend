'use client';
import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';
import { ButtonProps } from '.';

const buttonVariants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textLight};
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  `,
};

export const Wrapper = styled.button<{ $variant?: ButtonProps['variant'] }>`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  font-weight: 600;
  border: 0;
  transition: opacity ${({ theme }) => theme.transitions.default};

  &:hover {
    opacity: 0.9;
  }

  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.fontSizes.small};
    `,
    md: css`
      font-size: ${({ theme }) => theme.fontSizes.medium};
    `,
  })}
  
  ${({ $variant }) => $variant && buttonVariants[$variant]}
`;