'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const StyledMarkdown = styled.div`
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
  }

  h1 { font-size: 2rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.5rem; }

  p {
    margin-bottom: 1rem;
  }

  ul, ol {
    margin-bottom: 1rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    padding-left: 1rem;
    margin-left: 0;
    margin-bottom: 1rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  code {
    background-color: ${({ theme }) => theme.colors.bodyBackground};
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.9em;
  }

  pre {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textLight};
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin-bottom: 1rem;

    code {
      background-color: transparent;
      padding: 0;
      color: inherit;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1rem 0;
  }
`;

type MarkdownRendererProps = {
    content: string;
};

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
    return (
        <StyledMarkdown>
            <ReactMarkdown>{content}</ReactMarkdown>
        </StyledMarkdown>
    );
};

export default MarkdownRenderer;