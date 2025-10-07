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

export default function Home() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const postData = await getPosts();
        setAllPosts(postData);
      } catch (error) {
        console.error('Falha ao buscar posts:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

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

  const handleClearSearch = () => {
    setSearchTerm('');
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
            <Text size="small">Mostrando {filteredPosts.length} post(s)</Text>

            <S.PostsGrid>
              {filteredPosts.length === 0 && !!searchTerm && (
                <p>Nenhum resultado encontrado para “{searchTerm}”.</p>
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
          </>
        )}
      </Container>
    </main>
  );
}