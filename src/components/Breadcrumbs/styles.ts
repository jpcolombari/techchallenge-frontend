'use client';
import styled from 'styled-components';
import Link from 'next/link';

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-family: monospace;

  ol {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
  }

  li {
    display: flex;
    align-items: center;

    &:not(:last-child)::after {
      content: '/';
      margin: 0 0.5rem;
      color: ${({ theme }) => theme.colors.border};
    }
  }
`;

export const BreadcrumbLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;

export const CurrentPage = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
