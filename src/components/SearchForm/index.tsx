'use client';
import React, { useEffect, useRef } from 'react';
import Input from '../Input';
import Button from '../Button';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

type SearchFormProps = {
  term: string;
  setTerm: (term: string) => void;
  onSearch: (term: string) => void;
  onClear: () => void;
  autoSearch?: boolean;
  debounceMs?: number;
};

const SearchForm = ({
  term,
  setTerm,
  onSearch,
  onClear,
  autoSearch = false,
  debounceMs = 300,
}: SearchFormProps) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // REMOVIDO: A função handleSubmit foi removida.

  const handleClear = () => {
    setTerm('');
    onClear();
  };

  useEffect(() => {
    // A lógica do autoSearch continua a mesma que você implementou
    if (!autoSearch) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (!term.trim()) {
      onClear();
      return;
    }

    timeoutRef.current = setTimeout(() => {
      onSearch(term);
    }, debounceMs);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [term, autoSearch, debounceMs, onSearch, onClear]);

  return (
    // REMOVIDO: O onSubmit foi removido do Wrapper
    <S.Wrapper>
      <Input
        name="search"
        placeholder="Buscar por título ou conteúdo..."
        icon={faSearch}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      {/* REMOVIDO: O botão "Buscar" foi removido */}

      {!!term && (
        <Button type="button" variant="ghost" onClick={handleClear}>
          Limpar
        </Button>
      )}
    </S.Wrapper>
  );
};

export default SearchForm;