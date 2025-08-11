import Modal from '../Modal';
import Button from '../Button';
import Heading from '../Heading';
import * as S from './styles';

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
};

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}: ConfirmationModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <p>{message}</p>
      <S.ButtonWrapper>
        <Button variant="ghost" onClick={onClose}>
          Cancelar
        </Button>
        <Button onClick={onConfirm}>Confirmar</Button>
      </S.ButtonWrapper>
    </Modal>
  );
};

export default ConfirmationModal;