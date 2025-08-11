import React from 'react';
import Modal from '../Modal';
import RegisterForm from '../RegisterForm';

// Adicione as props aqui
type RegisterModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  return (
    // Use as props aqui
    <Modal isOpen={isOpen} onClose={onClose} title="Criar conta">
      <RegisterForm onSuccess={onClose} />
    </Modal>
  );
};

export default RegisterModal;