'use client'; 
import { useRouter } from 'next/navigation';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

const BackButton = () => {
  const router = useRouter();

  return (
    <S.Wrapper>
      <Button variant="ghost" onClick={() => router.back()}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Voltar
      </Button>
    </S.Wrapper>
  );
};

export default BackButton;