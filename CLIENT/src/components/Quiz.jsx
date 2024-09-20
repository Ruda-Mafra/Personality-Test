import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Usar o hook de navegação do React Router

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate(); // Hook para redirecionar o usuário

  useEffect(() => {
    fetch('http://localhost:3000/api/questions')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Erro ao carregar as perguntas:', error));
  }, []);

  const handleAnswer = (score) => {
    // Adiciona o score atual ao array de respostas
    setAnswers([...answers, score]);

    // Se não for a última pergunta, vai para a próxima
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calcula o somatório das respostas
      const totalScore = answers.reduce((acc, curr) => acc + curr, score); // Inclui a última resposta
      // Redireciona para a página de resultados com o somatório
      navigate(`/result/${totalScore}`);

    }
  };

  if (!questions.length) {
    return <div>Carregando perguntas...</div>;
  }

  return (
    <div>
      <h2>{questions[currentQuestion].questionText}</h2>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(option.score)}>
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
