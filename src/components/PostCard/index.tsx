import Heading from '../Heading';
import Text from '../Text';
import * as S from './styles';

export type PostCardProps = {
  title: string;
  author: string;
  summary: string;
};

const PostCard = ({ title, author, summary }: PostCardProps) => {
  return (
    <S.Wrapper>
      <Heading as="h2" size="medium">
        {title}
      </Heading>
      <Text size="small">por {author}</Text>
      <S.Summary>
        <Text>{summary}</Text>
      </S.Summary>
    </S.Wrapper>
  );
};

export default PostCard;