import BackButton from '@/components/BackButton';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import { getPostById, Post } from '@/services/api';
import * as S from './page.styles';

type PostPageProps = {
  params: {
    id: string;
  };
};

export default async function PostPage({ params }: PostPageProps) {
  let post: Post | null = null;

  try {
    post = await getPostById(params.id);
  } catch (error) {
    console.error(`Falha ao buscar o post com ID ${params.id}:`, error);
  }

  if (!post) {
    return (
      <main>
        <Header />
        <Container>
          <S.Wrapper>
            <BackButton />
            <Heading>Post não encontrado</Heading>
            <Text>
              O post que você está procurando não existe ou foi removido.
            </Text>
          </S.Wrapper>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <Header />
      <Container>
        <S.Wrapper>
            <BackButton />
            <Heading>{post.title}</Heading>
            <S.Author>Por {post.author}</S.Author>
            <S.Content>{post.content}</S.Content>
        </S.Wrapper>
      </Container>
    </main>
  );
}