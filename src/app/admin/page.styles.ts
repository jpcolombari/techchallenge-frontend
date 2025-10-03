'use client';
import styled, { css } from 'styled-components'; 
import breakpointsMedia from '@/utils/breakpointsMedia'; 

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

export const SearchRow = styled.div`
  margin: ${({ theme }) => theme.spacing.small} 0
    ${({ theme }) => theme.spacing.large};
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Intro = styled.div`
    padding: 40px 0;
    text-align: center;
    margin-bottom: 20px; 

    h1 {
        margin-bottom: ${({ theme }) => theme.spacing.small};
        font-size: 2.5rem;
    }

    p {
        color: #666;
    }
`;

export const ActionsRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${breakpointsMedia({
        xs: css`
            flex-direction: column-reverse;
            align-items: stretch;
            margin-bottom: 20px; 
        `,
        md: css`
            flex-direction: row;
            align-items: center;
            margin-bottom: 30px;
        `,
    })}
`;

export const SearchWrapper = styled.div`
    align-items: center;

    ${breakpointsMedia({
        xs: css`
            width: 100%;
            min-width: auto;
            order: 1; 
        `,
        md: css`
            width: 200px; 
            min-width: 250px; 
            order: 0; 
        `,
    })}
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px; 
    margin-top: 20px;
    text-align: left;
`;

export const TableHead = styled.thead`
    th {
        font-weight: 600;
        color: #333;
        padding: 10px 15px;
        text-transform: uppercase;
        font-size: 0.8rem;
        letter-spacing: 0.5px;
    }
`;

export const TableRow = styled.tr`
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s;
    
    &:hover {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
    }
`;

export const TableCell = styled.td`
    padding: 15px;
    border: none;
    vertical-align: top;
    background-color: #fff; 

    &:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    &:last-child {
        text-align: center;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
`;

export const PostTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 4px;
    color: #000;
`;

export const PostSummary = styled.p`
    font-size: 0.9rem;
    color: #666;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;

    button {
        padding: 5px 10px;
        font-size: 0.85rem;
    }
`;

export const PostCount = styled.p`
    margin-top: 20px;
    margin-bottom: 25px;
    text-align: right;
    color: #666;
    font-size: 0.9rem;
    padding-right: 15px;
`;
