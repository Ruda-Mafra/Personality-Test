const express = require('express');
const answerRouter = express.Router();
const Answer = require('../models/Answer'); // Importa o modelo de Answer

// Rota para armazenar as respostas
answerRouter.post('/', async (req, res) => {
    const { questionId, selectedOption, score, userId } = req.body;

    try {
        // Cria uma nova resposta no MongoDB
        const newAnswer = new Answer({
            question: questionId,
            selectedOption: selectedOption,
            score: score, // Pontuação associada à resposta
        });

        // Salva a resposta no banco de dados
        await newAnswer.save();

        // Redireciona para a próxima pergunta
        const nextQuestionIndex = parseInt(req.body.current) + 1;
        res.redirect(`/questions?current=${nextQuestionIndex}&userId=${userId}`);
    } catch (error) {
        console.error('Erro ao salvar resposta no MongoDB:', error);
        res.status(500).send('Erro ao salvar resposta.');
    }
});

module.exports = answerRouter;
