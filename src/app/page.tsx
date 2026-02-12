'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import Header from '@/components/Header';
import PostCard from '@/components/PostCard';
import { getPosts, type Post } from '@/services/api';
import Heading from '@/components/Heading';
import * as S from './page.styles';
import SearchForm from '@/components/SearchForm';
import Spinner from '@/components/Spinner';
import Text from '@/components/Text';
import Button from '@/components/Button';

export default function Home() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [searchTerm, setSearchTerm] = useState('');

  const fetchPosts = async (pageNumber: number) => {
    setIsLoading(true);
    try {
      const response = await getPosts(pageNumber);
      setAllPosts(response.data);
      setTotalPages(response.lastPage);
    } catch (error) {
      console.error('Falha ao buscar posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  // Filtro local (título, conteúdo e autor)
  // Obs: Com paginação no backend, o ideal seria filtrar no backend via API de busca.
  // Mas mantendo o comportamento híbrido (busca local na página atual) ou ajustando para busca global se desejado.
  // Neste passo, vou manter o filtro local na página atual para simplificar, 
  // mas o correto seria o componente SearchForm disparar uma busca na API se o termo não for vazio.
  // Como `searchPosts` já existe, vou integrar melhor depois se precisar.
  // Por enquanto, filtro o que veio da página atual.

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
    // Se quiser busca global, precisaria chamar searchPosts(searchTerm)
    // Mas o fluxo atual sugeria filtro local.
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <main>
      <Header />
      <Container>
        <S.Intro>
          <Heading>Bem-vindo ao Blog!</Heading>
        </S.Intro>


        <S.SearchContainer>
          <SearchForm
            term={searchTerm}
            setTerm={setSearchTerm}
            onSearch={handleSearch}
            onClear={handleClearSearch}
            autoSearch
            debounceMs={300}
          />
        </S.SearchContainer>

        {isLoading ? (
          <S.SpinnerWrapper>
            <Spinner />
          </S.SpinnerWrapper>
        ) : (
          <>
            <Text size="small">Mostrando {filteredPosts.length} post(s) na página {page}</Text>

            <S.PostsGrid>
              {filteredPosts.length === 0 && !!searchTerm && (
                <p>Nenhum resultado encontrado para “{searchTerm}” nesta página.</p>
              )}

              {filteredPosts.map((post) => (
                <Link
                  key={post._id}
                  href={`/posts/${post._id}`}
                  style={{ textDecoration: 'none', color: 'inherit', height: '100%' }}
                >
                  <PostCard
                    title={post.title}
                    author={post.author}
                    summary={post.content.substring(0, 150) + '...'}
                  />
                </Link>
              ))}
            </S.PostsGrid>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
              <Button
                onClick={handlePrevPage}
                disabled={page === 1}
                variant="secondary"
              >
                Anterior
              </Button>
              <span style={{ alignSelf: 'center', fontSize: '1.2rem' }}>
                Página {page} de {totalPages}
              </span>
              <Button
                onClick={handleNextPage}
                disabled={page === totalPages}
                variant="secondary"
              >
                Próxima
              </Button>
            </div>
          </>
        )}
      </Container>
    </main>
  );
}