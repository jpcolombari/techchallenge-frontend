'use client';

import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

type WrapperProps = Omit<HeadingProps, 'children'>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.large};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.xlarge};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.xxlarge};
  `,
};

export const Wrapper = styled.h1<WrapperProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.secondary};
    margin: 0;

    ${!!size && wrapperModifiers[size](theme)}
  `}
`;