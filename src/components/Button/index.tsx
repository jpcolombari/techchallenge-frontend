import * as S from './styles';
import { ButtonHTMLAttributes } from 'react'; 

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = 'primary',
  ...rest 
}: ButtonProps) => {
  return (
    <S.Wrapper $variant={variant} {...rest}>
      {children}
    </S.Wrapper>
  );
};

export default Button;