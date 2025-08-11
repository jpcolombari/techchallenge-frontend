'use client';
import styled from 'styled-components';

export const Intro = styled.section`
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing.xxlarge} 0`};
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  padding-bottom: ${({ theme }) => theme.spacing.xxlarge};
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
`;