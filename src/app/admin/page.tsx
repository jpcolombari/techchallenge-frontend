'use client';
import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { getPosts, deletePost, createPost, updatePost, type Post } from '@/services/api'; // ADICIONADO: updatePost
import Container from '@/components/Container';
import Header from '@/components/Header';
import Heading from '@/components/Heading';
import Button from '@/components/Button';
import Spinner from '@/components/Spinner';
import Text from '@/components/Text';
import LoginModal from '@/components/LoginModal';
import SearchForm from '@/components/SearchForm';
import ConfirmationModal from '@/components/ConfirmationModal';
import Modal from '@/components/Modal';
import PostForm, { PostFormData } from '@/components/PostForm';
import * as S from './page.styles';

export default function AdminPage() {
  const { isAuthenticated, isLoading } = useAuth();

  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Estados para o modal de exclusão
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);

  // Estados para o modal de criação
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ADICIONADO: Estados para o modal de edição
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [postToEdit, setPostToEdit] = useState<Post | null>(null);

  // Carrega todos os posts ao entrar autenticado
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      const fetchPosts = async () => {
        setIsLoadingPosts(true);
        try {
          const postData = await getPosts();
          setAllPosts(postData);
        } catch (error) {
          console.error('Falha ao buscar posts:', error);
        } finally {
          setIsLoadingPosts(false);
        }
      };
      fetchPosts();
    } else if (!isLoading && !isAuthenticated) {
      setIsLoadingPosts(false);
    }
  }, [isAuthenticated, isLoading]);

  // Filtro local (título, conteúdo e autor)
  const filteredPosts = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return allPosts;
    return allPosts.filter((p) => {
      const t = p.title?.toLowerCase() ?? '';
      const c = p.content?.toLowerCase() ?? '';
      const a = p.author?.toLowerCase() ?? '';
      return t.includes(q) || c.includes(q) || a.includes(q);
    });
  }, [allPosts, searchTerm]);

  const handleSearch = () => {
    // No filtro local, não precisamos fazer nada aqui.
  };

  const handleClear = () => setSearchTerm('');

  // Funções para lidar com a exclusão
  const handleDeleteClick = (post: Post) => {
    setPostToDelete(post);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!postToDelete) return;
    try {
      await deletePost(postToDelete._id);
      setAllPosts((currentPosts) =>
        currentPosts.filter((p) => p._id !== postToDelete._id),
      );
      setIsDeleteModalOpen(false);
      setPostToDelete(null);
    } catch (error) {
      console.error('Falha ao deletar o post:', error);
      alert('Não foi possível excluir o post.');
      setIsDeleteModalOpen(false);
    }
  };

  // Função para lidar com a criação
  const handleCreateSubmit = async (data: PostFormData) => {
    setIsSubmitting(true);
    try {
      const newPost = await createPost(data);
      setAllPosts((currentPosts) => [newPost, ...currentPosts]);
      setIsCreateModalOpen(false);
    } catch (error) {
      console.error('Falha ao criar o post:', error);
      alert('Não foi possível criar o post.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ADICIONADO: Funções para lidar com a edição
  const handleEditClick = (post: Post) => {
    setPostToEdit(post);
    setIsEditModalOpen(true);
  };

  const handleUpdateSubmit = async (data: PostFormData) => {
    if (!postToEdit) return;
    setIsSubmitting(true);
    try {
      const updatedPost = await updatePost(postToEdit._id, data);
      setAllPosts((currentPosts) =>
        currentPosts.map((p) => (p._id === updatedPost._id ? updatedPost : p)),
      );
      setIsEditModalOpen(false);
      setPostToEdit(null);
    } catch (error) {
      console.error('Falha ao atualizar o post:', error);
      alert('Não foi possível atualizar o post.');
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
          <S.HeaderRow>
            <SearchForm
              term={searchTerm}
              setTerm={setSearchTerm}
              onSearch={handleSearch}
              onClear={handleClear}
              autoSearch
              debounceMs={300}
            />
            <Button onClick={() => setIsCreateModalOpen(true)}>Novo Post</Button>
          </S.HeaderRow>

          <Text size="small">Mostrando {filteredPosts.length} post(s)</Text>

          {isLoadingPosts ? (
            <S.SpinnerWrapper>
              <Spinner />
            </S.SpinnerWrapper>
          ) : (
            <>
              <S.Table>
                <thead>
                  <tr>
                    <th>Post</th>
                    <th>Autor</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.map((post) => (
                    <tr key={post._id}>
                      <td>
                        <S.PostTitle>{post.title}</S.PostTitle>
                        <Text size="small">
                          {post.content.substring(0, 80)}...
                        </Text>
                      </td>
                      <td>{post.author}</td>
                      <td>
                        <S.Actions>
                          {/* ADICIONADO: onClick para o botão Editar */}
                          <Button variant="ghost" onClick={() => handleEditClick(post)}>
                            Editar
                          </Button>
                          <Button
                            variant="ghost"
                            onClick={() => handleDeleteClick(post)}
                          >
                            Excluir
                          </Button>
                        </S.Actions>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </S.Table>
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

      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Criar Novo Post"
      >
        <PostForm
          onSubmit={handleCreateSubmit}
          isSubmitting={isSubmitting}
        />
      </Modal>

      {postToEdit && (
        <Modal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          title="Editar Post"
        >
          <PostForm
            onSubmit={handleUpdateSubmit}
            isSubmitting={isSubmitting}
            initialData={postToEdit}
          />
        </Modal>
      )}
    </>
  );
}