import { Link } from "react-router-dom";
import React, { useState } from "react";

function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <button
        onClick={toggleTheme}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Alternar para o tema {theme === "light" ? "Dark" : "Light"}
      </button>

      <div
        className={`w-full max-w-4xl p-6 text-center rounded-full ${
          theme === "dark" ? "bg-gray-800" : ""
        }`}
        style={{
          minHeight: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="text-4xl font-bold">Welcome to the Personality Test</h1>
      </div>

      <Link to="/questions">
        <button className={`w-full max-w-4xl p-6 mt-6 text-center rounded-full border-2 ${
          theme === "dark" ? "bg-gray-800 border-gray-500" : "bg-white border-black"
        }`}>
          Start the Quiz
        </button>
      </Link>
    </div>
  );
}

export default Home;
