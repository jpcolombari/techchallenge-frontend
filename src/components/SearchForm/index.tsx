'use client';
import React, { useEffect, useRef } from 'react';
import Button from '../Button';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  const handleClear = () => {
    setTerm('');
    onClear();
  };

  useEffect(() => {
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
    <S.Wrapper>
      <S.IconWrapper>
        <FontAwesomeIcon icon={faSearch} />
      </S.IconWrapper>
      <S.Input
        name="search"
        placeholder="Buscar por título, conteúdo ou autor..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      {!!term && (
        <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
          <Button type="button" variant="ghost" onClick={handleClear} style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>
            Limpar
          </Button>
        </div>
      )}
    </S.Wrapper>
  );
};

export default SearchForm;