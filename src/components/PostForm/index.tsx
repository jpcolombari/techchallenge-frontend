'use client';
import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Input from '../Input';
import Textarea from '../Textarea';
import Link from 'next/link';
import * as S from './styles';

export type PostFormData = {
  title: string;
  author: string;
  content: string;
};

export type PostFormProps = {
  onSubmit: (data: PostFormData) => void;
  initialData?: PostFormData;
  isSubmitting?: boolean;
};

const PostForm = ({
  onSubmit,
  initialData,
  isSubmitting = false,
}: PostFormProps) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setAuthor(initialData.author);
      setContent(initialData.content);
    }
  }, [initialData]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ title, author, content });
  };

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <Input
        name="title"
        label="Título do Post"
        placeholder="Digite o título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        name="author"
        label="Autor"
        placeholder="Digite o nome do autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Textarea
        name="content"
        label="Conteúdo"
        placeholder="Escreva o conteúdo do post aqui..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

     <S.ActionsRow>
              <Link href="/admin" passHref>
          <Button variant="ghost">
              ← Voltar
          </Button>
        </Link>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Salvando...' : 'Salvar Post'}
        </Button>
      </S.ActionsRow>
    </S.Wrapper>
  );
};

export default PostForm;