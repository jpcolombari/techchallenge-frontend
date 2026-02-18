'use client';
import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

export const Intro = styled.section`
  text-align: center;
  padding: 4rem 0 3rem;
  
  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    letter-spacing: -0.05em;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.text} 0%, ${({ theme }) => theme.colors.primary} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    ${breakpointsMedia({
  md: css`
        font-size: 4.5rem;
      `,
})}
  }

  p {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

export const PostsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.large};
  padding-bottom: ${({ theme }) => theme.spacing.xxlarge};
  margin-top: ${({ theme }) => theme.spacing.xlarge};
  
  grid-template-columns: 1fr;
  
  ${breakpointsMedia({
  md: css`
      grid-template-columns: repeat(2, 1fr);
    `,
  lg: css`
      grid-template-columns: repeat(3, 1fr);
    `,
})}
`;

export const PostLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
  cursor: pointer;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxlarge} 0;
  min-height: 50vh;
`;

export const SearchContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
`;