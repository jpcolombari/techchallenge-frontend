'use client';
import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';
import { Wrapper as ButtonWrapper } from '@/components/Button/styles';

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxlarge} 0;
`;

export const AuthRequiredWrapper = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxlarge} 0;
`;

export const LoginButtonWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
`;

export const Intro = styled.div`
  padding: 40px 0;
  text-align: center;
  margin-bottom: 20px;
`;

export const ActionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
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
  ${breakpointsMedia({
    xs: css`
      width: 100%;
    `,
    md: css`
      width: 320px;
    `,
  })}
`;

export const LinkAsButton = styled(ButtonWrapper).attrs({ as: 'a' })``;

export const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListHeader = styled.div`
  display: flex;
  padding: 10px 15px;
  font-weight: 600;
  color: #333;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.5px;

  ${breakpointsMedia({
    xs: css`
      display: none; // Esconde o cabeçalho em telas pequenas
    `,
    md: css`
      display: flex;
    `,
  })}
`;

export const HeaderLabel = styled.span``;

export const PostListItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
  padding: 15px;
  display: flex;
  align-items: center;

  & + & {
    margin-top: 10px; // Espaço entre os itens da lista
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  ${breakpointsMedia({
    xs: css`
      flex-direction: column; // Empilha os itens verticalmente no mobile
      align-items: flex-start;
      gap: 10px; // Espaço entre os blocos empilhados
    `,
    md: css`
      flex-direction: row; // Alinha em linha em telas maiores
      align-items: center;
      gap: 15px;
    `,
  })}
`;

export const PostContent = styled.div`
  flex: 1; // Ocupa o máximo de espaço possível
`;

export const PostTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 4px 0;
  color: #000;
`;

export const PostSummary = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

export const PostAuthor = styled.div`
  color: #333;
  ${breakpointsMedia({
    xs: css`
      width: 100%;
      font-size: 0.9rem;
      color: #555;
      &:before {
        content: 'Autor: ';
        font-weight: 600;
      }
    `,
    md: css`
      width: 25%;
      font-size: 1rem;
      &:before {
        content: '';
      }
    `,
  })}
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;

  ${breakpointsMedia({
    xs: css`
      width: 100%;
      justify-content: flex-end; // Alinha botões à direita no mobile
      margin-top: 10px;
      border-top: 1px solid #eee;
      padding-top: 10px;
    `,
    md: css`
      width: 15%;
      justify-content: center;
      margin-top: 0;
      border-top: none;
      padding-top: 0;
    `,
  })}
`;

export const PostCount = styled.p`
  margin-top: 20px;
  margin-bottom: 25px;
  text-align: right;
  color: #666;
  font-size: 0.9rem;
  padding-right: 15px;
`;