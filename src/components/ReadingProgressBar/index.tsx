'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: transparent;
  z-index: 9999;
`;

const ProgressBarFill = styled.div<{ width: number }>`
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  width: ${({ width }) => width}%;
  transition: width 0.1s ease-out;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
`;

const ReadingProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setProgress(scrollPercent);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <ProgressBarContainer>
            <ProgressBarFill width={progress} />
        </ProgressBarContainer>
    );
};

export default ReadingProgressBar;
