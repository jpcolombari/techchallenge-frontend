'use client';
import React from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    return (
        <S.Wrapper>
            <S.PageButton
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Página anterior"
            >
                <FontAwesomeIcon icon={faChevronLeft} style={{ marginRight: '8px' }} />
                Anterior
            </S.PageButton>

            <S.PageInfo>
                {currentPage} / {totalPages}
            </S.PageInfo>

            <S.PageButton
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Próxima página"
            >
                Próxima
                <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: '8px' }} />
            </S.PageButton>
        </S.Wrapper>
    );
};

export default Pagination;
