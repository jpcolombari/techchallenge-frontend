'use client';
import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { getPosts, deletePost, type Post } from '@/services/api';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Heading from '@/components/Heading';
import Button from '@/components/Button';
import Spinner from '@/components/Spinner';
import Text from '@/components/Text';
import LoginModal from '@/components/LoginModal';
import SearchForm from '@/components/SearchForm';
import ConfirmationModal from '@/components/ConfirmationModal';
import * as S from './page.styles';

export default function AdminPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Estados para o modal de exclusão
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Carrega todos os posts ao entrar autenticado
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      const fetchPosts = async (pageNumber: number) => {
        setIsLoadingPosts(true);
        try {
          const response = await getPosts(pageNumber, 10);
          setAllPosts(response.data);
          setTotalPages(response.lastPage);
        } catch (error) {
          console.error("Falha ao buscar posts:", error);
        } finally {
          setIsLoadingPosts(false);
        }
      };
      fetchPosts(page);
    } else if (!isLoading && !isAuthenticated) {
      setIsLoadingPosts(false);
    }
  }, [isAuthenticated, isLoading, page]);

  // Filtro local
  const filteredPosts = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return allPosts;
    return allPosts.filter(
      (p) =>
        p.title?.toLowerCase().includes(q) ||
        p.content?.toLowerCase().includes(q) ||
        p.author?.toLowerCase().includes(q)
    );
  }, [allPosts, searchTerm]);

  const handleCreateClick = () => {
    router.push('/create');
  };

  const handleDeleteClick = (post: Post) => {
    setPostToDelete(post);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!postToDelete) return;
    try {
      await deletePost(postToDelete._id);
      setAllPosts((currentPosts) =>
        currentPosts.filter((p) => p._id !== postToDelete._id)
      );
      setIsDeleteModalOpen(false);
      setPostToDelete(null);
    } catch (error) {
      console.error("Falha ao deletar o post:", error);
      alert("Não foi possível excluir o post.");
      setIsDeleteModalOpen(false);
    }
  };

  if (isLoading) {
    return (
      <main>
        <Header />
        <Container>
          <S.SpinnerWrapper />
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
      <main>
        <Header />
        <Container>
          <S.Intro>
            <Heading>Bem-vindo ao Painel</Heading>
            <Text size="medium">
              Gerencie, edite e exclua as postagens do blog.
            </Text>
          </S.Intro>
          <S.ActionsRow>
            <Button variant="primary" onClick={handleCreateClick}>
              Criar Novo Post
            </Button>
            <S.SearchWrapper>
              <SearchForm
                term={searchTerm}
                setTerm={setSearchTerm}
                onSearch={() => { }}
                onClear={() => setSearchTerm('')}
                autoSearch
                debounceMs={300}
              />
            </S.SearchWrapper>
          </S.ActionsRow>

          {isLoadingPosts ? (
            <S.SpinnerWrapper>
              <Spinner />
            </S.SpinnerWrapper>
          ) : (
            <>
              <S.PostList>
                <S.ListHeader>
                  <S.HeaderLabel style={{ flex: '1' }}>Post</S.HeaderLabel>
                  <S.HeaderLabel style={{ width: '25%' }}>Autor</S.HeaderLabel>
                  <S.HeaderLabel style={{ width: '15%', textAlign: 'center' }}>Ações</S.HeaderLabel>
                </S.ListHeader>
                {filteredPosts.map((post) => (
                  <S.PostListItem key={post._id}>
                    <S.PostContent>
                      <S.PostTitle>{post.title}</S.PostTitle>
                      <S.PostSummary>
                        {post.content.substring(0, 80)}...
                      </S.PostSummary>
                    </S.PostContent>
                    <S.PostAuthor>{post.author}</S.PostAuthor>
                    <S.PostActions>
                      <Link href={`/admin/edit/${post._id}`} passHref legacyBehavior>
                        <S.LinkAsButton $variant="secondary">Editar</S.LinkAsButton>
                      </Link>
                      <Button
                        variant="ghost"
                        onClick={() => handleDeleteClick(post)}
                      >
                        Excluir
                      </Button>
                    </S.PostActions>
                  </S.PostListItem>
                ))}
              </S.PostList>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                <Button
                  onClick={() => page > 1 && setPage(page - 1)}
                  disabled={page === 1}
                  variant="secondary"
                >
                  Anterior
                </Button>
                <span style={{ alignSelf: 'center', fontSize: '1.2rem' }}>
                  Página {page} de {totalPages}
                </span>
                <Button
                  onClick={() => page < totalPages && setPage(page + 1)}
                  disabled={page === totalPages}
                  variant="secondary"
                >
                  Próxima
                </Button>
              </div>
              <S.PostCount>
                Mostrando {filteredPosts.length} post(s) na página {page}
              </S.PostCount>
            </>
          )}
        </Container>
      </main>

      {postToDelete && (
        <ConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleConfirmDelete}
          title="Confirmar Exclusão"
          message={`Você tem certeza que deseja excluir o post "${postToDelete.title}"?`}
        />
      )}
    </>
  );
}