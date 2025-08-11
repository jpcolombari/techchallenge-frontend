'use client';

import styled, { keyframes } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

const overlayShow = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const contentShow = keyframes`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`;

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
  z-index: 1000;

  &[data-state='open'] {
    animation: ${overlayShow} ${({ theme }) => theme.transitions.default};
  }
`;

export const Content = styled(Dialog.Content)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-shadow: ${({ theme }) => theme.shadows.default};
  padding: ${({ theme }) => theme.spacing.large};
  width: 90vw;
  max-width: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;

  &[data-state='open'] {
    animation: ${contentShow} ${({ theme }) => theme.transitions.default};
  }
`;

export const Title = styled(Dialog.Title)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.medium};
  right: ${({ theme }) => theme.spacing.medium};
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;