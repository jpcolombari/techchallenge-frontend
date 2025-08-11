'use client';

import styled from 'styled-components';
import medias from '@/utils/medias';

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${medias.breakpoints.xl}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => theme.spacing.medium};
  padding-right: ${({ theme }) => theme.spacing.medium};
`;