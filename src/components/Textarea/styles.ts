'use client';

import styled, { css } from 'styled-components';
import { TextareaProps } from '.';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xsmall};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
`;

export const Textarea = styled.textarea<Pick<TextareaProps, 'error'>>`
  width: 100%;
  min-height: 150px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  resize: vertical;
  transition: all ${({ theme }) => theme.transitions.default};

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