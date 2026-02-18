'use client';
import React from 'react';
import * as S from './styles';

type BreadcrumbItem = {
    label: string;
    href?: string;
};

type BreadcrumbsProps = {
    items: BreadcrumbItem[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    return (
        <S.Wrapper aria-label="breadcrumb">
            <ol>
                <li>
                    <S.BreadcrumbLink href="/">Home</S.BreadcrumbLink>
                </li>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={index}>
                            {isLast || !item.href ? (
                                <S.CurrentPage>{item.label}</S.CurrentPage>
                            ) : (
                                <S.BreadcrumbLink href={item.href}>{item.label}</S.BreadcrumbLink>
                            )}
                        </li>
                    );
                })}
            </ol>
        </S.Wrapper>
    );
};

export default Breadcrumbs;
