import BackButton from '@/components/BackButton';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import { getPostById, Post } from '@/services/api';
import QuizSection from '@/components/QuizSection';
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
          <S.PostHeader>
            <S.Title>{post.title}</S.Title>
            <S.Author>Por {post.author}</S.Author>
          </S.PostHeader>
          <S.CoverImage
            src="/images/banner.jpeg"
            alt={`Imagem de capa do post: ${post.title}`}
          />
          <S.TextCard>
            <S.Content>{post.content}</S.Content>
            {post.quiz && (
              <QuizSection
                question={post.quiz.question}
                answer={post.quiz.answer}
                explanation={post.quiz.explanation}
              />
            )}
          </S.TextCard>
        </S.Wrapper>
      </Container>
    </main>
  );
}