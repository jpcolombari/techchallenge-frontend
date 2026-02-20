import BackButton from '@/components/BackButton';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import { getPostById, Post } from '@/services/api';
import QuizSection from '@/components/QuizSection';
import * as S from './page.styles';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import Breadcrumbs from '@/components/Breadcrumbs';

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

  // Data com fallback se createdAt estiver ausente
  const date = post.createdAt ? new Date(post.createdAt).toLocaleDateString('pt-BR') : '17 Fev, 2026';

  return (
    <main>
      <ReadingProgressBar />
      <Header />
      <Container>
        <S.Wrapper>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <BackButton />
            <Breadcrumbs items={[{ label: 'Posts' }, { label: post.title }]} />
          </div>
          <S.PostHeader>
            <S.Title>{post.title}</S.Title>
            <S.MetaInfo>
              <S.Author>Por {post.author}</S.Author>
              <span>•</span>
              <time>{date}</time>
            </S.MetaInfo>
          </S.PostHeader>
          <S.CoverImage
            src="/images/banner.jpeg"
            alt={`Imagem de capa do post: ${post.title}`}
          />
          <S.TextCard>
            <S.Content>
              <MarkdownRenderer content={post.content} />
            </S.Content>
            {post.quiz && (
              <QuizSection
                postId={post._id}
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