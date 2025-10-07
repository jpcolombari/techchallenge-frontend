'use client';

import styled, { css } from 'styled-components';
import { InputProps } from '.';

type InputStyleProps = {
  $hasIcon: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xsmall};
  flex-basis: 100%;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Input = styled.input<InputStyleProps & Pick<InputProps, 'error'>>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  transition: all ${({ theme }) => theme.transitions.default};

  ${({ $hasIcon, theme }) =>
    $hasIcon &&
    css`
      padding-left: calc(${theme.spacing.medium} * 2 + 1em);
    `}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }

  ${({ error, theme }) =>
    !!error &&
    css`
      border-color: ${theme.colors.error};
      &:focus {
        box-shadow: 0 0 0 2px ${theme.colors.error};
      }
    `}
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: ${({ theme }) => theme.spacing.xsmall};
`;