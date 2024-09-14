const express = require('express');
const questionRouter = express.Router();
const Question = require('../models/Question'); // Importa o modelo

// Rota para pegar uma pergunta (por ordem ou ID)
questionRouter.get('/', async (req, res) => {
    const questionIndex = req.query.current || 0; // Pega a pergunta atual, 0 por padrão
    const questions = await Question.find();

    if (questionIndex < questions.length) {
        res.json(questions[questionIndex]); // Envia a pergunta atual
    } else {
        res.status(404).send('Nenhuma pergunta disponível');
    }
});

module.exports = questionRouter;
