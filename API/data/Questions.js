const questions = [
  {
    questionText: "Com quem você prefere passar o seu sábado à noite?",
    options: [
      { text: "Sozinho", score: 1 },
      { text: "Com amigos", score: 2 },
      { text: "Com a família", score: 3 },
      { text: "Em uma festa com desconhecidos", score: 4 },
    ],
    // category: "Social",
  },
  {
    questionText: "Como você costuma reagir a conflitos?",
    options: [
      { text: "Evito ao máximo", score: 1 },
      { text: "Tento resolver com calma", score: 2 },
      { text: "Fico nervoso, mas tento dialogar", score: 3 },
      { text: "Enfrento de maneira assertiva", score: 4 },
    ],
    // category: "Personalidade",
  },
  {
    questionText: "O que te faz sentir mais realizado?",
    options: [
      { text: "Ter tempo para mim mesmo", score: 1 },
      { text: "Passar tempo com amigos", score: 2 },
      { text: "Estar com a família", score: 3 },
      { text: "Conhecer novas pessoas", score: 4 },
    ],
    // category: "Personalidade",
  },
  {
    questionText: "Como você prefere trabalhar?",
    options: [
      { text: "Sozinho, com autonomia", score: 1 },
      { text: "Em equipe, colaborando", score: 2 },
      { text: "Misturando trabalho individual e em grupo", score: 3 },
      { text: "Em grandes grupos", score: 4 },
    ],
    // category: "Trabalho",
  },
];

module.exports = questions;
