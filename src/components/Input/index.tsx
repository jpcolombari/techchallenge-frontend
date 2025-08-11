import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type InputProps = {
  label?: string;
  icon?: IconDefinition;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, icon, error, name, ...rest }: InputProps) => {
  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon>{<FontAwesomeIcon icon={icon} />}</S.Icon>}
        <S.Input $hasIcon={!!icon} name={name} error={error} {...rest} />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default Input;