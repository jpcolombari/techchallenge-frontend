import React from 'react';
import Modal from '../Modal';
import LoginForm from '../LoginForm';

// Adicione as props aqui
type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    // Use as props aqui
    <Modal isOpen={isOpen} onClose={onClose} title="Login">
      <LoginForm onSuccess={onClose} />
    </Modal>
  );
};

export default LoginModal;