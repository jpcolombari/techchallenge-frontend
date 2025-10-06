"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Spinner from "@/components/Spinner";
import Button from "@/components/Button";
import LoginModal from "@/components/LoginModal";
import PostForm, { type PostFormData } from "@/components/PostForm";
import { getPostById, updatePost, type Post } from "@/services/api";
import { useAuth } from "@/contexts/AuthContext";
import Modal from "@/components/Modal";

import * as S from "./page.styles";

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params as { id: string };

  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { isAuthenticated, isLoading: isAuthLoading } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [modalInfo, setModalInfo] = useState<{
    title: string;
    message: string;
    isError: boolean;
  } | null>(null);

  useEffect(() => {
    if (isAuthLoading) return;

    if (!id) return;
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const p = await getPostById(id);
        setPost(p);
      } catch (error) {
        console.error("Erro ao carregar post:", error);
        setModalInfo({
          title: "Erro ao Carregar",
          message: "Não foi possível carregar o post. Você será redirecionado.",
          isError: true,
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id, isAuthenticated, isAuthLoading, router]);

  const handleUpdateSubmit = async (data: PostFormData) => {
    if (!id) return;
    setIsSubmitting(true);
    try {
      await updatePost(id, data);
      setModalInfo({
        title: "Sucesso!",
        message: "Post atualizado com sucesso.",
        isError: false,
      });
    } catch (error) {
      console.error("Erro ao atualizar post:", error);
      setModalInfo({
        title: "Erro",
        message: "Não foi possível atualizar o post.",
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    if (
      (modalInfo && !modalInfo.isError) ||
      (modalInfo?.isError && modalInfo?.title === "Erro ao Carregar")
    ) {
      router.push("/admin");
    }
    setModalInfo(null);
  };

  if (isLoading || isAuthLoading) {
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

  if (!post) {
    return (
      <main>
        <Header />
        <Container>
          <Heading>Post não encontrado</Heading>
          <Button onClick={() => router.push("/admin")}>Voltar</Button>
        </Container>
      </main>
    );
  }

  return (
    <>
      <main>
        <Header />
        <Container>
          <S.TitleWrapper>
            <Heading>Editar Postagem</Heading>
            <Text size="medium">Edite os campos e clique em salvar.</Text>
          </S.TitleWrapper>

          <PostForm
            initialData={post}
            onSubmit={handleUpdateSubmit}
            isSubmitting={isSubmitting}
          />
        </Container>
      </main>

      {modalInfo && (
        <Modal
          isOpen={!!modalInfo}
          onClose={handleCloseModal}
          title={modalInfo.title}
        >
          <Text>{modalInfo.message}</Text>
          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <Button onClick={handleCloseModal}>OK</Button>
          </div>
        </Modal>
      )}
    </>
  );
}
