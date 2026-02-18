'use client';
import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';
import { Wrapper as ButtonWrapper } from '@/components/Button/styles';

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxlarge} 0;
  min-height: 50vh;
`;

export const AuthRequiredWrapper = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxlarge} 0;
  max-width: 400px;
  margin: 0 auto;
`;

export const LoginButtonWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  display: flex;
  justify-content: center;
`;

export const Intro = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge} 0;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ActionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  gap: ${({ theme }) => theme.spacing.medium};
  
  ${breakpointsMedia({
  xs: css`
      flex-direction: column-reverse;
      align-items: stretch;
    `,
  md: css`
      flex-direction: row;
      align-items: center;
    `,
})}
`;

export const SearchWrapper = styled.div`
  flex: 1;
  max-width: 400px;
`;

export const LinkAsButton = styled(ButtonWrapper).attrs({ as: 'a' })`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const ListHeader = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.medium};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  letter-spacing: 0.05em;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};

  ${breakpointsMedia({
  xs: css`
      display: none; 
    `,
  md: css`
      display: flex;
    `,
})}
`;

export const HeaderLabel = styled.span``;

export const PostListItem = styled.li`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s ease-in-out;
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  align-items: center;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }

  ${breakpointsMedia({
  xs: css`
      flex-direction: column; 
      align-items: flex-start;
      gap: ${({ theme }) => theme.spacing.medium};
    `,
  md: css`
      flex-direction: row; 
      align-items: center;
      gap: ${({ theme }) => theme.spacing.large};
    `,
})}
`;

export const PostContent = styled.div`
  flex: 1; 
`;

export const PostTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  margin: 0 0 ${({ theme }) => theme.spacing.xsmall} 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const PostSummary = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  line-height: 1.5;
`;

export const PostAuthor = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  
  ${breakpointsMedia({
  xs: css`
      width: 100%;
      &:before {
        content: 'Autor: ';
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text};
      }
    `,
  md: css`
      width: 20%;
      text-align: left;
      &:before {
        content: '';
      }
    `,
})}
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.small};

  ${breakpointsMedia({
  xs: css`
      width: 100%;
      justify-content: flex-start; 
      padding-top: ${({ theme }) => theme.spacing.medium};
      border-top: 1px solid ${({ theme }) => theme.colors.border};
    `,
  md: css`
      width: 20%;
      justify-content: flex-end;
      padding-top: 0;
      border-top: none;
    `,
})}
`;

export const PostCount = styled.p`
  margin-top: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  text-align: right;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;