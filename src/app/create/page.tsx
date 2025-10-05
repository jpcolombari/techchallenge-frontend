'use client';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation'; 
import { createPost, PostFormData } from '@/services/api'; 
import Link from 'next/link';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Header from '@/components/Header';
import Button from '@/components/Button';
import PostForm from '@/components/PostForm'; 
import LoginModal from '@/components/LoginModal';
import Text from '@/components/Text'; 
import Spinner from '@/components/Spinner';
import * as S from './page.styles'; 

export default function CreatePostPage() {
  const router = useRouter(); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { isAuthenticated, isLoading } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleCreateSubmit = async (data: PostFormData) => {
    setIsSubmitting(true);
    try {
      await createPost(data);
      
      alert('Post criado com sucesso!');
      router.push('/'); 
      
    } catch (error) {
      console.error('Falha ao criar o post:', error);
      alert('Não foi possível criar o post.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Heading level={1}>
              Criar Novo Post
            </Heading>
          </S.TitleWrapper>
          
          <PostForm 
            onSubmit={handleCreateSubmit}
            isSubmitting={isSubmitting}
          />

        </Container>
      </S.MainContent>
    </>
  );
}