const mongoose = require("mongoose");
// const { Schema } = mongoose;

const questionSchema = new Schema(
  {
    questionText: {
      type: String,
      required: true,
    },
    options: [
      {
        text: {
          type: String,
          required: true,
        },
        score: {
          type: Number,
          required: true,
        },
      },
    ],
    // category: {
    //   type: String, // Categoria opcional para classificar a pergunta (ex: "Social", "Personalidade", etc.)
    //   required: true,
    // },
  },
  {
    timestamps: true, // Cria automaticamente campos createdAt e updatedAt
  }
);

module.exports = mongoose.model("Question", questionSchema);
