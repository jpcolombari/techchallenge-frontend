import Heading from '../Heading';
import Text from '../Text';
import * as S from './styles';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export type PostCardProps = {
  title: string;
  author: string;
  summary: string;
  date?: string;
  isAnswered?: boolean;
};

const PostCard = ({ title, author, summary, date, isAnswered }: PostCardProps) => {
  return (
    <S.Wrapper>
      <Heading as="h2" size="medium">
        {title}
      </Heading>

      <S.MetaInfo>
        <span>{author}</span>
        {date && (
          <>
            <span>•</span>
            <time>{date}</time>
          </>
        )}
        {isAnswered && (
          <>
            <span>•</span>
            <S.AnsweredFlag>✅ Respondido</S.AnsweredFlag>
          </>
        )}
      </S.MetaInfo>

      <S.Summary>
        <MarkdownRenderer content={summary} />
      </S.Summary>
    </S.Wrapper>
  );
};

export default PostCard;