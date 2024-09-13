const mongoose = require("mongoose");


const answerSchema = new Schema({
  question: {
    type: Schema.Types.ObjectId,
    ref: 'Question', // Referência à pergunta respondida
    required: true
  },
  selectedOption: {
    type: String, // Texto da opção selecionada pelo usuário
    required: true
  },
  score: {
    type: Number, // Pontuação associada à opção selecionada
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Answer', answerSchema);
