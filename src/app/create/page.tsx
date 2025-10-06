'use client';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { createPost } from '@/services/api';
import PostForm, { type PostFormData } from '@/components/PostForm';

import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Header from '@/components/Header';
import Button from '@/components/Button';
import LoginModal from '@/components/LoginModal';
import Text from '@/components/Text';
import Spinner from '@/components/Spinner';
import Modal from '@/components/Modal';
import * as S from './page.styles';

export default function CreatePostPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { isAuthenticated, isLoading } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [modalInfo, setModalInfo] = useState<{ title: string; message: string; isError: boolean } | null>(null);

  const handleCreateSubmit = async (data: PostFormData) => {
    setIsSubmitting(true);
    try {
      await createPost(data);
      setModalInfo({ title: 'Sucesso', message: 'Post criado com sucesso!', isError: false });
    } catch (error) {
      console.error('Falha ao criar o post:', error);
      setModalInfo({ title: 'Erro', message: 'Não foi possível criar o post.', isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    if (modalInfo && !modalInfo.isError) {
      router.push('/');
    }
    setModalInfo(null);
  };

  if (isLoading) {
    return (
      <main>
        <Header />
        <Container>
          <S.SpinnerWrapper>
            <Spinner />
          </S.SpinnerWrapper>
        </Container>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <main>
          <Header />
          <Container>
            <S.AuthRequiredWrapper>
              <Heading>Acesso Restrito</Heading>
              <Text>Você precisa estar logado para acessar esta página.</Text>
              <S.LoginButtonWrapper>
                <Button onClick={() => setIsLoginModalOpen(true)}>
                  Fazer Login
                </Button>
              </S.LoginButtonWrapper>
            </S.AuthRequiredWrapper>
          </Container>
        </main>

        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
      </>
    );
  }

  return (
    <>
      <Header />
      <S.MainContent>
        <Container>
          <S.TitleWrapper>
            <Heading>
              Criar Novo Post
            </Heading>
          </S.TitleWrapper>

          <PostForm
            onSubmit={handleCreateSubmit}
            isSubmitting={isSubmitting}
          />

        </Container>
      </S.MainContent>
      {modalInfo && (
        <Modal
          isOpen={!!modalInfo}
          onClose={handleCloseModal}
          title={modalInfo.title}
        >
          <Text>{modalInfo.message}</Text>
          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <Button onClick={handleCloseModal}>
              OK
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}