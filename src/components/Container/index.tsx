import React from 'react';
import * as S from './styles';

export type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Container;