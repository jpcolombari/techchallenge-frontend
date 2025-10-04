"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Spinner from "@/components/Spinner";
import Button from "@/components/Button";
import PostForm, { PostFormData } from "@/components/PostForm";
import { getPostById, updatePost, type Post } from "@/services/api"; // crie getPostById
import * as S from "./page.styles";

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params as { id: string };

  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const p = await getPostById(id);
        setPost(p);
      } catch (error) {
        console.error("Erro ao carregar post:", error);
        alert("Não foi possível carregar o post.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleUpdateSubmit = async (data: PostFormData) => {
    if (!id) return;
    setIsSubmitting(true);
    try {
      await updatePost(id, data);
      alert("Post atualizado com sucesso!");
      router.push("/admin"); // volta
    } catch (error) {
      console.error("Erro ao atualizar post:", error);
      alert("Não foi possível atualizar o post.");
    } finally {
      setIsSubmitting(false);
    }
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
    <main>
      <Header />
      <Container>
        <S.Intro>
          <Heading>Editar Postagem</Heading>
          <Text size="medium">Edite os campos e clique em salvar.</Text>
        </S.Intro>

        <PostForm
          initialData={post}
          onSubmit={handleUpdateSubmit}
          isSubmitting={isSubmitting}
        />

        <S.Actions>
          <Button variant="secondary" onClick={() => router.push("/admin")}>
            Cancelar
          </Button>
        </S.Actions>
      </Container>
    </main>
  );
}
