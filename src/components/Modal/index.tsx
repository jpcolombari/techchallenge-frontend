'use client';
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <S.Overlay />
        <S.Content>
          <S.Title>{title}</S.Title>
          <Dialog.Close asChild>
            <S.CloseButton aria-label="Close">
              <FontAwesomeIcon icon={faTimes} />
            </S.CloseButton>
          </Dialog.Close>
          {children}
        </S.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;