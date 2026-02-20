"use client";

import React, { useState, useEffect } from "react";
import Button from "../Button";
import { useAuth } from "@/contexts/AuthContext";
import { checkAnswerStatus, submitAnswer } from "@/services/api";

type QuizSectionProps = {
  postId: string;
  question: string;
  answer: boolean;
  explanation: string;
};

const QuizSection = ({ postId, question, answer, explanation }: QuizSectionProps) => {
  const { user, isAuthenticated, updateScore } = useAuth();
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user?.role === 'STUDENT') {
      checkAnswerStatus(postId)
        .then((res) => {
          if (res.answered) {
            setHasAnswered(true);
            setIsCorrect(res.isCorrect);
            setSelectedAnswer(res.isCorrect ? answer : !answer);
          }
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [postId, user, answer]);

  const handleAnswer = async (userChoice: boolean) => {
    if (!isAuthenticated || user?.role !== 'STUDENT') return;

    setIsSubmitting(true);
    try {
      const res = await submitAnswer(postId, userChoice);
      setSelectedAnswer(userChoice);
      setIsCorrect(res.isCorrect);
      setHasAnswered(true);
      if (res.isCorrect) {
        updateScore(10);
      }
    } catch (error: any) {
      alert(error?.response?.data?.message || "Erro ao responder o quiz.");
    } finally {
      setIsSubmitting(false);
    }
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

      {isLoading ? (
        <p>Carregando desafio...</p>
      ) : !isAuthenticated || user?.role !== 'STUDENT' ? (
        <div style={{ padding: "1rem", backgroundColor: "#f1f5f9", borderRadius: "0.5rem" }}>
          <p>Faça login como <strong>Estudante</strong> para responder aos desafios e ganhar pontos!</p>
        </div>
      ) : !hasAnswered ? (
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button onClick={() => handleAnswer(true)} variant="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Verdadeiro'}
          </Button>
          <Button onClick={() => handleAnswer(false)} variant="secondary" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Falso'}
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
              {isCorrect ? "✅ Resposta Correta! (+10 pontos)" : "❌ Resposta Incorreta"}
            </strong>
            <p>{explanation}</p>
          </div>
          <div style={{ padding: "0.5rem 1rem", backgroundColor: "#f1f5f9", borderRadius: "0.5rem", display: "inline-block" }}>
            🏁 Você já respondeu este desafio.
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizSection;
