import React, { TextareaHTMLAttributes } from 'react';
import * as S from './styles';

export type TextareaProps = {
  label?: string;
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({ label, error, name, ...rest }: TextareaProps) => {
  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Textarea name={name} error={error} {...rest} />
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default Textarea;