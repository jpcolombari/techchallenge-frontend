'use client';
import styled from 'styled-components';
import Heading from '@/components/Heading';
import Text from '@/components/Text';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.large} 0;
  max-width: 800px;
  margin: 0 auto;
`;

export const PostHeader = styled.header`
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Title = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
`;

export const Author = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  font-style: italic;
`;

export const MetaInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: ${({ theme }) => theme.spacing.small};
  align-items: center;
  
  span, time {
    display: inline-flex;
    align-items: center;
  }
`;

export const CoverImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  display: block;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const TextCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: ${({ theme }) => theme.spacing.xlarge};
`;

export const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  white-space: pre-wrap;

  p {
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }
`;