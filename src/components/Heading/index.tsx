import * as S from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
};

const Heading = ({
  children,
  as = 'h1',
  size = 'large',
}: HeadingProps) => {
  return (
    <S.Wrapper as={as} size={size}>
      {children}
    </S.Wrapper>
  );
};

export default Heading;