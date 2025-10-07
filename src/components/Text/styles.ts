'use client';

import styled, { css, DefaultTheme } from 'styled-components';
import { TextProps } from '.';

type WrapperProps = Omit<TextProps, 'children'>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.large};
  `, 
};

export const Wrapper = styled.p<WrapperProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.text};
    margin: 0;

    ${!!size && wrapperModifiers[size](theme)}
  `}
`;