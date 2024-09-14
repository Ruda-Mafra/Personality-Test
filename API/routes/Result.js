// routes/result.js
const express = require('express');
const router = express.Router();

const userAnswers = {}; // Isso é temporário, como no exemplo anterior. Em um projeto real, usaria um banco de dados para armazenar as respostas.

// Função para calcular a personalidade
function calculatePersonality(answers) {
    let score = 0;

    // Processa as respostas e incrementa o placar com base nas opções respondidas
    for (let questionId in answers) {
        if (answers[questionId] === 'extrovert') {
            score++;
        } else if (answers[questionId] === 'introvert') {
            score--; // Aqui você pode optar por manter 0 ou -1, dependendo de sua lógica
        }
    }

    // Verifica o placar final para determinar a personalidade
    if (score >= 5) {
        return 'Extrovertido';
    } else if (score <= 4) {
        return 'Introvertido';
    }
}

// Rota para obter o resultado final
router.get('/', (req, res) => {
    // Calcula o resultado com base nas respostas armazenadas em 'userAnswers'
    const result = calculatePersonality(userAnswers);

    // Retorna o resultado como uma resposta JSON
    res.json({ result: result });
});

module.exports = router;
