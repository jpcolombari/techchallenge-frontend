'use client';
import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Input from '../Input';
import Textarea from '../Textarea';
import Link from 'next/link';
import * as S from './styles';
import { generateQuiz } from '@/services/api';

export type PostFormData = {
  title: string;
  author: string;
  content: string;
  quiz?: {
    question: string;
    answer: boolean;
    explanation: string;
  };
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

  const [generatedQuiz, setGeneratedQuiz] = useState<{ question: string; answer: boolean; explanation: string } | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setAuthor(initialData.author);
      setContent(initialData.content);
      if (initialData.quiz) {
        setGeneratedQuiz(initialData.quiz);
      }
    }
  }, [initialData]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      title,
      author,
      content,
      quiz: generatedQuiz || undefined
    });
  };

  const handleGenerateQuiz = async () => {
    if (!content.trim()) {
      alert("Escreva algum conteúdo antes de gerar a pergunta.");
      return;
    }

    setIsGenerating(true);
    try {
      const quiz = await generateQuiz(content);
      setGeneratedQuiz(quiz);
    } catch (error) {
      console.error("Erro ao gerar quiz:", error);
      alert("Erro ao gerar pergunta com IA.");
    } finally {
      setIsGenerating(false);
    }
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

      <div style={{ marginBottom: '2rem' }}>
        <Button
          type="button"
          onClick={handleGenerateQuiz}
          disabled={isGenerating || !content.trim()}
          variant="secondary"
        >
          {isGenerating ? 'Gerando pergunta com IA...' : '✨ Gerar Pergunta com IA'}
        </Button>

        {generatedQuiz && (
          <div style={{
            marginTop: '1.5rem',
            padding: '1.5rem',
            backgroundColor: '#f0f9ff',
            border: '1px solid #bae6fd',
            borderRadius: '0.5rem'
          }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#0369a1' }}>Pergunta Sugerida pela IA:</h4>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{generatedQuiz.question}</p>
            <p><strong>Resposta:</strong> {generatedQuiz.answer ? 'Verdadeiro' : 'Falso'}</p>
            <p style={{ fontSize: '0.9em', color: '#555', marginTop: '0.5rem' }}>
              <em>Explicação: {generatedQuiz.explanation}</em>
            </p>
          </div>
        )}
      </div>

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