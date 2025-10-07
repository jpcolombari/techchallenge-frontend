import * as S from './styles';

export type TextProps = {
  children: React.ReactNode;
  as?: 'p' | 'span' | 'div';
  size?: 'small' | 'medium' | 'large';
};

const Text = ({ children, as = 'p', size = 'medium' }: TextProps) => {
  return (
    <S.Wrapper as={as} size={size}>
      {children}
    </S.Wrapper>
  );
};

export default Text;