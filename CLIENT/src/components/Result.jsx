import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Result = () => {
  const { score } = useParams();
  const [result, setResult] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    fetch(`http://localhost:3000/api/result/${score}`)
      .then((response) => response.json())
      .then((data) => setResult(data))
      .catch((error) => console.error("Erro ao carregar o resultado:", error));
  }, [score]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!result) {
    return <div>Loading Result...</div>;
  }

  return (
    <div
      className={`relative flex min-h-screen flex-col justify-center items-center overflow-hidden py-6 sm:py-12 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <button
        onClick={toggleTheme}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Alternar para o tema {theme === "light" ? "Dark" : "Light"}
      </button>

      <div className="flex flex-col items-center text-center w-full mt-16">
        <div
          className={`w-full max-w-4xl p-6 text-center rounded-full border-2 ${
            theme === "dark"
              ? "border-gray-500"
              : "bg-white border-black"
          }`}
          style={{
            minHeight: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-medium">
            You are an: {result.result}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Result;
