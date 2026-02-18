"use client";

import React, { useState, useEffect } from "react";
import Button from "../Button";

type QuizSectionProps = {
  question: string;
  answer: boolean;
  explanation: string;
};

const QuizSection = ({ question, answer, explanation }: QuizSectionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Recupera estado salvo ao carregar
  useEffect(() => {
    const savedAnswer = localStorage.getItem(`quiz-${question}-answer`);
    if (savedAnswer !== null) {
      const userChoice = savedAnswer === "true";
      setSelectedAnswer(userChoice);
      setIsCorrect(userChoice === answer);
    }
  }, [question, answer]);

  const handleAnswer = (userChoice: boolean) => {
    setSelectedAnswer(userChoice);
    setIsCorrect(userChoice === answer);
    localStorage.setItem(`quiz-${question}-answer`, String(userChoice));
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    localStorage.removeItem(`quiz-${question}-answer`);
  };

  if (!question) return null;

  return (
    <div
      style={{
        marginTop: "3rem",
        padding: "2rem",
        backgroundColor: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "0.75rem",
        boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
      }}
    >
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "600",
          marginBottom: "1.5rem",
          color: "#0f172a",
        }}
      >
        🧠 Desafio do Conhecimento
      </h3>

      <p
        style={{
          fontSize: "1.125rem",
          marginBottom: "2rem",
          lineHeight: "1.75",
        }}
      >
        {question}
      </p>

      {selectedAnswer === null ? (
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button onClick={() => handleAnswer(true)} variant="primary">
            Verdadeiro
          </Button>
          <Button onClick={() => handleAnswer(false)} variant="secondary">
            Falso
          </Button>
        </div>
      ) : (
        <div>
          <div
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              marginBottom: "1.5rem",
              backgroundColor: isCorrect ? "#dcfce7" : "#fee2e2",
              color: isCorrect ? "#166534" : "#991b1b",
              border: `1px solid ${isCorrect ? "#86efac" : "#fca5a5"}`,
            }}
          >
            <strong style={{ display: "block", marginBottom: "0.5rem" }}>
              {isCorrect ? "✅ Resposta Correta!" : "❌ Resposta Incorreta"}
            </strong>
            <p>{explanation}</p>
          </div>

          <Button onClick={handleReset} variant="ghost">
            Tentar Novamente
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuizSection;
