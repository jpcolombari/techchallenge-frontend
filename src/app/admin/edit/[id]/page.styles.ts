"use client";
import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxlarge} 0;
`;

export const Intro = styled.section`
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing.xlarge} 0`};
`;

// ⬇⬇⬇ Aqui os botões lado a lado
export const Actions = styled.div`
  display: flex;
  justify-content: flex-end; /* empurra os botões para a direita */
  flex-wrap: wrap; /* se faltar espaço, quebra para a linha de baixo */
  gap: ${({ theme }) => theme.spacing.medium}; /* espaço entre os botões */
  margin-top: ${({ theme }) => theme.spacing.large};
`;
