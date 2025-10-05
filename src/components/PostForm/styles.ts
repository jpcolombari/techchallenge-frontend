'use client';
import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const ActionsRow = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    width: 100%;
    margin-top: 30px; 
    padding-bottom: 20px; 
`;