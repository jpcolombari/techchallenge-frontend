'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import Header from '@/components/Header';
import PostCard from '@/components/PostCard';
import { getPosts, getAnsweredPosts, type Post } from '@/services/api';
import { useAuth } from '@/contexts/AuthContext';
import Heading from '@/components/Heading';
import * as S from './page.styles';
import SearchForm from '@/components/SearchForm';
import Spinner from '@/components/Spinner';
import Pagination from '@/components/Pagination';

// Função auxiliar para data fake (caso backend não retorne ou para simular posts antigos)
const getRandomDate = () => {
  const dates = ['17 Fev, 2026', '16 Fev, 2026', '15 Fev, 2026', '10 Fev, 2026'];
  return dates[Math.floor(Math.random() * dates.length)];
};

export default function Home() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [searchTerm, setSearchTerm] = useState('');
  const [answeredPostIds, setAnsweredPostIds] = useState<string[]>([]);
  const { isAuthenticated, user } = useAuth();

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

  useEffect(() => {
    if (isAuthenticated && user?.role === 'STUDENT') {
      getAnsweredPosts()
        .then((res: { answeredPostIds: string[] }) => setAnsweredPostIds(res.answeredPostIds))
        .catch((err: unknown) => console.error('Falha ao buscar posts respondidos', err));
    } else {
      setAnsweredPostIds([]);
    }
  }, [isAuthenticated, user]);

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
    // Busca local mantida
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <main>
      <Header />
      <Container>
        <S.Intro>
          <Heading as="h1">Tech Challenge Blog</Heading>
          <p>
            Explore artigos sobre desenvolvimento, arquitetura de software e tecnologia.
            Conteúdo curado para impulsionar sua carreira tech.
          </p>
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
            <S.PostsGrid>
              {filteredPosts.length === 0 && !!searchTerm && (
                <p>Nenhum resultado encontrado para “{searchTerm}” nesta página.</p>
              )}

              {filteredPosts.map((post) => {
                const summary = post.content.substring(0, 180) + (post.content.length > 180 ? '...' : '');

                return (
                  <Link
                    key={post._id}
                    href={`/posts/${post._id}`}
                    style={{ textDecoration: 'none', color: 'inherit', height: '100%' }}
                  >
                    <PostCard
                      title={post.title}
                      author={post.author}
                      summary={summary}
                      date={post.createdAt ? new Date(post.createdAt).toLocaleDateString('pt-BR') : getRandomDate()}
                      isAnswered={answeredPostIds.includes(post._id)}
                    />
                  </Link>
                );
              })}
            </S.PostsGrid>

            {totalPages > 1 && (
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            )}
          </>
        )}
      </Container>
    </main>
  );
}