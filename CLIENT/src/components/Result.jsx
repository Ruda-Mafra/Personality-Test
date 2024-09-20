import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Result = () => {
  const { score } = useParams(); // Obtém o somatório da URL
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Busca o resultado no backend com base no somatório
    fetch(`http://localhost:3000/api/result/${score}`)
      .then(response => response.json())
      .then(data => setResult(data))
      .catch(error => console.error('Erro ao carregar o resultado:', error));
  }, [score]);

  if (!result) {
    return <div>Carregando resultado...</div>;
  }

  return (
    <div>
      <h2>Seu resultado</h2>
      <p>{result.result}</p>
    </div>
  );
};

export default Result;
