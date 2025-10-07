'use client';
import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

export const Wrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  

  ${breakpointsMedia({
    xs: css`
      margin-bottom: 15px;
    `,
    md: css`
      margin-bottom: ${({ theme }) => theme.spacing.xxlarge};
    `,
  })}
`;